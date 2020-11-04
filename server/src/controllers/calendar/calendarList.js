const { google } = require("googleapis");
const scope = "https://www.googleapis.com/auth/calendar.readonly";
const FAIL = "calendar_invite_fail";
const SUCCESS = "calendar_invite_success";

module.exports = {
  get: (cohort) => {
    const calendar = google.calendar({ version: "v3", auth: res });
    calendar.calendarList.list(
      {
        scope: `${scope}/${cohort}`,
        minAccessRole: "reader",
      },
      (err, res) => {
        if (err) {
          console.log(err);
          resolve(FAIL);
        }
        resolve(SUCCESS);
      }
    );
  },
};
