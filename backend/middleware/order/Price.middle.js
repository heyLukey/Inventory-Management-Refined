const validPrice = async (req, res, next) => {
  try {
    const { price } = req.body;

    // Check price exists
    if (!price) return res.status(400).json({ error: "Price missing!" });

    const priceString = price.toString();

    // Check price has max 2d.p and falls within bounds
    if (price <= 0 || price > 16777216) {
      return res.status(400).json({ error: "Invalid price!" });
    }

    if (priceString.indexOf(".") !== -1) {
      decimalCheck = priceString.split(".");
      if (decimalCheck[1].length > 2) {
        return res.status(400).json({ error: "Invalid price!" });
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validPrice;
