const validCustomer = async (req, res, next) => {
  try {
    const { customer } = req.body;

    // Check customer exists
    if (!customer) return res.status(400).json({ error: "Customer missing!" });

    // Check customer length
    if (customer.length > 24)
      return res.status(400).json({ error: "Max customer length is 24!" });

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validCustomer;
