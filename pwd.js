// function pwd(cmd) {
//   if (cmd === "pwd") {
//     process.stdout.write(process.env.PWD);
//   }
// }

// function pwd(cmd) {
//   process.stdout.write("prompt > ");
//   process.stdin.on("data", (data) => {
//     const cmd = data.toString().trim();
//     if (cmd === "pwd") {
//       process.stdout.write(process.env.PWD);
//     }
//     process.stdout.write("\nprompt > ");
//   });
// }

module.exports = function (cmd) {
  if (cmd === "pwd") {
    process.stdout.write(process.env.PWD);
  }
};
