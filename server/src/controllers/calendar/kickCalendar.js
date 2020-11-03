const { google } = require("googleapis");

const FAIL = "calendar_invite_fail";
const SUCCESS = "alendar_invite_success";

const getAuth = require('./getTk');

module.exports = {
	post: (calendarID, userData) => {
		return new Promise((resolve, reject) => {
			console.log(calendarID, userData.email)

			getAuth.get().then(res => {
				const calendar = google.calendar({ version: 'v3', auth: res });	//토큰!!!
				
				calendar.acl.delete({
					calendarId: calendarID,
					ruleId: `user:${userData.email}`
				}, (err, res) => {
					if (err) {
						console.log(err);
						resolve(FAIL);
					}
					resolve(SUCCESS);
				});
			});
		});
	}
}