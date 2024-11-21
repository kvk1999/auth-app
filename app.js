const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL) // Ensure the .env file has the correct `MONGO_URL`
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Default Route for Root Path
app.get("/", (req, res) => {
  res.send("Welcome to the User Authentication API!");
});

// Routes
app.use("/api/auth", authRoutes);

// Port Configuration
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
