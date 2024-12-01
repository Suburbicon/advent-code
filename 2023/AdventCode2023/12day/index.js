const fs = require('node:fs')

let records;
try {
	let data = fs.readFileSync('./input.txt', 'utf-8')
	records = data.trim().split('\n')
	console.log(records)
} catch (err) {
	console.log(err)
}

records = [
	'???.### 1,1,3',
	'.??..??...?##. 1,1,3',
	'?#?#?#?#?#?#?#? 1,3,1,6',
	'????.#...#... 4,1,1',
	'????.######..#####. 1,6,5',
	'?###???????? 3,2,1'
]
let arrangement = 0;

function count() {
	
}

records.forEach(record => {
	let [springs, numbers] = record.split(' ')
	numbers = numbers.split(',').map(el => Number(el))
	console.log(springs, numbers)
	arrangement += count(springs, numbers)
})

console.log(arrangement)
