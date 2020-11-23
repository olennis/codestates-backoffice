const express = require('express');
const router = express.Router();

const controller = require('./controllers');
const model = require('./models');
const { post } = require('./controllers/github/kickTeam');

router.get('/getUserInfo', async(req, res) => {
	console.log(req.query);
	const userdata = await model.getUserByCohort.get(req.query.cohort.trim());
	res.header("Access-Control-Allow-Origin", "*");
	res.send(userdata);
});

router.get('/getUserByName', async(req, res) => {
	console.log(req.query.name);
	const userdata = await model.getUserByName.get(req.query.name.trim());
	res.header("Access-Control-Allow-Origin", "*");
	res.send(userdata);
});

// * POST /moveCohort
router.post('/moveCohort', async (req, res) => {
	console.log(req.body);
	const userdata = await Promise.all(req.body.people.map(person =>
		model.userdata.get(parseInt(req.body.cohort), person)));

	//controller 사용
	const moveToolResults = await Promise.all(userdata.map(async user => {
		let personResult = {};
		personResult[user.name] = [];
		if (user.message) {
			return user.message;
		} else {
			//Github
			personResult[user.name].push(await controller.githubAPI.join.post(user))
			personResult[user.name].push(await controller.githubAPI.kick.post(user))

			//Slack
			personResult[user.name].push(await controller.slackAPI.inviteChannel.post(user))
			personResult[user.name].push(await controller.slackAPI.kickChannel.post(user))

			//Google Calendar
			personResult[user.name].push(await controller.calendarAPI.join.post(user))
			personResult[user.name].push(await controller.calendarAPI.kick.post(user))
		}


		return personResult;
	}));

	res.send(moveToolResults);
	// res.send(moveToolResults);
});

module.exports = router;
