const express = require("express");
const router = express.Router();

const {checkTokenValid} = require("../controllers/userToken.controller")

router.post("/verifyToken",checkTokenValid);

module.exports=router