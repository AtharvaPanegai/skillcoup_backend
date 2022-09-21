const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EmployerSchema = new Schema({
  about: {
    type: String,
    required: [true, "Please describe your organisation"],
  },
  address: {
    type: String,
    required: [true, "Please provide your address"],
  },
  location: {
    type: String,
    required: [true, "Please provide your location"],
  },
  pincode: {
    type: String,
    required: [true, "Please provide your pincode"],
  },
  businessURL: {
    type: String,
    required: [true, "Please provide your business website URL"],
  },
  organisationType: {
    type: [
      {
        type: String,
        required: [true, "Please provide your organisation type"],
      },
      {
        employees: Number,
        required: [
          true,
          "Please provide the number of employees in your organisation",
        ],
      },
    ],
  },
});

const Employer2 = mongoose.model("Employer2", EmployerSchema);
module.exports = Employer2;
