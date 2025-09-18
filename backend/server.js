const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
