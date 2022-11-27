const express = require("express");
const router = express.Router();
const { signup, signin, logout, getLoggedInUserDetails, adminAllUsers, admingetSingleUser, adminGetUsersByRole, adminUpdateOneUserDetail, adminDeleteSingleUserById } = require("../controller/userController");
const { isLoggedIn } = require("../middleware/userMiddlewares");

router.route("/signup").post(signup);
router.route("/signin").post(signin)
router.route("/signout").get(logout);
router.route("/whoami").get(isLoggedIn,getLoggedInUserDetails)




// admin routes
router.route("/admin/getAllUsers").get(adminAllUsers)
router.route("/admin/getSingleUser").post(admingetSingleUser);
router.route("/admin/getAllUserType").post(adminGetUsersByRole);
router.route("/admin/updateuser").post(adminUpdateOneUserDetail);
router.route("/admin/deleteuser").get(adminDeleteSingleUserById);

module.exports = router;