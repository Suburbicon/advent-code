const fs = require('node:fs');

let games;
let data;
try {
  data = fs.readFileSync('./text.txt', 'utf-8');
	games = data.split('Game ')
	// console.log(data.split('Game '))
} catch (err) {
  console.log(err)
}

// games = [
// 	'1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
// 	'2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
// 	'3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
// 	'4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
// 	'5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
// ]

// const cubes = {
// 	red: 12,
// 	green: 13,
// 	blue: 14
// }

let result = 0;

games.forEach(game => {
	const gameID = game.split(':')[0] + '';
	const gameCubes = (game.split(':')[1] + '').replace('\n','');
	const splittedGameCubes = gameCubes.split(';');
	let gamePossible = true
	const cubes = {
		red: 0,
		green: 0,
		blue: 0
	}
	splittedGameCubes.forEach(el => {
		el.trim();
		let elCubes = el.split(',')
		elCubes.forEach(z => {
			const [cubeCount, cubeColor] = z.trim().split(' ')
			if (cubes[cubeColor] < Number(cubeCount)) {
				cubes[cubeColor] = cubeCount;
			}
		})
	});
	console.log(cubes)
	result += Object.values(cubes).reduce((acc,val) => {
		acc = acc * Number(val)
		return acc
	}, 1)
})

console.log(result)