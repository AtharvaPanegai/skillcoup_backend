const express = require("express");
const { assignProjectToFreelancer, getPostedJobs, getAssignedProjects, getCompletedProjects } = require("../controller/employerController");
const { submitProposalToJob, getAllSubmittedProposals, getAcceptedProposals, FreelancergetCompletedProjects } = require("../controller/freelancerController");
const { postJob, getAllJobs, getJobBidsById, getSingleJobById } = require("../controller/jobController");
const { isLoggedIn } = require("../middleware/userMiddlewares");
const router = express.Router();


// get job bids
router.route("/job/proposals").post(isLoggedIn,getJobBidsById)

// client routes 
router.route("/client/postjob").post(isLoggedIn,postJob); // to post a job
router.route("/client/assignJob").post(isLoggedIn,assignProjectToFreelancer) // assign a job to freelancer
router.route('/client/jobsPosted').get(isLoggedIn,getPostedJobs);
router.route("/client/assignedJobs").get(isLoggedIn,getAssignedProjects)
router.route("/client/completedProjects").get(isLoggedIn,getCompletedProjects);


router.route("/freelancer/getAllJobs").get(isLoggedIn,getAllJobs)// get all jobs for home page 
router.route("/freelancer/getJobDetailById").post(isLoggedIn,getSingleJobById);
router.route("/freelancer/getAllProposals").get(isLoggedIn,getAllSubmittedProposals);
router.route("/freelancer/getAcceptedProposals").get(isLoggedIn,getAcceptedProposals);
router.route("/freelancer/getCompletedJobs").get(isLoggedIn,FreelancergetCompletedProjects)

// freelancer submit proposal
router.route("/freelancer/submitproposal").post(isLoggedIn,submitProposalToJob);

module.exports = router;