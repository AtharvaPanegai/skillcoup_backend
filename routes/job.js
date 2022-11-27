const express = require("express");
const { assignProjectToFreelancer } = require("../controller/employerController");
const { submitProposalToJob } = require("../controller/freelancerController");
const { postJob, getAllJobs, getJobBidsById, getSingleJobById } = require("../controller/jobController");
const { isLoggedIn } = require("../middleware/userMiddlewares");
const router = express.Router();


// get job bids
router.route("/job/proposals").post(isLoggedIn,getJobBidsById)

// client routes 
router.route("/client/postjob").post(isLoggedIn,postJob); // to post a job
router.route("/client/assignJob").post(isLoggedIn,assignProjectToFreelancer) // assign a job to freelancer



router.route("/freelancer/getAllJobs").get(isLoggedIn,getAllJobs)// get all jobs for home page 
router.route("/freelancer/getJobDetailById").post(isLoggedIn,getSingleJobById);


// freelancer submit proposal
router.route("/freelancer/submitproposal").post(isLoggedIn,submitProposalToJob);

module.exports = router;