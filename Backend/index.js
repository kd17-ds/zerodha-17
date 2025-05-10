if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbUrl = process.env.MONGO_URL;
const { HoldingsModel } = require("./models/HoldingsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { PositionsModel } = require("./models/PositionsModel");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

main()
  .then((res) => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
    await newOrder.save();

    let avgCost = req.body.price;
    let netChange = ((req.body.price - avgCost) / avgCost) * 100;
    const dayChange = (Math.random() * 100 - 50).toFixed(2);

    await HoldingsModel.create({
      instrument: req.body.name,
      qty: req.body.qty,
      ltp: req.body.price,
      avgCost: avgCost,
      netChg: netChange,
      dayChg: dayChange,
    });
    res.send("Order Saved");
  } catch (error) {
    console.error("Error saving order or holdings:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port 3002");
});

// app.get("/addPositions", async (req, res) => {
//   let tempPosition = [
//     {
//       product: "CNC",
//       instrument: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       ltp: 312.35,
//       chg: "-1.24%",
//     },
//     {
//       product: "CNC",
//       instrument: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       ltp: 3082.65,
//       chg: "-1.35%",
//     },
//   ];
//   tempPosition.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       instrument: item.instrument,
//       qty: item.qty,
//       avg: item.avg,
//       ltp: item.ltp,
//       chg: item.chg,
//     });
//     newPosition.save();
//   });
//   res.send("done");
// });
// app.get("/addHoldings", async (req, res) => {
//   let tempHolding = [
//     {
//       instrument: "BHARTIARTL",
//       qty: 2,
//       avgCost: 538.05,
//       ltp: 541.15,
//       netChg: "+0.58%",
//       dayChg: "+2.99%",
//     },
//     {
//       instrument: "HDFCBANK",
//       qty: 2,
//       avgCost: 1383.4,
//       ltp: 1522.35,
//       netChg: "+10.04%",
//       dayChg: "+0.11%",
//     },
//     {
//       instrument: "HINDUNILVR",
//       qty: 1,
//       avgCost: 2335.85,
//       ltp: 2417.4,
//       netChg: "+3.49%",
//       dayChg: "+0.21%",
//     },
//     {
//       instrument: "INFY",
//       qty: 1,
//       avgCost: 1350.5,
//       ltp: 1555.45,
//       netChg: "+15.18%",
//       dayChg: "-1.60%",
//     },
//     {
//       instrument: "ITC",
//       qty: 5,
//       avgCost: 202.0,
//       ltp: 207.9,
//       netChg: "+2.92%",
//       dayChg: "+0.80%",
//     },
//     {
//       instrument: "KPITTECH",
//       qty: 5,
//       avgCost: 250.3,
//       ltp: 266.45,
//       netChg: "+6.45%",
//       dayChg: "+3.54%",
//     },
//     {
//       instrument: "M&M",
//       qty: 2,
//       avgCost: 809.9,
//       ltp: 779.8,
//       netChg: "-3.72%",
//       dayChg: "-0.01%",
//     },
//     {
//       instrument: "RELIANCE",
//       qty: 1,
//       avgCost: 2193.7,
//       ltp: 2112.4,
//       netChg: "-3.71%",
//       dayChg: "-",
//     },
//     {
//       instrument: "SBIN",
//       qty: 4,
//       avgCost: 324.35,
//       ltp: 430.2,
//       netChg: "-",
//       dayChg: "-0.34%",
//     },
//     {
//       instrument: "SGBMAY29",
//       qty: 2,
//       avgCost: 4727,
//       ltp: 4719,
//       netChg: "-",
//       dayChg: "+0.15%",
//     },
//     {
//       instrument: "TATAPOWER",
//       qty: 5,
//       avgCost: 104.2,
//       ltp: 124.15,
//       netChg: "-",
//       dayChg: "-0.24%",
//     },
//     {
//       instrument: "TCS",
//       qty: 1,
//       avgCost: 3041.7,
//       ltp: 3194.8,
//       netChg: "-",
//       dayChg: "-",
//     },
//     {
//       instrument: "WIPRO",
//       qty: 4,
//       avgCost: 489.3,
//       ltp: 577.75,
//       netChg: "-",
//       dayChg: "+0.32%",
//     },
//   ];
//   tempHolding.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       instrument: item.instrument,
//       qty: item.qty,
//       avgCost: item.avgCost,
//       ltp: item.ltp,
//       netChg: item.netChg,
//       dayChg: item.dayChg,
//     });
//     newHolding.save();
//   });
//   res.send("done");
// });
