require("dotenv").config();

const FAIL = "github_kick_fail";
const SUCCESS = "github_kick_success";

const axios = require("axios");
const token = process.env.GITHUB_TOKEN;
module.exports = {
  post: async (userdata) => {
    try {
      //full immersive full pre 인경우 핸들링 필요
      let fromTmp = userdata.log.split(",")[1].toLowerCase().split(" ").join("-");
      const from = fromTmp.replace("기", "th");
      // const from = userdata.cohort		
      const username = userdata.githubUserName;
      console.log(from, username);

      await axios({
        method: "delete",
        headers: {
          Authorization: `token ${token}`,
        },
        url: `https://api.github.com/orgs/codestates/teams/${from}/memberships/${username}`,
      });
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
};
