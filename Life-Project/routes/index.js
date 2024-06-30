const express = require('express');
const router = express.Router();
const db = require("../models");
const SocialMedia = db.socialMedia;
const Politic = db.politic;
const Food = db.food;
const TypeFood = db.typeFood;
const debug = require("debug")("controllers");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const foodsD = await Food.find().exec();
  const politics = await Politic.find().exec();
  const socialMedias = await SocialMedia.find().exec();
  const foodTypes = await TypeFood.find().exec();
  const foods = [];
  foodsD.forEach(async food => {
     if(food.inPromotion) foods.push(food);
  });
  
  res.render('index', {foods: foods, types:foodTypes, politics:politics, socialMedias:socialMedias, shareText:"Fale conosco", pageType: 'initial-page'});
});

module.exports = router;
