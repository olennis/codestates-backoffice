'use strict';

module.exports.hello = async event => {
  console.log(event);
  return {
    statusCode: 200,
    body: '이제 돌아가네요'
  };
};
