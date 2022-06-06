const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world server running");
});

app.listen(port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
