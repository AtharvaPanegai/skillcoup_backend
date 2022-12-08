const User = require("../models/user");
const JobPost = require("../models/jobPostModel");
const JobBid = require("../models/jobBidModel");
const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");

exports.submitProposalToJob = BigPromise(async (req,res,next)=>{
    const {proposalDescription,proposalQutation,jobTimeRequired,jobId} = req.body;

    const jobBid = await JobBid.create({
        proposalDescription,
        proposalQutation,
        jobId,
        jobTimeRequired,
        freelancer : req.user._id
    })

    const updatedJobPost = await JobPost.findByIdAndUpdate(jobId,{$push : {jobProposals:jobBid._id}},
    {safe: true, upsert: true, new : true},
    )

    res.status(200).json({
        success:true,
        jobBid,
        updatedJobPost
    })

})

exports.getAllSubmittedProposals = BigPromise(async(req,res,next)=>{
    const proposals = await JobBid.find({freelancer:req.user._id});

    if(!proposals){
        return CustomError("No Proposals Found",404);
    }

    res.status(200).json({
        success:true,
        proposals
    })
})

exports.getAcceptedProposals = BigPromise(async(req,res,next)=>{
    const job = await JobPost.find({freelancer:req.user._id});
    let proposals = new Array();
    for(i=0;i< job.length;i++){
        proposals[i] = JobBid.find({freelancer:req.user._id,jobId:job[i]._id})
    }

    if(!proposals){
        return CustomError("No Proposals accepted",500);
    }

    res.status(200).json({
        success:true,
        proposals
    })
})

exports.FreelancergetCompletedProjects = BigPromise(async(req,res,next)=>{
    const jobs = await JobPost.find({freelancer:req.user._id,jobStatus:"completed"});

    if(!jobs){
        return CustomError("No Jobs Completed",404);

    };

    res.status(200).json({
        success:true,
        jobs
    })
})
