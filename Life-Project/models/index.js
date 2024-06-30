const user = require("./user.js");
const role = require("./role.js");
const food = require("./food.js");
const politic = require("./politic.js");
const socialMedia = require("./socialMedia.js");
const typeFood = require('./typeFood.js');

const db = {};
db.user = user;
db.role = role;
db.food = food;
db.typeFood = typeFood;
db.politic = politic;
db.socialMedia = socialMedia;
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;
