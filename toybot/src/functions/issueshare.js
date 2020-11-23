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
	
};
