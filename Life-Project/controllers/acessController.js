const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const config = require("../configs");
const db = require("../models"); // Corrigido o erro de digitação aqui
const User = db.user;
const Role = db.role;
const debug = require("debug")("acess_controller");

exports.verifyJWT = asyncHandler(async function(req, res, next) {
   if (!req.session.token) {
      debug('Token decodificado não contém _id');
    return res.redirect('/signin'); // Redireciona se não houver token
  }
   const token = req.session.token;
   jwt.verify(token, config.SECRET, (err, decoded) => { // Adicionado parâmetro err
    if(err){
      res.status(401).send("Unauthorized: Invalid token"); return;
    } else {
      req.userId = decoded.id;
       debug('id Token decodificado: %j', decoded.id);
      next();
    }
   });
});

exports.isModerator = asyncHandler(async function(req, res, next) {
    const id = req.userId;
    const user = await User.findById(id).exec();
    const userRoles = await Role.find({_id: {$in: user.roles}});
   for(let i = 0; i < userRoles.length; i++){
      if(userRoles[i].name == "moderator"){
         next(); return;
      }
   } res.status(403).send("Require admin perm");
}); 

exports.isAdmin = asyncHandler(async function(req, res, next) {
    const id = req.userId;
    const user = await User.findById(id).exec();
    const userRoles = await Role.find({_id: {$in: user.roles},});
   debug("roles num: %d", userRoles.length);
   for(let i = 0; i < userRoles.length; i++){
      debug("Role name: %s", userRoles[i].name);
      if(userRoles[i].name == "admin"){
         next(); return;
      }
   } res.status(403).send("Require admin perm");
}); 
