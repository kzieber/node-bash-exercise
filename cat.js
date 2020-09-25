const fs = require('fs');
const { isMainThread } = require('worker_threads');
const lsImport = require('./ls.js');
const done = require('./command.js');

//function takes files, stdout out for file matching
//input name
module.exports = function (catCMD) {
  const [cmd, fileName] = catCMD.split(' ');
  if (cmd === 'cat') {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) done(err);
      done(data);
    });
  }
};

// Your input should be a string containing the name of the command and the filename, separated by a space. You can split the string at the space to separate them.
