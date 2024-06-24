const express = require('express');
const router = express.Router();
const db = require("../models");
const Food = db.food;
const debug = require("debug")("menu");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const foodsD = await Food.find().exec();
  const categorizedFoods = [];
  const typesOfFoods = new Set();
    foodsD.forEach(food => {
    const {englishType, name} = food;
    typesOfFoods.add(englishType);
    if(!categorizedFoods[englishType]){
        categorizedFoods[englishType] = [];
    }

    categorizedFoods[englishType].push(name);
});

  res.render('menu', {typesFoods: typesOfFoods, foods:categorizedFoods, pageType: 'menu-page'});
});

module.exports = router;
