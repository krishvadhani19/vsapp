const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwtSecret = "krishVadhani19";
var jwt = require("jsonwebtoken");

// create a new user: POST
router.post(
  "/createnewuser",
  [
    body("name", "Name must be atleast 3 characters").isLength({ min: 3 }),
    body("email", "Text should be Email").isEmail(),
    body("password", "Name must be atleast 3 characters").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // just to acknowledge whether working smooth or not
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(401).json({
          success,
          error: "User with these credentials already exists!",
        });
      }

      //   hashing the password
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(password, salt);

      //   creating a new user

      user = User.create({
        name,
        email,
        password: secPass,
      });

      //   while performing any other activity after logged in to check whether its the same user
      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Servor Error!");
    }
  }
);

// login: POST

router.post(
  "/login",
  [
    body("email", "Text should be Email").isEmail(),
    body("password", "Password must have atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    let success = false;

    //
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success, errors });
    }

    const { email, password } = req.body;

    try {
      // to check user with this email exists or not
      let user = await User.findOne({ email });
      if (!user) {
        res.status(401).json({
          success,
          error: "User with these credentials does not exist!",
        });
      }

      // if user exists then checking password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        res.status(400).json({ success, error: "Credentials does not match!" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };

      const authToken = jwt.sign(data, jwtSecret);
      success = true;
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      req.status(500).send("Internal Server Error!");
    }
  }
);

module.exports = router;
