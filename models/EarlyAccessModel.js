const mongoose = require("mongoose");
const { Schema } = mongoose;

const earlyAccessSchema = new Schema({
    emailId: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true,
    },
    userType: {
        type: String, // client freelancer
        required: true
    },
    userRole: {
        type: String,
    }
});

module.exports = mongoose.model("EarlyAccessUser", earlyAccessSchema);