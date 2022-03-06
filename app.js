require("dotenv").config();
const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:whoami", (req, res) => {
  let ip = req.ip;
  let lang = req.acceptsLanguages().join(",");
  let software = req.hostname;
  res.json({ ipaddress: ip, language: lang, software: software });
  console.log({ ip: ip, lang: lang, software: software });
});

var listener = app.listen(3000, function () {
  console.log(
    `Your app is listening on URL http://localhost:${listener.address().port}`
  );
});
