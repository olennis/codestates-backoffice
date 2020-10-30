const express = require("express");
const app = express();
const port = 3000;
const controller = require("./controllers");
app.get("/", (req, res) => {
  res.send("hello!");
});

app.post("/github", (req, res) => {
  controller.githubAPI.kick.post();
});

app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server start! port: ${port}`);
});
