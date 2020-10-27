const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello!');
});

app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`server start! port: ${port}`);
});