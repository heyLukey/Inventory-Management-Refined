// Npm Libraries
const router = require("express").Router();
const moment = require("moment");
const fs = require("fs").promises;
const path = require("path");
const json2csv = require("json2csv").parse;

// Middleware
const auth = require("../middleware/Auth.middle");

// Mongoose Schemas
const Order = require("../models/Order.model");

const relevantData = [
  "title",
  "customer",
  "description",
  "quantity",
  "price",
  "todo.polishing",
  "todo.sizing",
  "todo.lazer",
  "todo.engraving",
  "todo.plating",
  "todo.rhodium",
  "todo.cleaning",
  "created",
  "deadline",
  "_id",
  "recycled",
];

// GET download database
router.get("/download", auth, async (req, res) => {
  try {
    const mongoDataBase = await Order.find();
    const csv = json2csv(mongoDataBase, { fields: relevantData });

    // Create filepath
    const dateTime = moment().valueOf();
    const filepath = path.join(__dirname, "../tmp", "csv-" + dateTime + ".csv");

    // Write database to csv
    await fs.writeFile(filepath, csv, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    // Send download response
    res.download(filepath, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("File was downloaded!");
        fs.unlink(filepath, function (err) {
          console.log(err);
        })
          .then(() => {
            console.log("File was deleted successfully!");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
