const db = require("./db");
const cookieSession = require("./cookieSession");

const config = {
    secret: "jwt_Paulo",
    db: db,
    cookieSession: cookieSession,
}

module.exports = config;