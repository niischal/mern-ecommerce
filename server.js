const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
var dbConnection = require("./db");

var productsRoute = require("./routes/productsRoute");
var userRoute = require("./routes/userRoute");
app.use(bodyParser.json());
app.use("/api/products", productsRoute);
app.use("/api/users", userRoute);
app.get("/", (req, res) => {
  res.send("This is from Backend");
});

const port = process.env.PORT;
app.listen(port, () => console.log("Node JS Server Started"));
