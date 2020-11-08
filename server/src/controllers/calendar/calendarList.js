const { google } = require("googleapis");
const FAIL = "calendar_invite_fail";
const SUCCESS = "calendar_invite_success";
const getAuth = require("./getTk");

module.exports = {
  get: (cohort) => {
    const makeCohort = cohort.replace("Full", "Full Time"); // Full immersive 20기 >> Full Time immersive 20기
    console.log(makeCohort);
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
            if (calendar.summary === makeCohort) {
              resolve(calendar.id);
            }
          });
        });
      });
    });
  },
};
