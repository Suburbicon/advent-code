const fs = require('node:fs');

let grid;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  grid = data.split('\n');
  // console.log(grid);
} catch (err) {
  console.log(err)
}


function countXMAS(grid) {
	const rows = grid.length;
	const cols = grid[0].length;
	const patterns = ["MAS", "SAM"]; // Both forwards and backwards versions of "MAS"
	let count = 0;

	// Check for the X-MAS pattern centered at (centerRow, centerCol)
	function isXMAS(centerRow, centerCol) {
			// Top-left to bottom-right diagonal
			const topLeft = grid[centerRow - 1]?.[centerCol - 1] || "";
			const bottomRight = grid[centerRow + 1]?.[centerCol + 1] || "";

			// Top-right to bottom-left diagonal
			const topRight = grid[centerRow - 1]?.[centerCol + 1] || "";
			const bottomLeft = grid[centerRow + 1]?.[centerCol - 1] || "";

			// Construct both diagonals
			const diagonal1 = topLeft + grid[centerRow][centerCol] + bottomRight;
			const diagonal2 = topRight + grid[centerRow][centerCol] + bottomLeft;

			// Check if both diagonals form an "X-MAS"
			return patterns.includes(diagonal1) && patterns.includes(diagonal2);
	}

	// Iterate over the grid, treating each cell as the center of a potential "X-MAS"
	for (let row = 1; row < rows - 1; row++) {
			for (let col = 1; col < cols - 1; col++) {
					if (isXMAS(row, col)) {
							count++;
					}
			}
	}

	return count;
}

// Example grid input
// const grid = [
// 	"MMMSXXMASM",
// 	"MSAMXMSMSA",
// 	"AMXSXMAAMM",
// 	"MSAMASMSMX",
// 	"XMASAMXAMM",
// 	"XXAMMXXAMA",
// 	"SMSMSASXSS",
// 	"SAXAMASAAA",
// 	"MAMMMXMMMM",
// 	"MXMXAXMASX"
// ];

// Convert the grid to a 2D array of characters
const gridArray = grid.map(row => row.split(""));

// Output the count of "X-MAS" patterns
console.log(`Occurrences of "X-MAS":`, countXMAS(gridArray));