if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbUrl = process.env.MONGO_URL;
const authRoute = require("./routes/AuthRoute");
const dataroute = require("./routes/DataRoute");

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/", authRoute);
app.use("/", dataroute);

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

app.listen(PORT, () => {
  console.log("Server is running on port 3002");
});
