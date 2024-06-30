const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const typesFoodSchema = new Schema({
    name: {type: String, unique:true},
    englishName: {type:String, unique:true}, 
    urlImage: String,
    formatImage: String,
});

module.exports = mongoose.model("type_food", typesFoodSchema);