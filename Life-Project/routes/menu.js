const express = require('express');
const router = express.Router();
const db = require("../models");
const Food = db.food;

/* GET home page. */
router.get('/', async function(req, res, next) {
  const foodsD = await Food.find().exec();
  const categorizedFoods = [];
  const typesOfFoods = [];
  foodsD.forEach(async food => {
    const type = await food.populate('type_food').exec();
    const englishType = type.englishName;
    if (!typesOfFoods.includes(englishType)) {
      typesOfFoods.push(englishType);
    }
    if(!categorizedFoods[englishType]){
        categorizedFoods[englishType] = [];
    }

    categorizedFoods[englishType].push(food.name);
  });
  res.render('menu', {typesOfFoods: typesOfFoods, categorizedFoods:categorizedFoods, pageType: 'menu-page'});
});

module.exports = router;
