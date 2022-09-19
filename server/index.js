const express = require("express");
const mongoose = require("mongoose");
const config = require('./config/dev')

try {
  mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("Success: Connected to MongoDB");
} catch (err) {
  console.log(`Erro: ${err.message}`);
  throw new Error(err.message);
}

const app = express();

app.get("/products", function (req, res) {
  res.json({ success: true });
});

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am running!:" + PORT);
});
