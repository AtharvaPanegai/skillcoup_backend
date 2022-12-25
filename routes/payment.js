const express = require("express");
const router = express.Router();

const { createOrder, verifyPayment } = require("../controller/paymentController");

router.route("/payment/createorder").post(createOrder);
router.route("/payment/verify").post(verifyPayment)

module.exports = router;