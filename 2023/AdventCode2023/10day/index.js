const fs = require('node:fs');

let pipes;
try {
	const data = fs.readFileSync('./input.txt', 'utf-8')
	pipes = data.trim().split('\n')
	console.log(pipes)
} catch (err) {
	console.log(eer)
}

// | is a vertical pipe connecting north and south.
// - is a horizontal pipe connecting east and west.
// L is a 90-degree bend connecting north and east.
// J is a 90-degree bend connecting north and west.
// 7 is a 90-degree bend connecting south and west.
// F is a 90-degree bend connecting south and east.
// . is ground; there is no pipe in this tile.

pipes = [
	'..F7.',
	'.FJ|.',
	'SJ.L7',
	'|F--J',
	'LJ...'
]

let sr;
let sc; 

for (let i = 0; i < pipes.length; i++) {
	for (let z = 0; z < pipes[i].length; z++) {
		if (pipes[i][z] === 'S') {
			sr = i;
			sc = z;
			break
		} 
	}
}
console.log(sr, sc)