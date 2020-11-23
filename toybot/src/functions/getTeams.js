'use strict';

const URLSearchParams = require('url').URLSearchParams;
const fullim24 = require('../teams/fullim24.json');

module.exports.handler = async event => {
  // console.log(event);
	const param = new URLSearchParams(event.body);
	const text = param.get('text');
	console.log(text);
	if(!text) throw new Error('기수 입력해주세요!');
	if(typeof parseInt(text) !== 'number') throw new Error('숫자만 입력해주세요!');

	if(text === '24'){
		console.log(fullim24);
		let message = 'Full Immersive 24기 팀 명단입니다 \n';
		for(let teamname in fullim24){
			message += (teamname + ' : '+ JSON.stringify(fullim24[teamname]) + '\n');
		}

		return {
			statusCode: 200,
			body: message
		}
	} else {
		// throw new Error('해당 기수로 파일이 없는듯 합니다. 파일을 만들던지, 입력한 값을 확인하세요');
		return {
			statusCode: 200,
			body: '해당 기수로 생성된 팀 파일이 없어요'
		}
	}
};
