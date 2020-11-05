const { google } = require("googleapis");

const FAIL = "calendar_invite_fail";
const SUCCESS = "calendar_invite_success";

const getCalendarId = require('./calendarList');
const getAuth = require('./getTk');

module.exports = {
	post: (userData) => {
		return new Promise((resolve, reject) => {
			getCalendarId.get(userData.log.split(",")[0])
				.then(cohortId => {
					if(cohortId.message) {resolve(cohortId.message);}

					console.log('join' + userData.log.split(",")[0]);
					console.log(cohortId, userData.email)

					getAuth.get().then(res => {
						const calendar = google.calendar({ version: 'v3', auth: res });	//토큰!!!
						const requestBody = {
							scope: {
								type: "user",
								value: `${userData.email}`
							},
							role: "reader"
						}
						// calendar.acl.insert({
						// 	calendarId: cohortId,
						// 	requestBody: requestBody
						// }, (err, res) => {
						// 		if (err) {
						// 			console.log(err);
						// 			resolve(FAIL);
						// 		}
						// 		resolve(SUCCESS);
						// 	});
						resolve(SUCCESS); //test 코드 꼭 삭제!
					});
				})
		});
	}
}