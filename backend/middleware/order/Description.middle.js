const validDescription = async (req, res, next) => {
  try {
    const { description } = req.body;

    // Check description exists
    if (!description)
      return res.status(400).json({ error: "Description missing!" });

    // Check title length
    if (description.length > 280)
      return res.status(400).json({ error: "Max description length is 280!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validDescription;
