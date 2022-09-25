const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  lang: {
    type: String,
    required: [true, "Please enter a language"],
  },
  level: {
    type: String,
    required: [true, "Please select a level"],
  },
});

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
      // required: [true, "Please provide your profile picture"],
    },
    description: {
      type: String,
      required: [true, "Please tell us about yourself"],
    },
    language: {
      type: [languageSchema],
      required: [true, "Please add some languages"],
    },
  },
  { timestamps: true }
);

const Freelancer1 = mongoose.model("Freelancer1", FreelancerSchema);
module.exports = Freelancer1;
