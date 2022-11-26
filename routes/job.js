const express = require("express");
const { submitProposalToJob } = require("../controller/freelancerController");
const { postJob, getAllJobs, getJobBidsById } = require("../controller/jobController");
const { isLoggedIn } = require("../middleware/userMiddlewares");
const router = express.Router();


// get job bids
router.route("/job/proposals").post(isLoggedIn,getJobBidsById)

// client routes to post a job
router.route("/client/postjob").post(isLoggedIn,postJob);


// get all jobs for home page 
router.route("/freelancer/getAllJobs").get(isLoggedIn,getAllJobs)


// freelancer submit proposal
router.route("/freelancer/submitproposal").post(isLoggedIn,submitProposalToJob);

module.exports = router;