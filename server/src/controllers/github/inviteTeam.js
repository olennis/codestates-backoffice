// 이미 초대된 경우 -> success 나옴

require('dotenv').config()

const axios = require('axios');
const token = process.env.GITHUB_TOKEN;

const FAIL = 'github_invite_fail';
const SUCCESS = 'github_invite_success';

module.exports = {
	post: async (userdata) => {
		try {
			//Full Immersive 20기 -> full-immersive-20th
			let toTmp = userdata.log.split(',')[0].toLowerCase().split(' ').join('-');
			const to = toTmp.replace('기', 'th');
			// const to = userdata.cohort;		//테스트용 
			const username = userdata.githubUserName;
			console.log(to, username)
			// await axios({
			// 	method: "put",
			// 	headers: {
			// 		Authorization: `token ${token}`,
			// 	},
			// 	url: `https://api.github.com/orgs/codestates/teams/${to}/memberships/${username}`,
			// });
			return new Promise((resolve, reject) => {
				resolve(SUCCESS);
			});
		} catch (err) {
			console.log(err.message);
			return new Promise((resolve, reject) => {
				resolve(FAIL);
			});
		}
	}
}