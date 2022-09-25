const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillsSchema = new Schema({
  language: {
    type: String,
  },
  level: {
    type: String,
  },
});

const FreelancerSchema = new Schema({
  // _id: {
  //   type: Schema.Types.ObjectId,
  //   ref: "Freelance1",
  // },
  skills: {
    type: [skillsSchema],
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
