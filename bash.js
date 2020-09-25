const pwdImport = require('./pwd.js'),
  lsImport = require('./ls.js'),
  catImport = require('./cat.js'),
  fs = require('fs'),
  done = require('./command.js'),
  curlImport = require('./curl.js');

process.stdout.write('prompt > ');
process.stdin.on('data', (data, usrInput) => {
  const cmd = data.toString().trim();
  const catCMD = `${data.toString().trim()} ${usrInput}`;
  const website = `${data.toString().trim()} ${usrInput}`;
  pwdImport(cmd);
  lsImport(cmd);
  catImport(catCMD);
  curlImport(website);
});
