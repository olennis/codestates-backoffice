const { google } = require("googleapis");

const getCalendarId = require('./calendarList');
const getAuth = require('./getToken');

module.exports = {
	get: (cohort) => {
		return new Promise((resolve, reject) => {
			getCalendarId.get(cohort)
				.then(cohortId => {
					if(cohortId.message) {resolve(cohortId.message);}

					getAuth.get().then(res => {
						const calendar = google.calendar({ version: 'v3', auth: res });	//토큰!!!
						const requestBody ={
							calendarId: cohortId,
							timeMin: (new Date()).toISOString(),
							maxResults: 10,
							singleEvents: true,
							orderBy: 'startTime',
						}
						calendar.events.list({
							requestBody
						}, (err, res) => {
								if (err) {
									console.log(err);
									reject(err);
								}
								resolve(res);
							});
					});
				})
		});
	}
}