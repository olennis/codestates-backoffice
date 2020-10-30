require("dotenv").config();
const FAIL = "github_invite_fail";
const SUCCESS = "github_invite_success";
const axios = require("axios");
module.exports = {
  //1. req = cohort, userArray(변경 예정)
  //2. 클라이언트에서 req를 보낸다.
  //3. req에서 보내 준 데이터와 일치하는 (아마 fidnAll?) 유저 정보 DB에서 가져온다.
  //4. kickUserFromTeam 함수 실행해서 쫓아낸다 cohort: full-immersive-24th
  //5. res로 userId, userName, userGithubName, status를 보낸다.(<< 이건 왜...?)
  post: (userdata) => {
    const token = process.env.GITHUB_TOKEN;
    async function kickUserFromTeam() {
      try {
        let fromTmp = userdata.log
          .split(",")[1]
          .toLowerCase()
          .split(" ")
          .join("-");
        const from = fromTmp.replace("기", "th");
        const username = userdata.githubUserName;
        await axios({
          method: "delete",
          headers: {
            Authorization: `token ${token}`,
          },
          url: `https://api.github.com/orgs/codestates/${from}/test/memberships/${username}`,
        });
        return new Promise((resolve, reject) => {
          resolve(SUCCESS);
        });
      } catch (err) {
        console.log(err);
        return new Promise((resolve, reject) => {
          resolve(FAIL);
        });
      }
    }
    kickUserFromTeam();
  },
};
