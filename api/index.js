const app = require("../app");
const connectToDatabase = require("../db");

module.exports = async (req, res) => {
  try {
    await connectToDatabase();
    app(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
