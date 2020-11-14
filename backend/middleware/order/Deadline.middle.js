const validDeadline = async (req, res, next) => {
  try {
    const { deadline } = req.body;

    // Create to compare to deadline
    // YYYY-MM-DD
    const rightNow = new Date().toISOString().slice(0, 10);

    // Check deadline exists
    if (!deadline) return res.status(400).json({ error: "Deadline missing!" });

    // Check if deadline is valid date
    if (isNaN(Date.parse(deadline)))
      return res.status(400).json({ error: "Invalid deadline!" });

    // Check if deadline is before current date
    if (deadline < rightNow)
      return res
        .status(400)
        .json({ error: "Deadline is before current date!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validDeadline;
