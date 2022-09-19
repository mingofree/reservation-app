const express = require("express");
const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://mingo:AheAheUhiha123@cluster0.qyc0y.mongodb.net/appDatabase?retryWrites=true&w=majority",
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
