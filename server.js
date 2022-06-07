const express = require("express");
const cors = require("cors");
const dataRoutes = require("./controllers/routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", dataRoutes);

module.exports = app;
