const express = require('express');
const router = express.Router();

const controller = require('./controllers');
const model = require('./models');

// * POST /moveCohort
router.post('/moveCohort', async (req, res) => {
	console.log(req.body);
	const userdata = await Promise.all(req.body.people.map(person =>
		model.userdata.get(parseInt(req.body.cohort), person)));
	const moveToolResults = '';

	//controller 사용


	res.send(userdata);
	// res.send(moveToolResults);
});

module.exports = router;
