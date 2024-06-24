const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    roles: [{type: Schema.Types.ObjectId, ref: 'role'}]
});

module.exports = mongoose.model("user", userSchema);