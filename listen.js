const app = require("./server");
const port = 3000;

app.listen(process.env.PORT || port, (err) => {
  if (err) console.log(err);
  console.log(`Listening on port ${port}...`);
});
