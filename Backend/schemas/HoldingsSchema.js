const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  instrument: String,
  qty: Number,
  avgCost: Number,
  ltp: Number,
  netChg: String,
  dayChg: String,
});

module.exports = { HoldingsSchema };
