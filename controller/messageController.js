const BigPromise = require("../middleware/BigPromise")
const CustomError = require("../utils/customError");
const Message = require("../models/MessageModel");

exports.createMessage = BigPromise(async (req, res, next) => {
    const { conversationId, text } = req.body;
    const message = await Message.create({ senderId: req.user._id, conversationId: conversationId, text: text });

    res.status(200).json({
        success: true,
        message,
    })
});


exports.getMessagesofAConv = BigPromise(async (req, res, next) => {
    const { conversationId } = req.body;

    const messages = Message.find({ conversationId: conversationId });

    res.status(200).json({
        success: true,
        messages
    })
})