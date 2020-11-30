const mongoose = require("mongoose");

// Order Schema
const orderSchema = mongoose.Schema(
  {
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
      type: {
        polishing: { type: Boolean, default: null },
        sizing: { type: Boolean, default: null },
        lazer: { type: Boolean, default: null },
        engraving: { type: Boolean, default: null },
        plating: { type: Boolean, default: null },
        rhodium: { type: Boolean, default: null },
        cleaning: { type: Boolean, default: null },
      },
      default: {},
      required: true,
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
  },
  { minimize: false }
);

module.exports = mongoose.model("Order", orderSchema);
