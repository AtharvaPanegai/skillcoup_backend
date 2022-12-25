const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");
const Conversation = require("../models/ConversationModel");
const Message = require("../models/MessageModel");

exports.createConversation = BigPromise(async(req,res,next)=>{
    const {receiverId} = req.body;
    
    const conversation = await Conversation.create({senderId : req.user._id,receiverId:receiverId});

    res.status(200).json({
        success:true,
        conversation
    })
}) 

exports.getConv = BigPromise(async(req,res,next)=>{
    const conversations = await Conversation.find({$or:[{senderId:req.user._id},{receiverId:req.user._id}]});

    res.status(200).json({
        success:true,
        conversations,
    })
});

exports.getSpecificConv = BigPromise(async(req,res,next)=>{
    const {receiverId} = req.body;
    const conversation = await Conversation.find({senderId:req.user._id,receiverId:receiverId});
    res.status(200).json({
        success:true,
        conversation
    })
})