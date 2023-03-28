const jwt = require("jsonwebtoken");
require("dotenv").config();

function middleware(req, res, next) {
  try {
    const token = req.headers["x-token"];
    if (!token) {
      return res.status(400).send("Token not found");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_PASSWORD);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    console.error(`Error authenticating token: ${error.message}`);
    return res.status(400).send("Unable to authenticate token");
  }
}

module.exports = middleware;
