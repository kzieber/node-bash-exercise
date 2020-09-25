const pwdImport = require("./pwd.js");
const lsImport = require("./ls.js");
const catImport = require("./cat.js");
const fs = require("fs");

process.stdout.write("prompt > ");
process.stdin.on("data", (data, fileName) => {
  const cmd = data.toString().trim();
  const catCMD = `${data.toString().trim()} ${fileName}`;
  pwdImport(cmd);
  lsImport(cmd);
  catImport(catCMD);

  process.stdout.write("\nprompt > ");
});
