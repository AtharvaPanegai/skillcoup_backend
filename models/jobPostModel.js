const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobPostSchema = new Schema({
    jobTitle:{
        type:String,
        required:true,
    },
    jobStatus:{
        type:String,
        required:true,
    }, 
    // posted,assigned,started,inprogress,completed
    jobCategory:{
        type:String,
        required:true,
    },
    jobBudget:{
        type:Number,
        required:true,
    },
    jobTags:[
        {
            tagTitle:String,
        }
    ],
    jobDescription:{
        type:String,
        required:true,
    },
    jobFileUrl:{
        type:String,
    },
    Client:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    freelancer : {
        type:Schema.Types.ObjectId,
        ref:"User",
        required:false,
    },
    jobProposals:[
        {
            type:Schema.Types.ObjectId,
            ref:"JobBid",
        }
    ],
    proposalsSubmittedBy:[
        {
            type:Schema.Types.ObjectId,
            ref:"User"
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
      },
});

module.exports = mongoose.model("JobPost",jobPostSchema);