/** @format */

const Razorpay = require("razorpay");
const { createHmac } = require("crypto");
require("dotenv").config();
const BigPromise = require("../middleware/BigPromise");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SEC_KEY);

exports.createOrder = async (req, res, next) => {

    const { amount } = req.body;
    // create a new instance of razorpay
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_PUBKEY,
            key_secret: process.env.RAZORPAY_SECKEY,
        });
        const options = {
            amount: amount, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.verifyPayment = BigPromise(async (req, res, next) => {
    const {
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
    } = req.body;

    const shasum = createHmac("sha256", process.env.RAZORPAY_SECKEY);

    shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
    const digest = shasum.digest("hex");

    // comparing digest with actual signature

    if (digest !== razorpaySignature) {
        return res.status(400).json({
            msg: "Transaction is not legit!",
        });
    }

    res.status(200).json({
        success: true,
        msg: "Success! Click on Register Button to Register for Event",
        orderId: razorpayOrderId,
        paymentId: razorpayPaymentId,
    });
});


exports.stripeCreatePaymentIntent = async (req, res) => {
    try {
      // Getting data from client
      let { amount,email } = req.body;
      // Simple validation
      if (!email || !amount)
        return res.status(400).json({ message: "Invalid data" });
      amount = parseInt(amount);
  
      // Initiate payment
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.round(amount * 100),
        currency: "INR",
        payment_method_types: ["card"],
        metadata: { email, amount },
      });
      // Extracting the client secret
      const clientSecret = paymentIntent.client_secret;
      // Sending the client secret as response
      res.json({ message: "Payment initiated", clientSecret });
    } catch (err) {
      // Catch any error and send error 500 to client
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

exports.stripe = async (req, res) => {
    // Get the signature from the headers
    const sig = req.headers["stripe-signature"];

    let event;

    try {
        // Check if the event is sent from Stripe or a third party
        // And parse the event
        event = await stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        // Handle what happens if the event is not from Stripe
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
    // Event when a payment is initiated
    if (event.type === "payment_intent.created") {
        console.log(`${event.data.object.metadata.email} payment initated!`);
    }
    // Event when a payment is succeeded
    if (event.type === "payment_intent.succeeded") {
        // fulfilment
        console.log(`${event.data.object.metadata.email} payment succeeded!`);
    }
    res.json({ ok: true });
}