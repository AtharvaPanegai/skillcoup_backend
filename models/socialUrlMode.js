const mongoose = require("mongoose");
const {Schema} = mongoose;

const socialUrlSchema = new Schema({
    socialUrl:String,
    socialUrlType:String,
})

moudle.exports = mongoose.model("SocialUrl",socialUrlSchema);