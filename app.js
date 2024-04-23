//const add = require('./utils');
const sum = require('./utils')

const notes = require('./notes');

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
     notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command:'removeNote',
    describe:'remove a note',
    builder:{
        title:{
            describe:'removing a note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title);
    }
    
}    
)

//yargs list of the titles
yargs.command({
    command:'listNotes',
    describe:'this command will display list of the notes',    
    handler:function(){
        notes.listNotes();
    }
  }) 

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'reading a note',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.readNote(argv.title);
    }
    
})
yargs.parse();