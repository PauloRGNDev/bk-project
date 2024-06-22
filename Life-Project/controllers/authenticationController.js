const db = require("../models");
const {body, validationResult} = require("express-validator");
const asyncHandler = require("express-async-handler");
const User = db.user;
const Role = db.role;
const authConfigs = require("../configs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const debug = require("debug")("authentication_controller");

exports.signup_GET = asyncHandler(async function(req, res, next){
    res.render("signup_form", {title: "Bem vindo, crie uma conta"});
});

exports.signup_POST = [
    body("username")
    .trim()
    .isLength({min:1})
    .withMessage("O nome não pode ser vazio")
    .custom(value => {
      return User.findOne({username: value})
       .then(user => {
          if(user){
            return Promise.reject("Nome de usuário já cadastrado, insira um nome único")
          }
       })
    }
    )
    .escape(),
    body("email")
    .trim()
    .isLength({min:1})
    .withMessage("O email não pode ser vazio")
    .custom(value =>{
      return User.findOne({email: value})
       .then(user => {
          if(user){
            return Promise.reject("email já cadastrado, insira um email único")
          }
       })
    }
    )
    .escape(),
    body("password")
    .trim()
    .isLength({min:1})
    .withMessage("A senha não pode ser vazia")
    .escape(),

    asyncHandler(async function(req, res, next){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.render("signup_form", {
                title: "Bem vindo, crie uma conta",
                errors: errors.array(),
            });
        }

        let user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
        });

        if(req.body.roles){
            let roles = await Role.find({ name: { $in: req.body.roles } });
            user.roles = roles.map(role => role._id);
        } else {
            let defaultRole = await Role.findOne({ name: "user" });
            user.roles = [defaultRole._id];
        }

        await user.save();
        res.redirect("signin");
    })
];


exports.signin_GET = asyncHandler(async function(req, res, next){
    res.render("signin_form", {title: "Estamos esperando por você"});
});

exports.signin_POST = [
    body("username")
    .trim()
    .isLength({min:1})
    .withMessage("O nome não pode ser vazio")
    .custom( async(value, {req}) => {
        const user = await User.findOne({username: value});
        if(!user){
            return Promise.reject("Usuário não cadastrado no banco de dados");
        } else{
            req.user = user;
        }
    }
    )
    .escape(),
    body("password")
    .trim()
    .isLength({min:1})
    .withMessage("A senha não pode ser vazio")
    .custom(async(value, {req}) =>{
        if(!req.user){
            return Promise.reject("Erro ao obter dados do usuário");
        }
        const passwordValidation = bcrypt.compareSync(value, req.user.password);
        if(!passwordValidation){
            return Promise.reject("A senha está incorreta");
        }   
    }
    )
    .escape(),
    asyncHandler(async function(req, res, next){
      const errors = validationResult(req);
       const user = await User.findOne({username: req.body.username}).populate("roles", "-__v").exec();
       if(!errors.isEmpty()){
          res.render("signin_form", {title: "Estamos esperando por você", errors: errors.array(),});
           return;
       } else{
         const token = jwt.sign({id: user._id}, authConfigs.SECRET, {
           algorithm: 'HS256',
           expiresIn: 60 * 60 * 24, //time in s
         });
         var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }

      req.session.token = token;
           debug("token: %s, id: %s", req.session.token,  req.session.token.id);
           jwt.verify(token, authConfigs.secret, (err, decoded) => {
  if (err) {
    // Handle error
    console.log(err);
  } else {
    // O objeto decoded contém o payload do seu token
    debug("Id token: %s", decoded.id); // Aqui está o seu id decodificado
  }
});
res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        tokenId: req.session.token.id,
      });
       } 
    })
];

exports.signout_GET = asyncHandler(async function(req, res, next){
    req.session.token = null;
    res.render("signup_form", {title: "Bem vindo, crie uma conta"});
});
