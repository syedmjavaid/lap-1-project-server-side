const fs = require("fs");

exports.fetchAll = (callback) => {
  fs.readFile("./models/data/data.json", "utf8", (err, jsonString) => {
    if (err) console.log(err);
    try {
      const data = JSON.parse(jsonString);
      callback(err, data);
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

exports.fetchById = (postId, callback) => {
  fs.readFile("./models/data/data.json", "utf8", (err, jsonString) => {
    if (err) console.log(err);
    try {
      const data = JSON.parse(jsonString);

      for (let i = 0; i < data.length; i++) {
        if (data[i].id == postId) {
          callback(err, data[i]);
        }
      }
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  });
};

exports.fetchPost = (newData, callback) => {
  let data = fs.readFileSync("./models/data/data.json", "utf-8");
  let dataArray = JSON.parse(data);
  dataArray.push(newData);
  data = JSON.stringify(dataArray);
  fs.writeFileSync("./models/data/data.json", data, "utf-8");
  callback("post request successful");
};
