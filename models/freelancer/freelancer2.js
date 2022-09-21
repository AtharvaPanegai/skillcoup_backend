const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FreelancerSchema = new Schema({
  skills: {
    type: [
      {
        language: String,
      },
      {
        level: String,
      },
    ],
  },
  education: {
    type: [
      {
        qualification: String,
      },
      {
        start: Date,
      },
      { end: Date },
    ],
  },
  certification: {
    type: [{ name: String }],
  },
  website: {
    type: String,
  },
});

const Freelancer2 = mongoose.model("Freelancer2", FreelancerSchema);
module.exports = Freelancer2;
