const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  const proxyHost = req.headers["x-forwarded-host"];
  const host = proxyHost ? proxyHost : req.headers.host;
  res.send(`Test: ${host}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
