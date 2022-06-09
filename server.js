const express = require("express");
const cors = require("cors");
const dataRoutes = require("./controllers/routes");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/", dataRoutes);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(404).send({ msg: "404 Not Found" });
});

module.exports = app;
