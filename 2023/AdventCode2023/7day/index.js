const fs = require('node:fs');

let cards;
try {
  const data = fs.readFileSync('./input.txt', 'utf-8');
  cards = data.split('\n')
	// console.log(cards)
} catch (err) {
  console.log(err)
}

// const labels = ['A','K','Q','J','T','9','8','7','6','5','4','3','2']
const labels = ['A','K','Q','T','9','8','7','6','5','4','3','2','J']

const types = {
	fiveCard: [],
	fourCard: [],
	fullhouse: [],
	threeCard: [],
	twoPair: [],
	onePair: [],
	highCard: []
}

cards = [
	'32T3K 765', 'T55J5 684', 'KK677 28', 'KTJJT 220', 'QQQJA 483'
	// , 'KKK65 3' ,'AAAAA 10', 'AA8AA 5', '23332 1'
];

// cards = ['44324 1','Q27K6 2','TTT42 3', '99595 4', '74474 5', 'J5745 6', 'Q4444 7']

// cards = ['KK651 1', 'KK641 2', 'KK6T1 3']

cards.forEach((card, index) => {
	let [hands, point] = card.split(' ')
	const type = getTypeHands(hands)
	types[type].push(card)
})
console.log(types)
Object.entries(types).forEach(([nameType, valType]) => {
	valType.forEach((zoz, index) => {
		const [hands, point] = zoz.split(' ');
		for (let z = 0; z < valType.length - 1; z++) {
			for (let i = 0; i < 5; i++) {
				if (labels.indexOf(valType[z][i]) > labels.indexOf(valType[z+1][i])) {
					types[nameType].splice(z, 2, valType[z+1], valType[z])
					break;
				} else if (labels.indexOf(valType[z][i]) === labels.indexOf(valType[z+1][i])) {
					continue;
				} else {
					break;
				}
			}
			// console.log(types)
		}
	})
})

let result = 0;
let formatted = [];
console.log(types)
Object.values(types).forEach(el => formatted = [...el.reverse(),...formatted])
console.log(formatted)

formatted.forEach((el, index) => {
	const [hands, point] = el.split(' ')
	result += (index + 1) * point
})

console.log(result)

function getTypeHands(hands) {
	const tmp = {}
	let countJ = 0;
	hands.split('').forEach(hand => {
		if (hand === 'J') {
			countJ += 1
		}
		if (tmp[hand]) {
			tmp[hand] += 1
		} else {
			tmp[hand] = 1
		}
	})
	const countHands = Object.values(tmp)
	if (countHands.includes(5)) {
		return 'fiveCard';
	}
	if (countHands.includes(4)) {
		return 'fourCard'
	}
	if (countHands.includes(3) && countHands.includes(2)) {
		return 'fullhouse'
	}
	if (countHands.filter(el => el === 3).length === 1) {
		return 'threeCard'
	}
	if (countHands.filter(el => el === 2).length === 2) {
		return 'twoPair'
	}
	if (countHands.filter(el => el === 2).length === 1) {
		return 'onePair'
	}
	return 'highCard'
}