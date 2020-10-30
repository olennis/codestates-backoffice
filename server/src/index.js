const express = require("express");
const app = express();
const port = 3000;
const controller = require("./controllers");
const parser = require("body-parser");
app.use(parser.json());

app.get("/", (req, res) => {
  res.send("hello!");
});

app.post("/slack", (req, res) => {
  controller.slackAPI.inviteChannel.post(req.body).then((result) => {
    console.log(result);
    res.send(result);
  });
});
// app.post("/slack", controller.slackAPI.inviteChannel.post);

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server start! port: ${port}`);
});
