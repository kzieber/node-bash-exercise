function done(output) {
  process.stdout.write('\n');
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}

module.exports = done;
