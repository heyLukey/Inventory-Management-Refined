// Mongoose Schemas
const User = require("../../models/User.model");

const validUsername = async (req, res, next) => {
  try {
    const { username } = req.body;

    // Check username exists
    if (!username) return res.status(400).json({ error: "Username missing!" });

    // Check username length
    if (username.length < 3)
      return res
        .status(400)
        .json({ error: "Username must be 3 characters or more!" });

    // Check if username already exists in database
    if (await User.findOne({ username: username }))
      return res.status(400).json({ error: "Username already exists!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validUsername;
