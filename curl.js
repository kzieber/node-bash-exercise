const request = require('request');
const done = require('./command.js');

module.exports = function (usrInput) {
  const [cmd, website] = usrInput.split(' ');
  if (cmd === 'curl') {
    request(website, function (error, response, body) {
      if (error) {
        console.log(error);
      } else {
        console.log('body:', body);
      }
    });
  }
};
