const fs = require('node:fs');

let grid;
try {
	const data = fs.readFileSync('./input.txt', 'utf-8')
	grid = data.split('\n')
} catch (err) {
	console.log(eer)
}

let emptyRows = [];
grid.forEach((r, index) => {
	if (r.split('').every(el => el === '.')) {
		emptyRows.push(index)
	}
})
let emptyCols = grid.reduce((acc, col, c) => {
  if (grid.every(row => row[c] === ".")) {
    acc.push(c);
  }
  return acc;
}, []);

let points = grid.reduce((acc, row, rId) => {
	row.split('').forEach((c, cId) => {
		if (c === '#') {
			acc.push([rId, cId])
		}
	})
	return acc
},[])

total = 0
scale = 2


points.forEach(([r1,c1], i) => {
	points.slice(i).forEach(([r2,c2]) => {
		
	})
})


console.log(points)