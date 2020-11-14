const validQuantity = async (req, res, next) => {
  try {
    const { quantity } = req.body;

    // Check quantity exists
    if (!quantity) return res.status(400).json({ error: "Quantity missing!" });

    // Check quantity is whole number and falls within bounds
    if (quantity < 1 || quantity > 264 || !(quantity % 1 === 0))
      return res.status(400).json({ error: "Invalid quantity!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validQuantity;
