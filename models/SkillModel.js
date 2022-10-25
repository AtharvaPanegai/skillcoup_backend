const mongoose = require("mongoose");
const {Schema} = mongoose;

const skillSchema = new Schema({
    skillName:String,
});

module.exports = mongoose.model("Skill",skillSchema);