const express = require('express');
const router = express.Router();
const acessController = require("../controllers/acessController");
const db = require("../models");
const User = db.user;
const debug = require("debug")("users");

/* GET users listing. */
router.get('/', [acessController.verifyJWT] ,async function(req, res, next) {
  const id = req.userId;
  const user = await User.findById(id).exec();
  debug('user: %s', id);
  debug('user data: %j', user);
  if(user)res.render("user_detail", {title: "Username page", username: user.username,});
  else res.status(500).send("Erro interno do servidor");
});

module.exports = router;