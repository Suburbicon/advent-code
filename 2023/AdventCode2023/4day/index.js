const fs = require('node:fs');

let cards;
try {
  const data = fs.readFileSync('./input.txt', 'utf-8');
  cards = data.split('Card').map(el => {
		let t = el.replace('\n','').split(':')[1]?.trim()
		return t
	}).filter(el => el)
} catch (err) {
  console.log(err)
}

// cards = [
// 	'84 17 45 77 11 66 94 28 71 70 | 45 51 86 83 53 58 64 30 67 96 41 89  8 17 33 50 80 84  6  2 87 72 27 63 77',
// 	'18 17 59  8 78 79 34 35 48 73 | 61 49 59 99 77  8 79 64 36  6  3 67  4 90 83 22  9 82 39 78 92 42 33 70 17',
// 	'60 78 77 44 62 54 94 50 32 11 |  2  6 89 50 11 60 57 53 71 44 47 62 49 42 73 78 77 54 99 29 35 94 32 68 74',
// 	'74 19 54  9 79 24 21 88 53  7 | 21 30 53 62 74 79 54 19 45 67  7 80 16 24 89 38 71 41 88 47  5  9  4 73 97',
// 	'68 18 23 55  9 60 82 27 76 16 | 55 26 12 23 74  7 58 29 45 86  5  6 93 87 14  2 66 22 60 78 17  9 34 67 71',
// 	'53 11 94 57 45 24 20  1  8 92 | 29 66 16 45 48 98 61 49  8 56 94 28 19 67 24 20 97 57  1 75  5 85 35 82 12',
// 	'99 29 90 82 88 72 84 36 53 81 | 93 22  9 59 15 81 32 98 28 96 53  2 90 99 92 74 82 65 72 33 31  7  1 97 36',
// 	'71  3 88  1 35 32  2 59  8 92 | 33 59  2 87  1 80 93 76 71 98 10 17 32 89 85  8 35 16 92 19 46 49  3 54 88',
// 	'19 14 92 73 64 53 59 24 76 65 | 76 29 55 79 88 92 43 37 99  4 96 19 69 53  2 52 33  3 73 35 82  5 85 14 57',
// 	'39  3 43 61 53 40 89 16 60 12 | 47 44 63  1 67 26 55 12 20 68 78 92 56 32 74 76 22 42 71 88 33 11 94 18 89'
// ]

// cards = [
// 	'41 48 83 86 17 | 83 86  6 31 17  9 48 53',
// 	'13 32 20 16 61 | 61 30 68 82 17 32 24 19',
// 	'1 21 53 59 44 | 69 82 63 72 16 21 14  1',
// 	'41 92 73 84 69 | 59 84 76 51 58  5 54 83',
// 	'87 83 26 28 32 | 88 30 70 12 93 22 82 36',
// 	'31 18 13 56 72 | 74 77 10 23 35 67 36 11',
// ]

let result = 0;

const cardsIndex = {}
let count = 0

cards.forEach((card, i) => {
	let index = i + 1
	const wC = card.split(' | ')[0].split(' ')
	const myC = card.split(' | ')[1].split(' ')
	if (cardsIndex[index]) {
		cardsIndex[index] += 1
	} else {
		cardsIndex[index] = 1
	}
	count = index
	for(let i = 0; i < Number(cardsIndex[index]); i++) {
		myC.forEach(myCard => {
			if (myCard && wC.includes(myCard)) { 
				count += 1;
				if (cardsIndex[count]) {
					cardsIndex[count] += 1
				} else {
					cardsIndex[count] = 1
				}
			}
		})
		count = index
	}
})

console.log(Object.values(cardsIndex).reduce((acc, val) => {
	acc += val
	return acc
}, 0))
console.log(result)