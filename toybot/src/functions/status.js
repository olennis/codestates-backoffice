'use strict';

const URLSearchParams = require('url').URLSearchParams;

//들어오는 값에 따라 정렬 변경 필요
// 이름순, 안푼 순

const models = require('../models');

module.exports.handler = async event => {
	const param = new URLSearchParams(event.body);
	const text = param.get('text');
  console.log(text);

  const splited = text.split(' ');

  const cohort = splited[0];
  let orderBy = 'u.name';

  console.log(splited[1])
  if(splited[1] === 'cnt') orderBy = 'list.cnt' 

  console.log(orderBy);
  const dbData = await models.progress.get({cohort: cohort, orderBy: orderBy});
  console.log(dbData);

  let message = `데스크탑 환경에서 최적화되어있습니다. \nFull Immersive ${cohort}기 토이 현황입니다 (푼 문제)\n\n*이름*  |  *푼_갯수*  |  *깃헙아이디*  |  *푼_문제*\n`;

  let stringData = '';
  let maxlength = 0;
  for(let i = 0; i < dbData.length; i++){
    const user = dbData[i];
    const tmplog =user.toy_list.split(',');
    const orgLog = tmplog.reduce((acc, cur) => {
      const tmp = cur.split('');
      if(acc[tmp[0]] === undefined) acc[tmp[0]] = [];
      acc[tmp[0]].push(tmp[1]);
      return acc; 
    }, {});

    let orgData = '';
    for(let key in orgLog){
      orgData += ` | ${key}: ${orgLog[key].join('')}`
    }
    let tmp = `*${user.name}*\t${user.cnt}\t${user.githubUserName}\t푼 토이: ${orgData}\n`;
    if(maxlength < tmp.length) maxlength = tmp.length;
    stringData += tmp;
  }
  console.log(maxlength);
  let line = '';

  for(let i = 0; i < maxlength * 1.5; i++){
    line += '-'
  }
  return {
    statusCode: 200,
    body: message + '\n' + line + '\n' + stringData
  };
};
