const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  User.find({ email: req.body.email }, (err, docs) => {
    if (docs.length > 0) {
      return res.status(400).json({ message: "Email Already Registered" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save((err) => {
        if (!err) {
          res.send("User Registration Success");
        } else {
          res.send("Something Went Wrong");
        }
      });
    }

    if (err) {
      return res.status(400).json({ message: "Something Went Wrong" });
    }
  });
});

router.post("/login", (req, res) => {
  User.find(
    { email: req.body.email, password: req.body.password },
    (err, docs) => {
      if (docs.length > 0) {
        const user = {
          name: docs[0].name,
          _id: docs[0]._id,
          email: docs[0].email,
        };
        res.send(user);
      } else {
        return res.status(400).json({ message: "Invalid Credentials" });
      }
    }
  );
});

module.exports = router;
