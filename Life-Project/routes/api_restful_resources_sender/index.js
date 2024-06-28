const express = require("express");
const foodsRouter = require("./foods");
const router = express.Router();

//signup route(start)
router.get("/foods", foodsRouter);
module.exports = router;