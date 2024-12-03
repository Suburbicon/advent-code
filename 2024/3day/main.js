const fs = require('node:fs');

let inputData;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  inputData = data.split('\n').join('');
  // console.log(inputData);
} catch (err) {
  console.log(err)
}

let enable = 'do()'
let enableCount = 0
let disable = 'don\'t()'
let disableCount = 0
let mode = 'enable'

let example = 'mul('
let count = 0
let result = 0

for (let i = 0; i < inputData.length; i++) {
  if (inputData[i] === enable[enableCount]) {
    enableCount += 1
    if (enableCount === 4) {
      mode = 'enable'
    }
  } else {
    enableCount = 0
  }

  if (inputData[i] === disable[disableCount]) {
    disableCount += 1
    if (disableCount === 7) {
      mode = 'disable'
    }
  } else {
    disableCount = 0
  }


  if (inputData[i] === example[count]) {
    count += 1
  } else {
    if (count === 4 && mode === 'enable') {
      let num1 = ''
      let num2 = ''
      while (typeof Number(inputData[i]) === 'number' && !isNaN(Number(inputData[i]))) {
        // console.log(i, inputData[i], typeof Number(inputData[i]))
        num1 += inputData[i]
        i += 1
      }
      if (inputData[i] === ',') {
        i += 1 // pointer to number
        while (typeof Number(inputData[i]) === 'number' && !isNaN(Number(inputData[i]))) {
          num2 += inputData[i]
          i += 1
        }
      }
      if (inputData[i] === ')') {
        let mul = Number(num1) * Number(num2)
        result += mul
      }
      num1 = ''
      num2 = ''
      count = 0
    } else {
      count = 0
    } 
  }
}

console.log(result)
