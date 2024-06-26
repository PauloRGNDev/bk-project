const express = require("express");
const foodsC = require("./foods");
const router = express.Router();

//signup route(start)
router.get("/foods", foodsC.sendFood);
module.exports = router;