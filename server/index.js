require("dotenv").config();
const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const staticRoot = path.resolve(__dirname, "..");
app.use("/static", express.static(path.resolve(staticRoot, "client/assets")));
app.use("/dist", express.static(path.resolve(staticRoot, "dist")));

app.get("/", (req, res, next) => {
  const pathToBuiltIndexHTML = path.resolve(
    __dirname,
    "..",
    "dist",
    "index.html"
  );

  try {
    if (fs.existsSync(pathToBuiltIndexHTML)) {
      res.sendFile(pathToBuiltIndexHTML);
    } else {
      throw new Error("Could not locate dist/index.html!");
    }
  } catch (err) {
    next(err);
  }
});

app.use((req, res, next) => {
  res.status(404).send("Not found");
});

app.use((err, req, res, next) => {
  console.log(req.method, req.path, err.message);
  res.status(500).send(`Internal server error: ${err.message}`);
});

app.listen(
  process.env.PORT,
  console.log(`Now listening on ${process.env.PORT}`)
);
