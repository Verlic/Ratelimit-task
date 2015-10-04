var GitHubApi = require('github@0.2.4'),
	github = new GitHubApi({
		version: "3.0.0",
		debug: true,
		protocol: "https",
		host: "api.github.com",
		pathPrefix: "",
		timeout: 5000,
		headers: {
			"user-agent": "RateLimit-Webtask"
		}
	});


module.exports = function (context, callback) {
	var accessToken = context.data.ACCESS_TOKEN;

	if (!accessToken) {
		callback('Access token not found. Please specify a GitHub token when initializing this Webtask.');
	} else {
		github.authenticate({
			type: 'oauth',
			token: accessToken
		});
		
		github.misc.rateLimit({}, function(error, data){
			if (error){
				callback(error);
			}else{
				callback(null, data);
			}
		});
	}
};