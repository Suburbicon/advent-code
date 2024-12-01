const fs = require('node:fs');

let sequences = [];
try {
  const data = fs.readFileSync('./input.txt', 'utf-8');
	sequences = data.split('\n')
	// console.log(sequences)
} catch (err) {
  console.log(err)
}

// sequences = [
	// '0 3 6 9 12 15',
	// '1 3 6 10 15 21',
	// '10 13 16 21 30 45'
// ];

/*
	[
		'0 3 6 9 12 15',
		' 3 3 3 3  3 ',
		'  0 0 0  0
	]
*/

let result = 0;
// PART 1
// sequences.forEach(sequence => {
// 	let tmp = []
// 	tmp.push(sequence)
// 	for (let i = 0; i < tmp.length; i++) {
// 		let seq = '';
// 		for (let z = 0; z < tmp[i].split(' ').length - 1; z++) {
// 			seq += (Number(tmp[i].split(' ')[z+1]) - Number(tmp[i].split(' ')[z])) + ' '
// 		}
// 		tmp.push(seq.trim())
// 		if (seq.trim().split(' ').every(el => el === '0')) {
// 			break;
// 		}
// 	}
// 	console.log(tmp)
// 	tmp = tmp.reverse();
// 	for(let i = 0; i < tmp.length - 1; i++) {
// 		tmp[0] += ' 0'
// 		tmp[i+1] = tmp[i+1].split(' ')
// 		tmp[i] = tmp[i].split(' ')
// 		tmp[i+1][tmp[i+1].length - 1] = Number(tmp[i+1][tmp[i+1].length - 1]) + Number(tmp[i][tmp[i].length - 1]) + ''
// 		tmp[i+1] = tmp[i+1].join(' ')
// 		tmp[i] = tmp[i].join(' ')
// 	}
// 	result += Number(tmp[tmp.length - 1].split(' ')[tmp[tmp.length - 1].split(' ').length - 1])
// 	console.log(tmp)
// })

// PART 2
sequences.forEach(sequence => {
	let tmp = []
	tmp.push(sequence)
	for (let i = 0; i < tmp.length; i++) {
		let seq = '';
		for (let z = 0; z < tmp[i].split(' ').length - 1; z++) {
			seq += (Number(tmp[i].split(' ')[z+1]) - Number(tmp[i].split(' ')[z])) + ' '
		}
		tmp.push(seq.trim())
		if (seq.trim().split(' ').every(el => el === '0')) {
			break;
		}
	}
	tmp = tmp.reverse();
	for(let i = 0; i < tmp.length - 1; i++) {
		tmp[0] += ' 0'
		tmp[i+1] = tmp[i+1].split(' ')
		tmp[i] = tmp[i].split(' ')
		tmp[i+1].unshift(Number(tmp[i+1][0]) - Number(tmp[i][0]) + '')
		tmp[i+1] = tmp[i+1].join(' ')
		tmp[i] = tmp[i].join(' ')
	}
	result += Number(tmp[tmp.length - 1].split(' ')[0])
})

console.log(result)