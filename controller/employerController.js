const JobPost = require("../models/jobPostModel");
const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");
const cloudinary = require("cloudinary");

exports.assignProjectToFreelancer = BigPromise(async (req, res, next) => {
    const { jobIdInput, freelancerId } = req.body;

    const newData = {
        freelancer: freelancerId
    }
    const assignedJob = await JobPost.findByIdAndUpdate(jobIdInput, newData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    })

    res.status(200).json({
        success:true,
        assignedJob
    })
})
