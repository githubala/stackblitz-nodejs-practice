const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json');

console.log(dataBuffer); 
const dataJSON = dataBuffer.toString() //JSON.stringify(dataBuffer);
//to convert buffer data into object we have used toString in the above line
//since after reading the file using readFileSync we gets data like 7b 22 32 45 4r we have to use the
//toString function
console.log(dataJSON)
const user = JSON.parse(dataJSON)
console.log(user)
user.name = 'bala';
user.age = 41

const userJSON = JSON.stringify(user)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON)