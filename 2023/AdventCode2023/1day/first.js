const fs = require('node:fs');

function getDigit(word) {
  switch(word) {
    case 'one': return 1
    case 'two': return 2
    case 'three': return 3
    case 'four': return 4
    case 'five': return 5
    case 'six': return 6
    case 'seven': return 7
    case 'eight': return 8
    case 'nine': return 9
    default: return parseInt(word)
  }
}

let words;
try {
  const data = fs.readFileSync('./text.txt', 'utf-8');
  words = data.split('\n')
  // console.log(data.split(' '))
} catch (err) {
  console.log(err)
}



words = [
  'two1nine',
  'eightwothree',
  'abcone2threexyz',
  'xtwone3four',
  '4nineeightseven2',
  'zoneight234',
  '7pqrstsixteen'
];

const partOne = /\d/g
const partTwo = /\d|one|two|three|four|five|six|seven|eight|nine/g
function solve(input, rx) {
  return input.reduce((sum, line) => {
    const first = line.match(rx)[0];
    const last = line.match(rx).reverse()[0];
    const t = getDigit(first) + '' + getDigit(last);
    return sum + (getDigit(first) * 10 + getDigit(last));
  }, 0)
}

console.log(solve(words, partTwo))


