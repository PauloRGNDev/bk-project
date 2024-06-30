const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const typesFoodSchema = new Schema({
    name: {type: String, unique},
    englishName: {type:String, unique}, 
    urlImage: String,
    formatImage: String,
});

module.exports = mongoose.model("type_food", foodSchema);