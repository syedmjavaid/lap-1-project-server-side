const express = require("express");
const cors = require("cors");
const fs = require("fs");

const port = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  fs.readFile("./models/data/data.json", "utf8", (err, jsonString) => {
    if (err) console.log(err);
    try {
      const data = JSON.parse(jsonString);
      res.send(data);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
});

app.get("/:id", (req, res) => {
  const postId = req.params.id;
  fs.readFile("./models/data/data.json", "utf8", (err, jsonString) => {
    if (err) console.log(err);
    try {
      const data = JSON.parse(jsonString);

      for (let i = 0; i < data.length; i++) {
        if (data[i].id == postId) {
          res.send(data[i]);
        }
      }
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
});

app.listen(process.env.PORT || port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
