const { google } = require("googleapis");

const FAIL = "calendar_kick_fail";
const SUCCESS = "calendar_kick_success";

const getCalendarId = require('./calendarList');
const getAuth = require("./getTk");

module.exports = {
  post: (userData) => {
    return new Promise((resolve, reject) => {
      getCalendarId.get(userData.log.split(",")[1])
        .then(cohortId => {
          if(cohortId.message) {resolve(cohortId.message);}
          console.log('kick' + userData.log.split(",")[1]);
          console.log(cohortId, userData.email);

          getAuth.get().then((res) => {
            const calendar = google.calendar({ version: "v3", auth: res }); //토큰!!!

            calendar.acl.delete(
              {
                calendarId: cohortId,
                ruleId: `user:${userData.email}`,
              },
              (err, res) => {
                if (err) {
                  console.log(err);
                  resolve(FAIL);
                }
                resolve(SUCCESS);
              }
            );
            resolve(SUCCESS); //test 코드 꼭 삭제!
          });
        })
    });
  },
};
