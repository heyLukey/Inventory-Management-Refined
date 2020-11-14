const validPassword = async (req, res, next) => {
  try {
    const { password, passwordCheck } = req.body;

    // Check if passwords exist
    if (!password || !passwordCheck)
      return res.status(400).json({ error: "Fields missing!" });

    // Check password length
    if (password.length < 7)
      return res
        .status(400)
        .json({ error: "Password must be 7 characters or more!" });

    // Check if passwords match
    if (password !== passwordCheck)
      return res.status(400).json({ error: "Passwords do not match!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validPassword;
