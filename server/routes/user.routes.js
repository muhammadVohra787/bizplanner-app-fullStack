const express = require("express");
const router = express.Router();

const {createUser,signInUser} = require("../controllers/user.controller");

router.post("/createuser", createUser);
router.post("/login",signInUser)
module.exports = router;
