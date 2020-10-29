const token = process.env.SLACK_TOKEN;
const channel = process.env.CHANNEL_ID;
const hyunkyuID = process.env.SLACK_ID_HYUNKYU;
const axios = require("axios");

// async function kickChannel() {
//   try {
//     const response = await axios({
//       method: "post",
//       url: `https://slack.com/api/channels.kick?token=${token}&channel=${channel}&user=${hyunkyuID}`,
//     });
//     if (response.data.channel.user === UU0DXSXRV) {
//       console.log(response.dat.channel.user);
//     }
//   } catch (err) {
//     console.log("user not found");
//   }
// }
module.export = {
  kickChannel: async function () {
    try {
      const response = await axios({
        method: "post",
        url: `https://slack.com/api/channels.kick?token=${token}&channel=${channel}&user=${hyunkyuID}`,
      });
      if (response.data.channel.user === UU0DXSXRV) {
        console.log(response.dat.channel.user);
      }
    } catch (err) {
      console.log("user not found");
    }
  },
};
