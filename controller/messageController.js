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
    const { conversationIdInput } = req.body;

    const messages = await Message.find({ conversationId: conversationIdInput });

    res.status(200).json({
        success: true,
        messages
    })
})