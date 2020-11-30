const validTodo = async (req, res, next) => {
  try {
    const { todo } = req.body;

    // Check todo exists
    if (!todo) return res.status(400).json({ error: "Todo missing!" });

    // At least one task should be present
    if (Object.keys(todo).length < 1)
      return res.status(400).json({ error: "Select at least one task!" });

    // Check all element values are bools
    const todoArr = Object.entries(todo);
    for (const task of todoArr) {
      if (!(task[1] === "true" || task[1] === "false" || task[1] === null)) {
        return res
          .status(400)
          .json({ error: "All Todo elements must be bools!" });
      }
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validTodo;
