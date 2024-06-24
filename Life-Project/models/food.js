const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    type: String,
    englishType: String,
    name: String,
    englishName: String, 
    inPromotion: {type: Boolean, default: false},
});

foodSchema.virtual("typeUrl").get(function (){
    const typeName = this.type.toLowerCase();
    return `/food/type/${typeName}`;
});

foodSchema.virtual("url").get(function (){
    return `/food/${this._id}`;
});

module.exports = mongoose.model("food", foodSchema);