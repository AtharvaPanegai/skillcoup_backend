const User = require("../models/user");
const JobPost = require("../models/jobPostModel");
const JobBid = require("../models/jobBidModel");
const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");

exports.submitProposalToJob = BigPromise(async (req,res,next)=>{
    const {proposalDescription,proposalQutation,jobId} = req.body;

    const jobBid = await JobBid.create({
        proposalDescription,
        proposalQutation,
        jobId,
        freelancer : req.user._id
    })

    const updatedJobPost = await JobPost.findByIdAndUpdate(jobId,{$push : {jobProposals:jobId}},
    {safe: true, upsert: true, new : true},
    )

    res.status(200).json({
        success:true,
        jobBid,
        updatedJobPost
    })

})