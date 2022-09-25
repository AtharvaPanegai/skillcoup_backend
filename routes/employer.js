const express = require("express");
const router = express.Router();
const {
  createEmployer1,
  createEmployer2,
  fetchEmployer1,
  fetchEmployer2,
} = require("../controller/employerController");

router.get("/1", fetchEmployer1);
router.get("/2", fetchEmployer2);
router.post("/1", createEmployer1);
router.post("/2", createEmployer2);

module.exports = router;
