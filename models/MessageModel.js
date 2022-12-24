const mongoose = require("mongoose");
const { Schema } = mongoose;

const MessageSchema = new Schema ({
    conversationId:{
        type:Schema.Types.ObjectId,
        ref:"Conversation",
    },
    senderId : {
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    text:{
        type:String,
        required:true,
    },
})


module.exports = mongoose.model("Message",MessageSchema);