const mongoose = require("mongoose");
const { Schema } = mongoose;

const conversionSchema = new Schema({
    senderId : {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    receiverId:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    createdAt : {
        type:Date,
        default:Date.now,
    }
});


module.exports = mongoose.model("Conversation",conversionSchema);