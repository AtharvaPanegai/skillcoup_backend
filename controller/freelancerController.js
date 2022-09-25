const BigPromise = require("../middleware/BigPromise");
const Freelancer1 = require("../models/freelancer/freelancer1");
const Freelancer2 = require("../models/freelancer/freelancer2");

exports.createFreelancer1 = BigPromise(async (req, res, next) => {
  const { firstName, lastName, description, language } = req.body;
  let file = req.file;
  try {
    const freelancer = await Freelancer1.create({
      firstName,
      lastName,
      description,
      language,
    });
    res.status(201).json(freelancer);
  } catch (err) {
    next(err);
  }
});

exports.fetchFreelancer1 = BigPromise(async (req, res, next) => {
  try {
    const freelancer1 = await Freelancer1.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(freelancer1);
  } catch {
    next(err);
  }
});

exports.createFreelancer2 = BigPromise(async (req, res, next) => {
  const { skills, education, certification, website } = req.body;
  try {
    const freelancer = await Freelancer2.create({
      skills,
      education,
      certification,
      website,
    });
    res.status(201).json(freelancer);
  } catch (err) {
    next(err);
  }
});

exports.fetchFreelancer2 = BigPromise(async (req, res, next) => {
  try {
    const freelancer2 = await Freelancer2.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(freelancer2);
  } catch (err) {
    next(err);
  }
});
