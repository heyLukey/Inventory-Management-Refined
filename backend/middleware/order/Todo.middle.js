const validTodo = async (req, res, next) => {
  try {
    const { todo } = req.body;

    // Check todo exists
    if (!todo) return res.status(400).json({ error: "Todo missing!" });

    // Check all todo elements exist
    if (
      !todo.polishing ||
      !todo.sizing ||
      !todo.lazer ||
      !todo.engraving ||
      !todo.plating ||
      !todo.rhodium ||
      !todo.cleaning
    )
      res.status(400).json({ error: "Todo element missing!" });

    // Check all element values are bools
    const todoArr = Object.entries(todo);
    for (const task of todoArr) {
      if (!(task[1] === "true" || task[1] === "false")) {
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
