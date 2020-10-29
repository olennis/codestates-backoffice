const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;
const controller = require("./controllers");
app.get("/", (req, res) => {
  res.send("hello!");
});
app.post("/slack", (req, res) => {
  console.log(controller.slackAPI.kickChannel);
  res.send("plz ..");
});
app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server start! port: ${port}`);
});
