require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const compose = require("./compose");

app.use(
  "/static",
  express.static(path.resolve(__dirname, "..", "client/assets"))
);

app.get("/", (req, res) => {
  const homePage = compose();
  res.send(homePage);
});

app.listen(
  process.env.PORT,
  console.log(`Now listening on ${process.env.PORT}`)
);
