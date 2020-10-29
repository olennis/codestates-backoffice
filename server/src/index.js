const express = require('express');

const app = express();
const port = 3000;

const parser= require('body-parser');

const router = require('./router');

app.get('/', (req, res) => {
    res.send('hello!');
});

app.use(parser.json());
app.use('/tool', router);

app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`server start! port: ${port}`);
});
