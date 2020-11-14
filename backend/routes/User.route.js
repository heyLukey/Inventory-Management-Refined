// Npm Libraries
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Middleware
const auth = require("../middleware/Auth.middle");

// Middleware [validation]
const validEmail = require("../middleware/user/Email.middle");
const validUsername = require("../middleware/user/Username.middle");
const validPassword = require("../middleware/user/Password.middle");

// Mongoose Schemas
const User = require("../models/User.model");

// POST details and register user
router.post(
  "/register",
  validEmail,
  validUsername,
  validPassword,
  async (req, res) => {
    try {
      // Store body variables
      const { email, username, password } = req.body;

      // Hash password
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(password, salt);

      // Create user to post
      const postUser = new User({
        email: email,
        username: username,
        password: hash,
      });

      // Save user to database
      const saveUser = await postUser.save();
      res.send(saveUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// POST details and login if valid
router.post("/login", async (req, res) => {
  try {
    // Store body variables
    const { email, password } = req.body;

    // Check for existing user
    const matchingUser = await User.findOne({ email: email });
    if (!matchingUser)
      return res.status(400).json({ error: "Invalid credentials!" });

    // Compare stored hash to given password
    const isMatch = await bcrypt.compare(password, matchingUser.password);
    if (!isMatch)
      return res.status(400).json({ error: "Invalid credentials!" });

    // Create web token
    const token = jwt.sign({ id: matchingUser._id }, process.env.ENCRYPT_TOKEN);

    // Create response
    const responseObject = {
      token: token,
      user: {
        id: matchingUser._id,
        username: matchingUser.username,
      },
    };

    // Send Response
    res.json(responseObject);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET user data if token is valid [protected]
router.get("/data", auth, async (req, res) => {
  try {
    // Check if valid ObjectID
    if (!req.user.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ error: "Invalid user ID!" });

    // Check returned user
    const findUserByID = await User.findOne({ _id: req.user });
    if (findUserByID === null) {
      res.json({ error: "No such user exists!" });
    } else {
      const user = await User.findById(req.user);
      res.json({ username: user.username, id: user._id });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST token to check if valid
router.post("/tokenIsValid", async (req, res) => {
  try {
    // Check if token exists
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    // Check if token passes encryption
    const verifiedToken = jwt.verify(token, process.env.ENCRYPT_TOKEN);
    if (!verifiedToken) return res.json(false);

    // Check if token user exists
    const user = await User.findById(verifiedToken.id);
    if (!user) return res.json(false);

    // Else verified
    return res.json(true);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export route
module.exports = router;
