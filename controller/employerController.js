const JobPost = require("../models/jobPostModel");
const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");
const cloudinary = require("cloudinary");


exports.postJob = BigPromise(async (req, res, next) => {
    const Client = req.params.id;

    const { jobTitle, jobType, jobCategory, jobBudget, jobTags, jobDescription, jobFileUrl } = req.body;

    if (!jobTitle || !jobType || !jobCategory || !jobBudget || !jobTags || !jobDescription || !jobFileUrl) {
        return next(new CustomError("Fields are missing", 401));
    }
    const jobPosted = await JobPost.create({
        jobTitle,
        jobType,
        jobCategory,
        jobBudget,
        jobTags,
        jobDescription,
        jobFileUrl,
        Client
    })

    res.status(200).json({
        success:true,
        job : jobPosted
    })

});

