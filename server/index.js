const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const SampleDb = require("./sample-db");

const productRoutes = require("./routes/products");
const path = require("path");

try {
  mongoose.connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  // console.log("Success: Connected to MongoDB");
  if (process.env.NODE_ENV !== "production") {
    const sampleDb = new SampleDb();
    // sampleDb.initDb();  // 必要な時だけ初期化
  }
} catch (err) {
  console.log(`Error: ${err.message}`);
  throw new Error(err.message);
}

const app = express();

app.use("/api/v1/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "..", "dist", "sample-app");
  // console.log(appPath);
  app.use(express.static(appPath));
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am running!:" + PORT);
});
