const fs = require('node:fs');

let inputData;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  inputData = data.split('\n');
  console.log(inputData);
} catch (err) {
  console.log(err)
}
