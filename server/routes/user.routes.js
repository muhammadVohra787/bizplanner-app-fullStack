const express = require("express");
const router = express.Router();

const {createUser,signInUser, changePassword} = require("../controllers/user.controller");

router.post("/createuser", createUser);
router.post("/login",signInUser)
router.post("/updatepassword",changePassword)
module.exports = router;

