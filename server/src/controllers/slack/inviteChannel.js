const token = process.env.SLACK_TOKEN
const axios = require("axios")

async function inviteChannel() {
    try {
        const response = await axios({
            method: 'get',
            url = `https://slack.com/api/conversations.list?token=${token}&types=private_channel`,
        }) 
        // ? 포스트맨 돌렸을 때, private channel list 불러와집니다.`
        if(response.data.channels.name === "test_for_coe") {
            return response.data.channels.name;
        }
    } catch (err) {
        console.log("channel not found")
    }
}

// module.exports = inviteChannel;