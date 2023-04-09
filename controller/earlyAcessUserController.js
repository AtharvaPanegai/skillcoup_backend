const BigPromise = require("../middleware/BigPromise");
const EarlyAccessModel = require("../models/EarlyAccessModel");
const CustomError = require("../utils/customError");


exports.getEarlyAccessData = BigPromise(async (req, res, next) => {
    const { fullName, emailId, phoneNumber, userType,userRole } = req.body;
    if (!fullName || !emailId || !phoneNumber || !userType) {
        return res.json({
            success: false,
            message: "Fields are missing"
        })
    }

    const earlyAccessUser = await EarlyAccessModel.create({
        emailId: emailId,
        phoneNumber: phoneNumber,
        fullName: fullName,
        userType: userType,
        userRole : userRole
    })

    res.json({
        success: true,
        earlyAccessUser
    })

})