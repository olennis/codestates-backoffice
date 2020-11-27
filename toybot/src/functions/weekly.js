'use strict';

const URLSearchParams = require('url').URLSearchParams;
const today = new Date();

const models = require('../models');
const fullim24 = require('../teams/fullim24.json');

//동명이인 핸들링 필요
//json 객체에 user primary key를 넣던지 아니면 github id를 받아오는 방안 생각

module.exports.handler = async event => {
	const param = new URLSearchParams(event.body);
	const cohort = param.get('text');
	console.log(cohort);

	if (!cohort) throw new Error('기수 입력해주세요!');
	if (typeof parseInt(cohort) !== 'number') throw new Error('숫자만 입력해주세요!');

	const dayArray = ['일', '월', '화', '수', '목', '금', '토'];
	const todayDayNumber = new Date().getDay();

	let userdata;

	const start = new Date();
	start.setDate(start.getDate() - 7);
	const startDate = start.getFullYear() + '-' + (start.getMonth() + 1) + '-' + start.getDate()
	const end = new Date();
	const endDate = end.getFullYear() + '-' + (end.getMonth() + 1) + '-' + end.getDate()

	const unorganizedData = await models.week.get({ cohort: cohort, startDate: startDate, endDate: endDate });
	// console.log(unorganizedData);

	// const organizedData = {};
	// for(let team in userdata){
	// 	organizedData[team] = {};
	// 	userdata[team].forEach((user) => {

	// 	})
	// }

	//입력받은 기수에 따라서 분기할 수 있도록
	if (cohort === '24') userdata = fullim24;
	else {
		let message = '\n```' +`Full Immersive ${cohort}기 ${startDate} ~ ${endDate}\n이름\t깃헙아이디\t한주동안토이를푼횟수(주말포함, 최대 7)\n` + '```\n' 

		let data = '```\n';
		for (let i = 0; i < unorganizedData.length; i++) {
			data += `${unorganizedData[i].id}\t${unorganizedData[i].name}\t${unorganizedData[i].githubUserName}\t${unorganizedData[i].cnt}\n`
		}
		data += '```\n'
		return {
			statusCode: 200,
			body: '```해당 기수로 진행되는 weekly reflecaion이 없습니다.\n만약 있다면 팀명단json 파일을 만들어야합니다.```\n' + message + data
		}
	}

	const organizedData = unorganizedData.reduce((acc, cur) => {
		let team = 'err';
		for (let tname in userdata) {
			console.log(cur.id);
			if (userdata[tname].includes(`${cur.id}`)){
				team = tname;
				break;
			} 
		}
		console.log(team)
		// acc[team] = acc[team] === undefined ? {} : acc[team];
		if(acc[team] === undefined) acc[team] = {};
		if (acc[team][cur.id] === undefined) {
			acc[team][cur.id] = { name: cur.name, githubUserName: cur.githubUserName, cnt: cur.cnt }
		} else {
			throw new Error('팀 명단에서 문제가 있습니다' + cur.id);
		}
		return acc;
	}, {})

	console.log(organizedData);

	let message = '```' +`Full Immersive ${cohort}기 ${startDate} ~ ${endDate}\n이름\t깃헙아이디\t한주동안토이를푼횟수(주말포함, 최대 7)\n` + '```' 

	// for (let i = 0; i < unorganizedData.length; i++) {
	// 	message += `${unorganizedData[i].id}\t${unorganizedData[i].name}\t${unorganizedData[i].githubUserName}\t${unorganizedData[i].cnt}\n`
	// }
	for(let team in organizedData){
		message += '\n'
		message += '```';
		message += `\n ${team}팀\n`;
		for(let userdata in organizedData[team]){
			message += `${organizedData[team][userdata].name}\t${organizedData[team][userdata].githubUserName}\t${organizedData[team][userdata].cnt}\n`
		}
		message += '```';
		message += '\n'

	}

	return {
		statusCode: 200,
		body: message 
	};
};
