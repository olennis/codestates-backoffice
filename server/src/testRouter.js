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

//여러 사람들의 여러 툴들을 이동, 결과 
router.post('/gitTeam', async (req, res) => {
	//req.body의 내용을 토대로 사람 정보를 DB에서 가져와서
	//아래 코드에 맞게 조립
	const result = await Promise.all(req.body.people.map(async person => {
		let personResult = {};	//하나의 요청에 대한 모든 결과들이 모이는 객체
		personResult[person] = [];	//한 사람의 결과를 모으는 배열

		//Github API
		personResult[person].push(await controller.githubAPI.join.post({ cohort: req.body.cohort, githubUserName: person }));
		personResult[person].push(await controller.githubAPI.join.post({ cohort: req.body.cohort, githubUserName: person }));

		//Slack API

		//Calendar API

		//결과 반환
		return personResult
	}));

	console.log(result);
	res.send(result);
});


module.exports = router;
