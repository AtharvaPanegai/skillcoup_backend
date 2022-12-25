const express = require("express");
const { createConversation, getConv, getSpecificConv } = require("../controller/conversationController");
const { createMessage, getMessagesofAConv } = require("../controller/messageController");
const { isLoggedIn } = require("../middleware/userMiddlewares");
const router = express.Router();

// conversation Routes
router.route("/createConversation").post(isLoggedIn,createConversation);
router.route("/getAllConversations").get(isLoggedIn,getConv);
router.route("/getSpecificConv").post(isLoggedIn,getSpecificConv);



// message routes
router.route("/createMessage").post(isLoggedIn,createMessage);
router.route("/getMessageofConv").post(isLoggedIn,getMessagesofAConv);


module.exports = router;