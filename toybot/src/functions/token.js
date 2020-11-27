'use strict';

module.exports.handler = async event => {
	
	const id = event.queryStringParameters;

	console.log(id);
  return {
    statusCode: 200,
    body: id
  };
};