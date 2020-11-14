// Mongoose Schemas
const User = require("../../models/User.model");

const validEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check email
    if (!email) return res.status(400).json({ error: "Email missing!" });

    // Check if email already exists in database
    if (await User.findOne({ email: email }))
      return res.status(400).json({ error: "Email already exists!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validEmail;
