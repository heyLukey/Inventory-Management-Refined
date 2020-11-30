const validFilter = async (req, res, next) => {
  try {
    let { active, recycled, todo } = req.body;

    // Check queries exist (todo is checked beforehand)
    if (!active || !recycled)
      res.status(400).json({ error: "Filter element missing!" });

    // Check if boolean and set type
    if (!(active === "true" || active === "false" || active === "all"))
      res
        .status(400)
        .json({ error: "Filter element must be Boolean or 'all'!" });
    else if (active === "true") active = true;
    else if (active === "false") active = false;

    // Check if boolean and set type
    if (!(recycled === "true" || recycled === "false" || recycled === "all"))
      res.status(400).json({ error: "Filter element must be Boolean!" });
    else if (recycled === "true") recycled = true;
    else if (recycled === "false") recycled = false;

    // Change boolean from string to actual boolean
    // Then change property name to match mongoose query syntax
    // Delete unwanted properties
    for (const task in todo) {
      if (todo[task] === "true") {
        todo["todo." + task] = { $exists: true };
        delete todo[task];
      }
      if (todo[task] === "false") delete todo[task];
    }

    // Merge todo and other variables into one query object
    let tmp = {
      $and: [{ active: active, recycled: recycled }, {}],
    };
    tmp.$and[1] = todo;

    const query = Object.assign(tmp);

    // Check if we have to get rid of active or recycled
    if (query.$and[0].active === "all") delete query.$and[0].active;
    if (query.$and[0].recycled === "all") delete query.$and[0].recycled;

    // Set request
    req.body.query = query;

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = validFilter;
