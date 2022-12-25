/** @format */

const Razorpay = require("razorpay");
const { createHmac } = require("crypto");
require("dotenv").config();
const BigPromise = require("../middleware/BigPromise");

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
