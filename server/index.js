require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.end("Hello");
});

app.listen(
  process.env.PORT,
  console.log(`Now listening on ${process.env.PORT}`)
);
