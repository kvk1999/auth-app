const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes"); // Importing authentication routes

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// **MongoDB Connection**
mongoose
  .connect(process.env.MONGO_URL) // Connect to MongoDB
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// **Routes**
app.use("/api/auth", authRoutes); // Authentication routes

// **Start Server**
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
