const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json');

console.log(dataBuffer); 
const dataJSON = dataBuffer.toString() //JSON.stringify(dataBuffer);
console.log(dataJSON)
const user = JSON.parse(dataJSON)
console.log(user)
user.name = 'bala';
user.age = 41

const userJSON = JSON.stringify(user)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON)