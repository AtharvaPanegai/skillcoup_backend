const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FreelancerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please provide your first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please provide your last name"],
    },
    profile: {
      type: String,
      required: [true, "Please provide your profile picture"],
    },
    description: {
      type: String,
      required: [true, "Please tell us about yourself"],
    },
    language: {
      type: [
        {
          lang: String,
          required: [true, "Please mention any languages you know"],
        },
        { level: String, required: [true, "Please select your level"] },
      ],
    },
  },
  { timestamps: true }
);

const Freelancer1 = mongoose.model("Freelancer", FreelancerSchema);
module.exports = Freelancer1;
