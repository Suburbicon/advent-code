const fs = require('node:fs');

let inputData;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  inputData = data.split('\n');
  // console.log(data);
} catch (err) {
  console.log(err)
}

let resultSum = 0
const leftCol = []
const rightCol = []

for (let i = 0; i < inputData.length; i++) {
	const [leftS, rightS] = inputData[i].split('   ');
	// console.log(leftS, rightS);
	leftCol.push(Number(leftS))
	rightCol.push(Number(rightS))
}

// PART ONE (1)
// leftCol.sort((a,b) => a - b)
// rightCol.sort((a,b) => a - b)

// for (let i = 0; i < leftCol.length; i++) {
// 	resultSum += Math.abs(leftCol[i] - rightCol[i])
// }


// PART TWO (2)
for (let i = 0; i < leftCol.length; i++) {
	let hit = rightCol.reduce((acc, val) => {
		if (val === leftCol[i]) {
			acc += 1
		}
		return acc
	}, 0)
	resultSum += leftCol[i] * hit
}

console.log(resultSum)