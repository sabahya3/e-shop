var jwt = require("express-jwt");

function authJwt() {
  return jwt.expressjwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
  });
}
module.exports = authJwt;
