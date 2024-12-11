const fs = require('node:fs');

let inputData;
let test;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  inputData = data.split('\n');
  console.log(inputData);
} catch (err) {
  console.log(err)
}

let x = 0
let y = 0
const countRows = inputData.length
const countCols = inputData[0].length
test = inputData.map(el => el.split(''))
// let indexGuard = [0,0]
let result = 0

for (let i = 0; i < countRows; i++) {
  for (let t = 0; t < countCols; t++) {
    if (inputData[i][t] === '^') {
      x = i
      y = t
      // indexGuard = [i, t]
    }
  }
}



let direction = 'up'
let res = 0
console.log(x,y)

try {
  while (x < countRows && y < countCols && x > 0 && y > 0) {

    if (direction === 'up') {
      while (inputData[x][y] !== '#' && x > 0) {
        x -= 1
        
        if (inputData[x][y] === '#') {
          x += 1
          break
        }
        result += 1
        test[x][y] = 'X'
      }
  
      direction = 'right'
    }
    else if (direction === 'right') {
      while (inputData[x][y] !== '#' && y < countCols) {
        y += 1
  
        if (inputData[x][y] === '#') {
          y -= 1
          break
        }
        result += 1
        test[x][y] = 'X'
      }
      direction = 'down'
    }
    else if (direction === 'down') {
      while (inputData[x][y] !== '#' && x < countRows) {
        x += 1
  
        if (inputData[x][y] === '#') {
          x -= 1
          break
        }
        result += 1
        test[x][y] = 'X'
      }
      direction = 'left'
    }
    else if (direction === 'left') {
      while (inputData[x][y] !== '#' && y > 0) {
        y -= 1
  
        if (inputData[x][y] === '#') {
          y += 1
          break
        }
        result += 1
        test[x][y] = 'X'
      }
      direction = 'up'
    }
    console.log('x:', x, 'y: ', y, direction)
  }
  console.log(direction, result, x , y)
} catch {
  // console.log(result)  
}

test.forEach(el => {
  el.forEach(l => {
    if (l === 'X') {
      res += 1
    }
  })
})

console.log(res)
// console.log(test.map(el => el.join('')))