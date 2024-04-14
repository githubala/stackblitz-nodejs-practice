//const add = require('./utils');
const sum = require('./utils')

//console.log(sum(3,4));

const yargs = require('yargs')

yargs.command({
    command:'add',
    describe:'add the node',
    builder:{
        title: {
           describe:'adding title of the note' ,
           demandOption:true,
           type:'string'
        },
        body: {
            describe:'adding body of the note',
           demandOption:false,
           type:'string'
        }
    },
    handler:function(argv){
     console.log('adding the node', argv);
    }
})

yargs.parse();