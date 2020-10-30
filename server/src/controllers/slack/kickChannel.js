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
const FAIL = "slack_kick_fail";
const SUCCESS = "slack_kick_success";

module.exports = {
  post: async (userdata) => {
    try {
      // const from = await channelList(
      //   parseInt(userdata.log.split(",")[1].split(" ")[2].replace("기", ""))
      // ); // *  --> 19
      const from = 'G01BKP93Z2N';
      const user = await userinfo.get(userdata.email);
      // console.log(from);
      // console.log(user);

      if (userdata.message) {
        return new Promise((resolve, reject) => {
          resolve(FAIL);
        });
      }
      await axios({
        method: "post",
        url: `https://slack.com/api/conversations.kick?token=${token}&channel=${from}&user=${user}`,
      })
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
