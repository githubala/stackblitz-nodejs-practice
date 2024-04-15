const fs = require('fs')

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
} else {
  console.log('title already exists')
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote
}
