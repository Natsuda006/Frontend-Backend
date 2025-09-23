const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// serve static files จาก frontend/build
app.use(express.static(path.join(__dirname, "../frontend/build")));

// API routes
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/api/time", (req, res) => {
  const now = new Date();
  res.json({ currentTime: now.toLocaleString() });
});

// ✅ catch-all route สำหรับ React Router (Express 5 ใช้ app.use)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
