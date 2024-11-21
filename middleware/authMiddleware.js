const jwt = require("jsonwebtoken");
const { isTokenBlacklisted } = require("../utils/TokenBlacklist");


const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  if (isTokenBlacklisted(token)) {
    return res.status(401).json({ message: "Token has been logged out" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token", error: err.message });
  }
};

module.exports = verifyToken;
