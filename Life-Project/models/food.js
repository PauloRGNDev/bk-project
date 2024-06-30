const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: String,
    englishName: String,
    type: {type: Schema.Types.ObjectId, refer: 'type_food'},
    urlImage: String, 
    formatImage: String,
    inPromotion: {type: Boolean, default: false, required},
});

foodSchema.virtual("typeUrl").get(function (){
    const typeName = this.type.toLowerCase();
    return `/food/type/${typeName}`;
});

foodSchema.virtual("url").get(function (){
    return `/food/${this._id}`;
});

module.exports = mongoose.model("food", foodSchema);