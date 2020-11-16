require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const axios = require("axios");
const userinfo = require("./userinfo");
const channelList = require("./channelList");

// * 채널들이 필요하고, 채널들 안에 있는 유저 정보가 필요함
/**
 * {
				"id": 24,
				"name": "김현규",
				"email": "yolo.fabian.k@gmail.com",
				"githubUserName": "khgkimhyungyu",
				"googleId": "108840329454889183711",
				"log": "Full Immersive 20기,Full Immersive 19기,Full Pre 2기"
		}
 */

const headers = {
	Authorization: `Bearer ${token}`,
	"Content-Type": "application/json",
};

const FAIL = "slack_invite_fail";
const SUCCESS = "slack_invite_success";

module.exports = {
	post: async (userdata) => {
		try {
			const to = await channelList.get(
			  parseInt(userdata.log.split(",")[0].split(" ")[2].replace("기", ""))
			); // *  --> 19
			// const to = 'G01BKP93Z2N';
			const user = await userinfo.get(userdata.email);
			// console.log(to);
			// console.log(user);
			console.log('join:' + userdata.log.split(",")[0])
			console.log(to, user);
			for(let i = 0; i < to.length; i++){
        await axios({
					method: "post",
					headers: headers,
					url: `https://slack.com/api/conversations.invite`,
					data: {
						channel: to[i],
						users: user,
					},
				})
      }
			return new Promise((resolve, reject) => {
				resolve(SUCCESS);
			});
		} catch (err) {
			console.log(err.message);
			return new Promise((resolve, reject) => {
				resolve(FAIL);
			});
		}
	},
};
