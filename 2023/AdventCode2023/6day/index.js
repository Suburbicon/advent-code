const fs = require('node:fs');

let times;
let distances;
try {
  const data = fs.readFileSync('./input.txt', 'utf-8');
	times = data.split('\n')[0].split(':')[1].trim().split(' ').filter(e => e).join('')
	distances = data.split('\n')[1].split(':')[1].trim().split(' ').filter(e => e).join('')
	console.log(times)
	console.log(distances)
} catch (err) {
  console.log(err)
}

// times = ['7', '15', '30']
// distances = ['9', '40', '200']
ways = []


// times.forEach((time, index) => {
// 	ways.push(countMillimeters(time, distances[index]))
// })
ways.push(countMillimeters(times, distances))
console.log(ways)
console.log(ways.reduce((acc, val) => {
	acc *= val
	return acc
},1))

function countMillimeters(time, distance) {
	let count = 0 
	let speed = 0
	let myTime = 0
	for (let sec = 1; sec <= time; sec++) {
		speed = sec
		myTime = time - sec
		if (myTime * speed > distance) {
			count += 1
		}
	}
	return count
}