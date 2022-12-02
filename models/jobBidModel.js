const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobBidSchema = new Schema({
    freelancer: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    proposalDescription: {
        type: String,
        required: true,
    },
    proposalQutation: {
        type: Number,
        required: true,
    },
    jobId: {
        type: Schema.Types.ObjectId,
        ref: "JobPost",
        required: true
    },
    jobTimeRequired: {
        days: Number,
        months: Number
    }
});

module.exports = mongoose.model("JobBid", jobBidSchema);