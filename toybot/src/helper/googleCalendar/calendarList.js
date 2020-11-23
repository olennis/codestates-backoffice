const { google } = require("googleapis");
const getAuth = require('./getToken');

module.exports = {
  get: (cohort) => {
		console.log('여까지는 왔는데.')
    return new Promise((resolve, reject) => {
      getAuth.get().then((res) => {
        const calendar = google.calendar({ version: "v3", auth: res });
        calendar.calendarList.list({}, (err, res) => {
          if (err) {
            console.log(err);
            // resolve(FAIL);
            resolve({'message' : 'google_calendar_error'});
          }
          res.data.items.map((calendar) => {
            if (calendar.summary === cohort) {
              resolve(calendar.id);
            }
          });
          resolve({'message' : 'google_calendar_doesnt_exist'});

        });
      });
    });
  },
};
