const express = require("express");
const { getEarlyAccessData } = require("../controller/earlyAcessUserController");
const router = express.Router();
const { signup, signin, logout, getLoggedInUserDetails, adminAllUsers, admingetSingleUser, adminGetUsersByRole, adminUpdateOneUserDetail, adminDeleteSingleUserById, getUserById } = require("../controller/userController");
const { isLoggedIn } = require("../middleware/userMiddlewares");

router.route("/signup").post(signup);
router.route("/signin").post(signin)
router.route("/signout").get(logout);
router.route("/whoami").get(isLoggedIn,getLoggedInUserDetails)
router.route("/getUserDetails").post(isLoggedIn,getUserById);




// admin routes
router.route("/admin/getAllUsers").get(adminAllUsers)
router.route("/admin/getSingleUser").post(admingetSingleUser);
router.route("/admin/getAllUserType").post(adminGetUsersByRole);
router.route("/admin/updateuser").post(adminUpdateOneUserDetail);
router.route("/admin/deleteuser").get(adminDeleteSingleUserById);


// early access user
router.route("/earlyaccess/signup").post(getEarlyAccessData);

module.exports = router;