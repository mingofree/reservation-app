const express = require("express");
const router = express.Router();
const User = require("../model/user");
// const jwt = require('jsonwebtoken')
// const config = require('../config')

router.post("/login", function (req, res) {
  const { email, password } = req.body;
  return res.json({ email, password });
});

router.post("/register", function (req, res) {
  const { username, email, password, confirmPassword } = req.body;
  return res.json({ username, email, password, confirmPassword });
});

module.exports = router;
