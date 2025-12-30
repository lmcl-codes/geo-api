const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoutes);

app.get("/", (req, res) => res.send("API is running"));

module.exports = app;
