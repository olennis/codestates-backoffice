let db = require('../db');
// const { resolve } = require('path');

module.exports = {
	progress: {
		get: function (obj) {
			const queryStr = `
			SELECT u.id, u.name, list.toy_list, u.githubUserName, list.cnt
FROM user as u, (SELECT code_problem_submission.userId, GROUP_CONCAT(LEFT(code_problem.title, 2) ORDER BY code_problem.id) as toy_list, COUNT(code_problem.title) as cnt
FROM code_problem_submission, code_problem
WHERE code_problem_submission.codeProblemId = code_problem.id AND code_problem.classroomId = 5 AND code_problem_submission.isSubmitted = 1 
	AND code_problem_submission.userId IN (
		SELECT user.id
		FROM user, user_cohort
		WHERE user.id = user_cohort.userId AND user_cohort.cohortId = (SELECT id FROM cohort WHERE name= 'Full Immersive ${obj.cohort}기')
	)
Group by code_problem_submission.userId) as list
WHERE u.id = list.userid
ORDER BY ${obj.orderBy}
;

			`;

			return new Promise((resolve, reject) => {
				db.query(queryStr, (err, results) => {
					if (results) resolve(results);
					reject(err);
					// console.log(results);
				});
			});
		}
	},
	week: {
		get: function (obj) {
			const queryStr = `
			SELECT userlist.id, userlist.name, userlist.githubUserName, COUNT(userlist.id) as cnt
FROM (
	SELECT * 
	FROM user as u, user_cohort as uc
	WHERE u.id = uc.userId AND uc.cohortId = (
		SELECT id 
		FROM cohort
		WHERE name = 'Full Immersive ${obj.cohort}기'
	)
) as userlist
LEFT OUTER JOIN (
	SELECT *, COUNT(DATE(updatedAt)) as cnt
	FROM code_problem_submission_history
	WHERE codeProblemId IN (
		SELECT id
		FROM code_problem
		WHERE classroomId = 5 
	) AND DATE(updatedAt) BETWEEN '${obj.startDate}' AND '${obj.endDate}'
	GROUP BY userid, DATE(updatedAt)
) as history
ON userlist.id = history.userid
GROUP BY userlist.id
ORDER BY userlist.name;
			`;

			return new Promise((resolve, reject) => {
				db.query(queryStr, (err, results) => {
					if (results) resolve(results);
					reject(err);
					// console.log(results);
				});
			});
		}
	},

}