const fs = require('fs');

const data = fs.readFileSync('./Message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);