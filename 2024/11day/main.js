const fs = require('node:fs');

let initialStones;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  initialStones = data.split(' ');
  // console.log(initialStones);
} catch (err) {
  console.log(err)
}

let stones = [
  initialStones.map(Number) // [ 125, 17 ]
]

for (let i = 0; i < 75; i++) {
  let afterBlinkStones = []
  const currentStones = stones[i]
  for (let k = 0; k < currentStones.length; k++) {
    if (currentStones[k] === 0) {
      afterBlinkStones.push(1)
    } else if (currentStones[k].toString().length % 2 === 0) {
      afterBlinkStones.push(Number(currentStones[k].toString().slice(0, currentStones[k].toString().length / 2)))
      afterBlinkStones.push(Number(currentStones[k].toString().slice(currentStones[k].toString().length / 2), currentStones[k].toString().length))
    } else {
      afterBlinkStones.push(currentStones[k] * 2024)
    }
  }
  stones.push(afterBlinkStones)
}

console.log(stones[stones.length - 1].length)