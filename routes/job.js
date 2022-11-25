const express = require("express");
const { postJob } = require("../controller/employerController");
const { isLoggedIn } = require("../middleware/userMiddlewares");
const router = express.Router();


// client routes to post a job
router.route("/client/postjob").post(isLoggedIn,postJob);



module.exports = router;