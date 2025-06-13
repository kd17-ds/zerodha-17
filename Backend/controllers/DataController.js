const { HoldingsModel } = require("../models/HoldingsModel");
const { OrdersModel } = require("../models/OrdersModel");
const { PositionsModel } = require("../models/PositionsModel");

const getAllHoldings = async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
};

const getAllPositions = async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
};

const getAllOrders = async (req, res) => {
  const allOrders = await OrdersModel.find({});
  res.json(allOrders);
};

const newOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    const avgCost = price;
    const netChange = ((price - avgCost) / avgCost) * 100;
    const dayChange = (Math.random() * 100 - 50).toFixed(2);

    await HoldingsModel.create({
      instrument: name,
      qty,
      ltp: price,
      avgCost,
      netChg: netChange,
      dayChg: dayChange,
    });

    res.send("Order Saved");
  } catch (error) {
    console.error("Error saving order or holdings:", error);
    res.status(500).send("Internal Server Error");
  }
};

const sellOrder = async (req, res) => {
  try {
    const { name, mode } = req.body;
    const holding = await HoldingsModel.findOne({ instrument: name });

    if (!holding) {
      return res.status(404).json({ message: "Holding not found" });
    }

    const { qty, ltp: price } = holding;

    const sellOrder = new OrdersModel({ name, qty, price, mode });
    await sellOrder.save();
    await HoldingsModel.deleteOne({ instrument: name });

    res.status(200).json({ message: "Sell order placed and holding deleted." });
  } catch (error) {
    console.error("Error during sell order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllHoldings,
  getAllPositions,
  getAllOrders,
  newOrder,
  sellOrder,
};
