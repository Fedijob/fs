const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
// Get
/*******router.get("/", (req, res) => {
  try {
    res.send("hello world!!!");
  } catch (error) {
    console.log(error);
  }
});*/
//Register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    // Chek if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ message: "email already exist" });
    }
    // Hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    //save user
    //generate a token
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res
      .status(200)
      .send({ newUser, msg: "user is saved", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send("can not save this user");
  }
});
// Login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    // find if the user exist
    const searchedUser = await User.findOne({ email });
    //if the email is not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    //if the password are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    //creer un token
    const payload = {
      _id: searchedUser._id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    console.log(token);
    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ message: "can not get the user" });
  }
});
//get
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});

module.exports = router;
