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
				const requestBody = {
					scope: {
						type: "user",
						value: `${userData.email}`
					},
					role: "reader"
				}
				calendar.acl.insert({
					calendarId: calendarID,
					requestBody: requestBody
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