const BigPromise = require("../middleware/BigPromise");
const Employer1 = require("../models/employer/employer1");
const Employer2 = require("../models/employer/employer2");

exports.createEmployer1 = BigPromise(async (req, res, next) => {
  const { firstName, lastName, organisation, email, phone } = req.body;
  const file = req.files.file;
  console.log(file);
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  try {
    const employer1 = await Employer1.create({
      firstName,
      lastName,
      organisation,
      email,
      phone,
    });
    res.status(201).json(employer1);
  } catch (err) {
    next(err);
  }
});

exports.fetchEmployer1 = BigPromise(async (req, res, next) => {
  try {
    const employer1 = await Employer1.find({});
    res.status(200).json(employer1);
  } catch (err) {
    next(err);
  }
});

exports.createEmployer2 = BigPromise(async (req, res, next) => {
  const { about, address, location, pincode, businessURL, organisationType } =
    req.body;
  try {
    const employer1 = await Employer2.create({
      about,
      address,
      location,
      pincode,
      businessURL,
      organisationType,
    });
    res.status(201).json(employer1);
  } catch (err) {
    next(err);
  }
});

exports.fetchEmployer2 = BigPromise(async (req, res, next) => {
  try {
    const employer2 = await Employer2.find({});
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(employer2);
  } catch (err) {
    next(err);
  }
});
