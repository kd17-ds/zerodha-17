const express = require("express");
const router = express.Router();
const controller = require("../controllers/DataController");

router.get("/allHoldings", controller.getAllHoldings);
router.get("/allPositions", controller.getAllPositions);
router.get("/allOrders", controller.getAllOrders);

router.post("/newOrder", controller.newOrder);

router.delete("/sellOrder", controller.sellOrder);

module.exports = router;
