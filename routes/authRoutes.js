const express = require("express");
const { registerUser, loginUser, logoutUser, getUserInfo } = require("../controllers/authcontroller");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser); // POST /api/auth/register
router.post("/login", loginUser);       // POST /api/auth/login
router.post("/logout", verifyToken, logoutUser); // POST /api/auth/logout
router.get("/me", verifyToken, getUserInfo);     // GET /api/auth/me

module.exports = router;
