require('dotenv').config();
const jwt = require("jsonwebtoken");
module.exports = function (user) {
  console.log()
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET_KEY, {
    expiresIn: "30s",
  });
};
