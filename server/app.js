const express = require("express");
const router = require("./src/router/router");
const cors = require("cors");
const morgan = require("morgan");
const notFound = require("./src/middlewares/notFound");
const errorHandler = require("./src/middlewares/errorHandler");

require("dotenv").config();

const app = express();

app.use(morgan("tyni"));
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res, next) {
  res.sendFile("./public/home.html", { root: __dirname });
});

app.use("/api", router);

app.use(notFound);

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listen port on", port);
});
