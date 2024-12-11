const fs = require('node:fs');

let grid;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  grid = data.split('\n');
  // console.log(grid);
} catch (err) {
  console.log(err)
}


function countOccurrences(grid, word) {
  const rows = grid.length;
  const cols = grid[0].length;
  const wordLength = word.length;
  let count = 0;

  // Directions: [row offset, col offset]
  const directions = [
      [0, 1],   // Right
      [0, -1],  // Left
      [1, 0],   // Down
      [-1, 0],  // Up
      [1, 1],   // Down-right
      [-1, -1], // Up-left
      [1, -1],  // Down-left
      [-1, 1]   // Up-right
  ];

  // Helper function to check if the word exists in a specific direction
  function isWordAt(row, col, dirRow, dirCol) {
      for (let i = 0; i < wordLength; i++) {
          const newRow = row + i * dirRow;
          const newCol = col + i * dirCol;

          // Check boundaries and character match
          if (
              newRow < 0 || newRow >= rows ||
              newCol < 0 || newCol >= cols ||
              grid[newRow][newCol] !== word[i]
          ) {
              return false;
          }
      }
      return true;
  }

  // Loop through every cell in the grid
  for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
          // Check all 8 directions from this cell
          for (const [dirRow, dirCol] of directions) {
              if (isWordAt(row, col, dirRow, dirCol)) {
                  count++;
              }
          }
      }
  }

  return count;
}

const word = "XMAS";
console.log(`Occurrences of "${word}":`, countOccurrences(grid.map(row => row.split('')), word));