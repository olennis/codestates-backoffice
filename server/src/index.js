// const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const controller = require("./controllers");
app.get("/", (req, res) => {
  res.send("hello!");
});

app.post("/slack", controller.slackAPI.kickChannel);
// app.post("/slack", controller.slackAPI.inviteChannel.post);

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server start! port: ${port}`);
});
