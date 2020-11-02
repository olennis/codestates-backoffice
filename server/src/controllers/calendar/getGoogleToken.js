require("dotenv").config();
const axios = require("axios");

module.exports = {
	getGoogleToken: async () => {
		try{
			const token = await axios.post(
        'https://oauth2.googleapis.com/token',
        {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            redirect_uri: process.env.REDIRECT_URI,
						grant_type: process.env.GRANT_TYPE,
						code:"4/P7q7W91a-oMsCeLvIaQm6bTrgtp7&"
        }
		);
		console.log(token);
		return token;
		} catch (err){
			console.log(err.message);
		}
	}
}