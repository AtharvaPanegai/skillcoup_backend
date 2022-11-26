const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");
const JobPost = require("../models/jobPostModel");


exports.postJob = BigPromise(async (req, res, next) => {
 
    const { jobTitle, jobCategory, jobBudget, jobTags, jobDescription, jobFileUrl } = req.body;

    if (!jobTitle || !jobCategory || !jobBudget || !jobTags || !jobDescription || !jobFileUrl) {
        return next(new CustomError("Fields are missing", 401));
    }
    const jobPosted = await JobPost.create({
        jobTitle,
        jobStatus:"posted",
        jobCategory,
        jobBudget,
        jobTags,
        jobDescription,
        jobFileUrl,
        Client:req.user._id
    })

    res.status(200).json({
        success:true,
        job : jobPosted
    })
});

// get all jobs for home page
exports.getAllJobs = BigPromise(async (req, res, next) => {
    const jobs = await JobPost.find({});

    res.status(200).json({
        success:true,
        jobs
    })
})