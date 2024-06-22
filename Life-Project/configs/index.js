const db = require("./db");
const cookieSession = require("./cookieSession");

const config = {
    SECRET: "jwt_Paulo",
    DB: db,
    COOKIE_SESSION: cookieSession,
}

module.exports = config;