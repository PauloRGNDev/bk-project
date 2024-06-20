const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const smSchema = new Schema({
    name: String,
});

module.exports = mongoose.model("Politic", smSchema);