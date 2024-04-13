// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);

// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'the is my first nodejs coding ');
// fs.appendFileSync(
//   'notes.txt',
//   'and i would be able to finish the course on time'
// );
//const chalk = require('./node_modules/chalk/source/index.js');
import chalk from "chalk";
const notes = require('./notes.js');

const msg = chalk.green('success');
console.log(notes);
console.log(msg);
