const fs = require('node:fs');

let directions;
let nodes;
try {
  const data = fs.readFileSync('./input.txt', 'utf-8');
	[directions, ...nodes] = data.split('\n')
	nodes = nodes.splice(1)
} catch (err) {
  console.log(err)
}

// directions = 'RL'
// nodes = [
// 	'AAA = (BBB, CCC)',
// 	'BBB = (DDD, EEE)',
// 	'CCC = (ZZZ, GGG)',
// 	'DDD = (DDD, DDD)',
// 	'EEE = (EEE, EEE)',
// 	'GGG = (GGG, GGG)',
// 	'ZZZ = (ZZZ, ZZZ)'
// ]

// directions = 'LLR'
// nodes = [
// 	'AAA = (BBB, BBB)',
// 	'BBB = (AAA, ZZZ)',
// 	'ZZZ = (ZZZ, ZZZ)'
// ]

// directions = 'LR'
// nodes = [
// 	'11A = (11B, XXX)',
// 	'11B = (XXX, 11Z)',
// 	'11Z = (11B, XXX)',
// 	'22A = (22B, XXX)',
// 	'22B = (22C, 22C)',
// 	'22C = (22Z, 22Z)',
// 	'22Z = (22B, 22B)',
// 	'XXX = (XXX, XXX)'
// ]

let steps = 0;
let endNode = ''
let time = performance.now();
nodes = formatNodes(nodes)
// console.log(nodes)


let i = 0;
let currentNodes = Object.keys(nodes).filter(node => node[2] === 'A');

while(!currentNodes.every(node => node[2] === 'Z')) {	
	directions.split('').forEach(dir => {
		currentNodes = currentNodes.map(node => {
			node = nodes[node][dir]
			return node
		})
		// console.log(currentNodes)
		steps += 1
	})
}
// console.log(currentNodes)
console.log(steps)
time = performance.now() - time
console.log(time)



function formatNodes(nodes) {
	return nodes.reduce((acc, val) => {
		const [key, value] = val.split(' = ')
		if (!acc[key]) {
			acc[key] = {
				L: value.slice(1,4),
				R: value.slice(6,9)
			}
		}
		return acc
	}, {})
}