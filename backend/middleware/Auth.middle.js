// Npm Libraries
const jwt = require("jsonwebtoken");

// Mongoose Schemas
const User = require("../models/User.model");

const auth = async (req, res, next) => {
  try {
    const token = req.header("x-auth-token");

    // Check if token exists
    if (!token || token === "null") {
      return res.status(401).json({ error: "No authentication token!" });
    }

    // Check if token passes encryption
    const verifiedToken = jwt.verify(token, process.env.ENCRYPT_TOKEN);
    if (!verifiedToken)
      return res.status(401).json({ msg: "No authentication token!" });

    // Check if token user exists
    const user = await User.findById(verifiedToken.id);
    if (!user)
      return res
        .status(401)
        .json({ error: "User for this token does not exist!" });

    // Else verified and return token user id
    req.user = verifiedToken.id;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = auth;
