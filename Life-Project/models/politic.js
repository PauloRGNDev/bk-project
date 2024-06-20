const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const politicSchema = new Schema({
    name: String,
    description: String,
});

politicSchema.virtual("url").get(function (){
    return `/politic/${this._id}`;
});

module.exports = mongoose.model("Politic", politicSchema);