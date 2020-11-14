const validFilter = async (req, res, next) => {
  try {
    let { active, recycled, todo } = req.body;

    // Check queries exist (todo is checked beforehand)
    if (!active || !recycled)
      res.status(400).json({ error: "Filter element missing!" });

    // Check if boolean and set type
    if (!(active === "true" || active === "false"))
      res.status(400).json({ error: "Filter element must be Boolean!" });
    else if (active === "true") active = true;
    else if (active === "false") active = false;

    // Check if boolean and set type
    if (!(recycled === "true" || recycled === "false"))
      res.status(400).json({ error: "Filter element must be Boolean!" });
    else if (recycled === "true") recycled = true;
    else if (recycled === "false") recycled = false;

    // Change boolean from string to actual boolean
    // Then change property name to match mongoose query syntax
    // Delete unwanted properties
    for (const task in todo) {
      if (todo[task] === "true") {
        todo[task] = true;
        todo["todo." + task] = todo[task];
        delete todo[task];
      }
      if (todo[task] === "false") delete todo[task];
    }

    // Merge todo and other variables into one query object
    const tmp = {
      active: active,
      recycled: recycled,
    };
    const query = Object.assign(tmp, todo);

    // Set request
    req.body.query = query;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validFilter;
