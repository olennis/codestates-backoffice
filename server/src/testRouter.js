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

router.get('/googletest', async (req, res) => {
	await controller.calendarAPI.kick.post('c_q2m6da41khi79tp028oemdaa8g@group.calendar.google.com', { email: 'wonjundero@gmail.com' })
	.then(r => res.send(r));
	// res.send(tmp);
	// let tmp = await controller.calendarAPI.join.post("")
})

//여러 사람들의 여러 툴들을 이동, 결과 
router.post('/gitTeam', async (req, res) => {
	//req.body의 내용을 토대로 사람 정보를 DB에서 가져와서
	//아래 코드에 맞게 조립
	const result = await Promise.all(req.body.people.map(async person => {
		let personResult = {};	//하나의 요청에 대한 모든 결과들이 모이는 객체
		personResult[person.git] = [];	//한 사람의 결과를 모으는 배열
		console.log(person.email);
		console.log(person.git);
		//Github API
		personResult[person.git].push(await controller.githubAPI.join.post({ cohort: req.body.cohort, githubUserName: person.git }));
		personResult[person.git].push(await controller.githubAPI.kick.post({ cohort: req.body.cohort, githubUserName: person.git }));

		//Slack API
		personResult[person.git].push(await controller.slackAPI.inviteChannel.post({ cohort: req.body.cohort, email: person.email }));
		personResult[person.git].push(await controller.slackAPI.kickChannel.post({ cohort: req.body.cohort, email: person.email }));

		//Calendar API
		// personResult[person].push(await controller.githubAPI.join.post({ cohort: req.body.cohort, githubUserName: person }));
		// personResult[person].push(await controller.githubAPI.kick.post({ cohort: req.body.cohort, githubUserName: person }));
		//결과 반환
		return personResult
	}));

	console.log(result);
	res.send(result);
});


module.exports = router;
