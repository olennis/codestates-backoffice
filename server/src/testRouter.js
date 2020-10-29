const express = require('express');
const router = express.Router();

const controller = require('./controllers');
const model = require('./models');

// * POST /moveCohort
router.post('/git', async (req, res) => {
    controller.githubAPI.join.post(req.body)
    .then(result => {
        console.log(result);
        res.send(result);
    });
    
});

module.exports = router;
