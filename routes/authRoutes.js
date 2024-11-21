const express = require("express"); // Import Express
const { registerUser, loginUser, logoutUser, getUserInfo } = require("../controllers/authController"); // Import controller functions
const verifyToken = require("../middleware/authMiddleware"); // Import middleware for token verification

const router = express.Router(); // Create a router instance

// Define routes and map to corresponding controller functions
router.post("/register", registerUser);       // Register user /api/auth/register
router.post("/login", loginUser);             // POST /api/auth/login
router.post("/logout", verifyToken, logoutUser); // POST /api/auth/logout (protected route)
router.get("/me", verifyToken, getUserInfo);  // GET /api/auth/me (protected route)

// Export the router
module.exports = router;
