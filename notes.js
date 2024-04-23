const chalk = require('chalk');
const fs = require('fs');
const yargs = require('yargs');

const getNotes = function () {
  return 'your notes ...';
};

const addNote = function(title, body){

  const notes = loadNotes()
const Duplicate = notes.filter(function(note){
return note.title === title;
})
if(Duplicate.length === 0){
  notes.push({
    title:title,
    body:body
  })
  
  saveNotes(notes)
  console.log(chalk.green.inverse('add new unique title'))

} else {
  console.log(chalk.red.inverse('title already exists'));
}
}

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function(){
  try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
  } catch(e){
    return []
  }
}
//yargs remove method
const removeNote = function(title){
  const notes = loadNotes()
  const notesToKeep = notes.filter(function(note){
    return note.title !== title
  })
  saveNotes(notesToKeep)
}

//yargs list of notes
const listNotes = function(){
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(note.title);
  });
}



module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote:removeNote,
  listNotes:listNotes
}
