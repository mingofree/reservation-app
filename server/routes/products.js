const express = require("express");
const router = express.Router();
const Product = require('../model/product')

router.get("", function (req, res) {
  Product.find({}, function (err, foundProducts) {
    return res.json(foundProducts);
  });
});

module.exports = router;
