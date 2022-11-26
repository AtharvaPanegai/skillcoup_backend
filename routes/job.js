const express = require("express");
const { postJob, getAllJobs } = require("../controller/jobController");
const { isLoggedIn } = require("../middleware/userMiddlewares");
const router = express.Router();


// client routes to post a job
router.route("/client/postjob").post(isLoggedIn,postJob);


// get all jobs for home page 
router.route("/freelancer/getAllJobs").get(isLoggedIn,getAllJobs)



module.exports = router;