const { Schema } = require("mongoose");

const PositionsSchema = new Schema({
  product: String,
  instrument: String,
  qty: Number,
  avg: Number,
  ltp: Number,
  chg: String,
  isLoss: Boolean,
});

module.exports = { PositionsSchema };
