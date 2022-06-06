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

app.post("/", (req, res) => {
  const newData = req.body;
  let data = fs.readFileSync("./models/data/data.json", "utf-8");
  let dataArray = JSON.parse(data);
  dataArray.push(newData);
  data = JSON.stringify(dataArray);
  fs.writeFileSync("./models/data/data.json", data, "utf-8");
  res.status(201).send({ "Added message": newData });
});

app.listen(process.env.PORT || port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
