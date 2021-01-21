const express = require("express");
const app = express();
const port = 3003;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`/ from ${port}`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
