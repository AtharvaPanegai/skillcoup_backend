const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please enter your last name"],
    },
    organisation: {
      type: String,
      required: [true, "Please enter your organisation name"],
    },
    email: { type: String, required: [true, "Please enter your email"] },
    phone: { type: String, required: [true, "Please enter your phone number"] },
    // logo: String,
  },
  { timestamps: true }
);

const Employer1 = mongoose.model("Employer1", EmployerSchema);

module.exports = Employer1;
