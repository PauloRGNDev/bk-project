const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
    type: String,
    name: String,
});

foodSchema.virtual("typeUrl").get(function (){
    return `/food/type/${this.type}`;
});

foodSchema.virtual("url").get(function (){
    return `/food/${this._id}`;
});

module.exports = mongoose.model("Food", foodSchema);