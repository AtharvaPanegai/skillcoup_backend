const express = require("express");
const router = express.Router();

const { createOrder, verifyPayment, stripeCreatePaymentIntent, stripe } = require("../controller/paymentController");

router.route("/payment/createorder").post(createOrder);
router.route("/payment/verify").post(verifyPayment)
router.route("/buy").post(stripeCreatePaymentIntent);
router.route("/stripe").post(stripe);

module.exports = router;