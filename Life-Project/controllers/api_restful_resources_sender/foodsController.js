const db = require("../../models");
const foods = db.food;

exports.sendFoodsObj = async function(req, res){
    const allF = await foods.find().exec();
    res.json(allF);
}