const validTitle = async (req, res, next) => {
  try {
    const { title } = req.body;

    // Check title exists
    if (!title) return res.status(400).json({ error: "Title missing!" });

    // Check title length
    if (title.length > 24)
      return res.status(400).json({ error: "Max title length is 24!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validTitle;
