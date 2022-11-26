const mongoose = require("mongoose");
const {Schema} = mongoose;

const jobBidSchema = new Schema({
    freelancer : {
        Type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    proposalDescription : {
        type:String,
        required:true,
    },
    proposalQutation : {
        type:Number,
        required:true,
    }    
});

module.exports = mongoose.model("JobBid",jobBidSchema);