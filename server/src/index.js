const express = require("express");
const app = express();
const port = 3000;
const controller = require("./controllers");
app.get("/", (req, res) => {
  res.send("hello!");
});

const parser= require('body-parser');

const router = require('./router');
const test = require('./testRouter');

//! invite
app.post("/slack", (req, res) => {
  controller.slackAPI.inviteChannel.post(req.body).then((result) => {
    console.log(result);
    res.send(result);
  });
});

app.use(parser.json());
app.use('/tool', router);
app.use('/test', test);

app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`server start! port: ${port}`);
});
