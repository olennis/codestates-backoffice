require("dotenv").config();
const token = process.env.SLACK_TOKEN;
const axios = require("axios");

module.exports = {
  get: async (cohortNum) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://slack.com/api/conversations.list?token=${token}&types=private_channel&pretty=1`,
      });
      let channels = [];
      for (let i = 0; i < response.data.channels.length; i++) {
        if (
          response.data.channels[i].name === `a_full_im_${cohortNum}th_notice`
        ) {
          channels.push(response.data.channels[i].id);
        }
        if (
          response.data.channels[i].name === `a_full_im_${cohortNum}th_general`
        ) {
          channels.push(response.data.channels[i].id);
        }
      }
      return channels;
    } catch (err) {
      console.log("channel not found");
    }
  },
};
