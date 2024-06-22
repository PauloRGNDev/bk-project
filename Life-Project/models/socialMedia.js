const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const smSchema = new Schema({
    name: String,
    iconFormat: String
});

smSchema.virtual("url").get(function(){
  return `/social-media/${this._id}`;
});

module.exports = mongoose.model("social_media", smSchema);