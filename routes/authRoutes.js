const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserInfo,
} = require("../controllers/authcontroller"); // Ensure this path is correct
const verifyToken = require("../middleware/authMiddleware"); // Ensure this middleware is implemented

const router = express.Router();

// Route for user registration
router.post("/register", registerUser); // POST /api/auth/register

// Route for user login
router.post("/login", loginUser); // POST /api/auth/login

// Route for user logout (protected)
router.post("/logout", verifyToken, logoutUser); // POST /api/auth/logout

// Route for getting user information (protected)
router.get("/me", verifyToken, getUserInfo); // GET /api/auth/me

module.exports = router;
