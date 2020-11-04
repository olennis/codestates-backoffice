const db = require('../db');

module.exports = {
	userdata: {
		get: (cohort, username) => {
			const queryStr = `
			SELECT u.id, u.name, u.email, u.githubUserName, u.googleId, 
			GROUP_CONCAT(
				DISTINCT uch.name 
				ORDER BY uch.startDate DESC
			) as log
			FROM user_cohort_history as uch, user as u
			WHERE uch.userId = u.id AND userId IN (
				SELECT u.id
				FROM user as u, user_cohort as uc, cohort as c
				WHERE uc.cohortId = c.id AND u.id = uc.userId 
				AND c.id = (
					SELECT cohort.id FROM cohort 
					WHERE cohort.name = 'Full Immersive ${cohort}기') 
					AND u.name = '${username}'
			)
			GROUP BY uch.userId
			`

			return new Promise((resolve, reject) => {
				db.query(queryStr, (err, result) => {
					if (err) reject(err);
					if (result.length === 1) resolve(result[0]);
					if (result.length < 1) resolve({
						name: username,
						message: `${username}이 Full Immersive ${cohort}기에 없습니다`
					});
					if (result.length > 1) resolve({
						name: username,
						message: `${username}이 Full Immersive ${cohort}기에 두 명 이상입니다`
					});
				});
			});
		}
	}
}