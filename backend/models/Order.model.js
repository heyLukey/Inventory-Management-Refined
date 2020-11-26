const mongoose = require("mongoose");

// Order Schema
const orderSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 24,
  },
  customer: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 24,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 280,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    max: 264,
  },
  price: {
    type: Number,
    required: true,
    min: 0.01,
    max: 16777216,
  },
  todo: {
    polishing: { type: Boolean, default: false, required: true },
    sizing: { type: Boolean, default: false, required: true },
    lazer: { type: Boolean, default: false, required: true },
    engraving: { type: Boolean, default: false, required: true },
    plating: { type: Boolean, default: false, required: true },
    rhodium: { type: Boolean, default: false, required: true },
    cleaning: { type: Boolean, default: false, required: true },
  },
  deadline: {
    type: Date,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  notes: {
    type: String,
    trim: true,
    min: 0,
    max: 280,
  },
  recycled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
