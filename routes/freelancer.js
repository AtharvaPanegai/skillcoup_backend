const express = require("express");
const router = express.Router();
const {
  createFreelancer1,
  createFreelancer2,
  fetchFreelancer1,
  fetchFreelancer2,
} = require("../controller/freelancerController");

router.get("/1", fetchFreelancer1);
router.get("/2", fetchFreelancer2);
router.post("/1", createFreelancer1);
router.post("/2", createFreelancer2);

module.exports = router;
