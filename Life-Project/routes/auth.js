const express = require("express");
const authController = require("../controllers/authenticationController");
const router = express.Router();

//signup route(start)
router.get("/", );
router.get("signup/", authController.signup_GET);
router.post("signup/", authController.signup_POST);
router.get("/signin", authController.signin_GET);
router.post("/signin", authController.signin_POST);
router.get("/signout", authController.signout_GET);
router.post("/signout", authController.signout_POST);
module.exports = router;