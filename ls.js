const fs = require('fs');
const done = require('./command.js');

// module.exports = function (cmd) {
//   if (cmd === "pwd") {
//     process.stdout.write(process.env.PWD);
//   }
// };
module.exports = function (cmd) {
  if (cmd === 'ls') {
    fs.readdir('./', 'utf8', (err, files) => {
      if (err) {
        done(err);
      } else {
        done(files.join('\n'));
      }
    });
  }
};
