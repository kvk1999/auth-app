const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
} = require("../controllers/authcontroller");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser);
router.get("/me", verifyToken, getUserInfo);

module.exports = router;
