const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "Hi team Surviving with google! Our amazing is server running!",
  });
});

app.listen(process.env.PORT || port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
