// Npm Libraries
const router = require("express").Router();

// Middleware
const auth = require("../middleware/Auth.middle");

// Middleware [validation]
const validFilter = require("../middleware/order/Filter.middle");
const validTitle = require("../middleware/order/Title.middle");
const validCustomer = require("../middleware/order/Customer.middle");
const validDescription = require("../middleware/order/Description.middle");
const validQuantity = require("../middleware/order/Quantity.middle");
const validPrice = require("../middleware/order/Price.middle");
const validTodo = require("../middleware/order/Todo.middle");
const validDeadline = require("../middleware/order/Deadline.middle");
const validNotes = require("../middleware/order/Notes.middle");

// Mongoose Schemas
const Order = require("../models/Order.model");

// GET filtered orders [protected]
router.post("/filter", auth, validTodo, validFilter, async (req, res) => {
  try {
    // Store body variables
    const { query } = req.body;

    // Find orders based on given query
    console.log("Querying: " + JSON.stringify(query));
    const findOrders = await Order.find(query);

    // Return queried orders
    res.json(findOrders);
    console.log("GET to '/order/filter' success!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET specific order [protected]
router.get("/:orderID", auth, async (req, res) => {
  try {
    // Store param variables
    const { orderID } = req.params;

    // Check if valid ObjectID
    if (!orderID.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ error: "Invalid ID!" });

    // Check returned order
    const findOrderByID = await Order.findOne({ _id: orderID });
    if (findOrderByID === null) {
      res.json({ error: "No such order exists!" });
    } else {
      res.json(findOrderByID);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE specific order [protected]
router.delete("/:orderID", auth, async (req, res) => {
  try {
    // Store param variables
    const { orderID } = req.params;

    // Check if valid ObjectID
    if (!orderID.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ error: "Invalid ID!" });

    // Check returned order
    await Order.deleteOne({ _id: orderID });
    res.json(`Successfully deleted order(${orderID})!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST order information [protected]
router.post(
  "/create",
  auth,
  validTitle,
  validCustomer,
  validDescription,
  validQuantity,
  validPrice,
  validTodo,
  validDeadline,
  validNotes,
  async (req, res) => {
    try {
      // Store body variables
      const {
        title,
        customer,
        description,
        quantity,
        price,
        todo,
        deadline,
        notes,
      } = req.body;

      // Create order to post
      const postOrder = new Order({
        title: title,
        customer: customer,
        description: description,
        quantity: quantity,
        price: price,
        todo: todo,
        deadline: deadline,
        notes: notes,
      });

      // Save order to database
      const saveOrder = await postOrder.save();
      res.send(saveOrder);
      console.log("POST to '/order/create' success!");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// PATCH order [protected]
router.patch(
  "/edit/:orderID",
  auth,
  validTitle,
  validCustomer,
  validDescription,
  validQuantity,
  validPrice,
  validTodo,
  validDeadline,
  validNotes,
  async (req, res) => {
    try {
      // Store body variables
      const {
        title,
        customer,
        description,
        quantity,
        price,
        todo,
        deadline,
        notes,
      } = req.body;

      // Patch title
      const patchOrder = await Order.updateOne(
        { _id: req.params.orderID },
        {
          $set: {
            title: title,
            customer: customer,
            description: description,
            quantity: quantity,
            price: price,
            todo: todo,
            deadline: deadline,
            notes: notes,
          },
        },
        { runValidators: true }
      );
      res.json(patchOrder);
      console.log(`PATCH to '/edit/${req.params.orderID}' success!`);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// PATCH title value in given order [protected]
router.patch("/title/:orderID", auth, validTitle, async (req, res) => {
  try {
    const { title } = req.body;

    // Patch title
    const patchOrderTitle = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { title: title } },
      { runValidators: true }
    );
    res.json(patchOrderTitle);
    console.log(`PATCH to '/order/title/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH customer value in given order [protected]
router.patch("/customer/:orderID", auth, validCustomer, async (req, res) => {
  try {
    const { customer } = req.body;

    // Patch customer
    const patchOrderCustomer = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { customer: customer } },
      { runValidators: true }
    );
    res.json(patchOrderCustomer);
    console.log(`PATCH to '/order/customer/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH description value in given order [protected]
router.patch(
  "/description/:orderID",
  auth,
  validDescription,
  async (req, res) => {
    try {
      const { description } = req.body;

      // Patch customer
      const patchOrderDescription = await Order.updateOne(
        { _id: req.params.orderID },
        { $set: { description: description } },
        { runValidators: true }
      );
      res.json(patchOrderDescription);
      console.log(
        `PATCH to '/order/description/${req.params.orderID}' success!`
      );
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// PATCH quantity value in given order [protected]
router.patch("/quantity/:orderID", auth, validQuantity, async (req, res) => {
  try {
    const { quantity } = req.body;

    // Patch quantity
    const patchOrderQuantity = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { quantity: quantity } },
      { runValidators: true }
    );
    res.json(patchOrderQuantity);
    console.log(`PATCH to '/order/quantity/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH price value in given order [protected]
router.patch("/price/:orderID", auth, validPrice, async (req, res) => {
  try {
    const { price } = req.body;

    // Patch price
    const patchOrderPrice = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { price: price } },
      { runValidators: true }
    );
    res.json(patchOrderPrice);
    console.log(`PATCH to '/order/price/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH todo value in given order [protected]
router.patch("/todo/:orderID", auth, validTodo, async (req, res) => {
  try {
    const { todo } = req.body;

    // Patch todo
    const patchOrderTodo = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { todo: todo } },
      { runValidators: true }
    );
    res.json(patchOrderTodo);
    console.log(`PATCH to '/order/todo/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH deadline value in given order [protected]
router.patch("/deadline/:orderID", auth, validDeadline, async (req, res) => {
  try {
    const { deadline } = req.body;

    // Patch todo
    const patchOrderDeadline = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { deadline: deadline } },
      { runValidators: true }
    );
    res.json(patchOrderDeadline);
    console.log(`PATCH to '/order/deadline/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH notes value in given order [protected]
router.patch("/notes/:orderID", auth, validNotes, async (req, res) => {
  try {
    const { notes } = req.body;

    // Patch todo
    const patchOrderNotes = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { notes: notes } },
      { runValidators: true }
    );
    res.json(patchOrderNotes);
    console.log(`PATCH to '/order/notes/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH recycled value in given order [protected]
router.patch("/recycled/:orderID", auth, async (req, res) => {
  try {
    const { recycled } = req.body;

    // Check recycled exists
    if (recycled === undefined)
      return res.status(400).json({ error: "Missing recycled value!" });

    // Patch recycled
    const patchOrderRecycled = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { recycled: recycled } },
      { runValidators: true }
    );
    res.json(patchOrderRecycled);
    console.log(`PATCH to '/order/recycled/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PATCH active value in given order [protected]
router.patch("/active/:orderID", auth, async (req, res) => {
  try {
    const { active } = req.body;

    // Check active exists
    if (active === undefined)
      return res.status(400).json({ error: "Missing active value!" });

    // Patch active
    const patchOrderActive = await Order.updateOne(
      { _id: req.params.orderID },
      { $set: { active: active } },
      { runValidators: true }
    );
    res.json(patchOrderActive);
    console.log(`PATCH to '/order/active/${req.params.orderID}' success!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export route
module.exports = router;
