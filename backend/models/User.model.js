const mongoose = require("mongoose");

// User Schema
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true, trim: true },
  username: { type: String, required: true, unique: true, trim: true, min: 3 },
  password: { type: String, required: true, trim: true, min: 7 },
});

module.exports = mongoose.model("User", userSchema);
