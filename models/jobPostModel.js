const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobPostSchema = new Schema({
    jobTitle:{
        type:String,
        required:true,
    },
    jobType:{
        type:String,
        required:true,
    }, 
    jobCategory:{
        type:String,
        required:true,
    },
    jobMinCost:{
        type:Number,
    },
    jobMaxCost:{
        type:Number,

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
        ref:"User"
    }
});

module.exports = mongoose.model("JobPost",jobPostSchema);