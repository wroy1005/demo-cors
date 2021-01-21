const express = require("express");
var cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.static("public"));
const port = 3002;

app.all("/cors", (req, res) => {
  console.log(req.headers)
  console.log(req.cookies)
  if(!(req.headers.referer).includes(port)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.setHeader('Access-Control-Allow-Credentials', true)
  }
  res.send(`cors from ${port}`);
});

app.get("/", (req, res) => {
  res.cookie('foo', 'bar2')
  res.send(`/ from ${port}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
