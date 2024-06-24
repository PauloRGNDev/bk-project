const express = require('express');
const router = express.Router();
const db = require("../models");
const SocialMedia = db.socialMedia;
const Politic = db.politic;
const Food = db.food;
const debug = require("debug")("controllers");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const foodsD = await Food.find().exec();
  const politics = await Politic.find().exec();
  const socialMedias = await SocialMedia.find().exec();
  const foods = [];
  const types = [];
  foodsD.forEach(food => {
     if(food.inPromotion == true){
       foods.push(food);
       if(!types.includes({url: food.typeUrl, name: food.type, englishName: food.englishType})){
         types.push({url: food.typeUrl, name: food.type, englishName: food.englishType});
       }
     }
  });
  
  res.render('index', {foods: foods, types:types, politics:politics, socialMedias:socialMedias, shareText:"Fale conosco", pageType: 'initial-page'});
});

module.exports = router;
