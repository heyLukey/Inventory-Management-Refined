const validNotes = async (req, res, next) => {
  try {
    const { notes } = req.body;

    // Check notes length
    if (notes && notes.length > 280)
      return res.status(400).json({ error: "Max note length is 280!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validNotes;
