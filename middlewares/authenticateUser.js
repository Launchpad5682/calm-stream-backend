const jwt = require("jsonwebtoken");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const secret = process.env.JWT_SECRET;

const authenticateUser = async (req, res, next) => {
  const token = req.headers.authorization;
  
  try {
    const decoded = jwt.verify(token, secret);
    req.userID = decoded._id;
    return next();
  } catch (err) {
    console.log({ err });
    return res.status(401).json({
      message: "Authentication error, login again",
    });
  }
};

module.exports = { authenticateUser };
