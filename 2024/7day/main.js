const fs = require('node:fs');

let inputData;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  inputData = data.split('\n');
  console.log(inputData);
} catch (err) {
  console.log(err)
}

let total = 0

for (let line of inputData) {
  const [testValue, numbersStr] = line.split(': ')
  const target = parseInt(testValue, 10)
  const numbers = numbersStr.trim().split(' ').map(Number)
  const numbersCount = numbers.length

  if (numbersCount === 1) continue
  
  const operators = ['+', '*', '|']
  const operatorCombinations = generateOperatorCombinations(numbersCount - 1, operators)

  for (const comb of operatorCombinations) {
    const result = evaluateLeftToRight(numbers, comb)
    if (result === target) {
      total += target
      break
    }
  }
}

console.log(total)

function generateOperatorCombinations(len, operators) {
  if (len === 0) return ['']

  const smallerCombinations = generateOperatorCombinations(len - 1, operators)
  const combinations = []
  for (const op of operators) {
    for (const smaller of smallerCombinations) {
      combinations.push(op + smaller)
    }
  }
  return combinations
}

function evaluateLeftToRight(numbers, operators) {
  let num = numbers[0]
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === '+') {
      num += numbers[i+1]
    } else if (operators[i] === '*') {
      num *= numbers[i+1]
    } else if (operators[i] === '|') {
      num = num.toString()
      num += numbers[i+1].toString()
      num = parseInt(num, 10)
    }
  }

  return num
}