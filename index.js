// run `node index.js` in the terminal

const command = require("nodemon/lib/config/command");
const yargs = require('yargs')

//console.log(`Hello Node.js v${process.versions.node}!`);

// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'the is my first nodejs coding ');
// fs.appendFileSync(
//   'notes.txt',
//   'and i would be able to finish the course on time'
// );
// const chalk = require('chalk');
// const validator = require('validator');
// const notes = require('./notes.js');

// const msg = chalk.bgBlueBright.black.inverse.bold('success');
// console.log(validator.isEmail('bala@gmail.com'))
// console.log(notes);
// console.log(msg);

// console.log(process.argv);
// const command1 = process.argv[2]

// if(command1 == 'bala'){
//     console.log('my name is '+command1);
// }

// console.log(yargs.argv)

yargs.command({
    command:'add',
    describe:'add the note',
    handler: function(){
        console.log('this is a add note function ')
    }
})
yargs.parse();
//console.log(yargs.argv);

//create remove command
yargs.command({
    command:'remove',
    describe:'remove the note',
    builder:{
        title: {
        describe:'removing the note',
        demandOption:true,
        //type:'string'
        }
    },
    handler: function (argv) {
        //console.log('remove the node  ', argv)
        console.log('title: '+argv.title)
    }
})

//console.log(yargs.argv);
yargs.parse();
