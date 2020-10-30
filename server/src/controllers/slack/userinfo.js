require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const axios = require("axios");

/**
 * ! 이메일로 유저 고유 아이디만 가져오기
 */

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
}; // 토큰은 봇 토큰 아닌 Oauth 토큰으로

module.exports = {
  get: async (email) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://slack.com/api/users.lookupByEmail?email=${email}`,
        headers: headers,
      });
      return response.data.user.id;
    } catch (err) {
      console.log(`user ${email} not found`);
    }
  },
};
