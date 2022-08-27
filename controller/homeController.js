/** @format */

const BigPromise = require("../middleware/BigPromise");

exports.home = BigPromise(async (req, res) => {
  // const db = await something()
  res.status(200).json({
    success: true,
    greeting: "Hello from Backend...!",
  });
});

exports.dummy = BigPromise((req, res) => {
  res.status(200).json({
    success: true,
    greeting: "This is another dummy router",
  });
});
