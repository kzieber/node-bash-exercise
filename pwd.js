const done = require('./command.js');

module.exports = function (cmd) {
  if (cmd === 'pwd') {
    done(process.env.PWD);
  }
};
