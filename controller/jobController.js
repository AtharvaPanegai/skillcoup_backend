const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");
const JobPost = require("../models/jobPostModel");
const JobBid = require("../models/jobBidModel");

exports.postJob = BigPromise(async (req, res, next) => {
 
    const { jobTitle, jobCategory, jobBudget, jobTags, jobDescription, jobFileUrl } = req.body;

    if (!jobTitle || !jobCategory || !jobBudget || !jobTags || !jobDescription) {
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
    const jobs = await JobPost.find({freelancer:{$exists:false}});

    res.status(200).json({
        success:true,
        jobs
    })
})
// single job for detail page
exports.getSingleJobById = BigPromise(async(req,res,next)=>{
    const {jobId} = req.body;
    const job = await JobPost.findById(jobId);

    if(!job){
        return CustomError("Job Not Found",404);
    }

    res.status(200).json({
        success:true,
        job
    })
})

// get job Bids by id
exports.getJobBidsById = BigPromise(async(req,res,next)=>{
    const {jobIdInput} = req.body;
    const jobs = await JobBid.find({jobId : jobIdInput});

    if(!jobs){
        res.status(200).json({
            message : "No Job exist with the id"
        })
    }

    res.status(200).json({
        success:true,
        jobs
    })
})