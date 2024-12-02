const fs = require('node:fs');

let inputData;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  inputData = data.split('\n');
  // console.log(inputData);
} catch (err) {
  console.log(err)
}

let safeReports = 0;

for (let i = 0; i < inputData.length; i++) {
	const levels = inputData[i].split(' ');
	let gradually = Number(levels[0]) > Number(levels[1]) ? 'decreasing' : 'increasing'
	let count = 0
	for (let y = 1; y < levels.length; y++) {
		// console.log(levels[y], levels)
		if (gradually === 'decreasing') {
			if (Number(levels[y]) < Number(levels[y - 1])) {
				const num = Number(levels[y - 1]) - Number(levels[y])
				if (num >= 1 && num <= 3) {
					count += 1
				}
			}
		}
		// 1 3 2 4 5
		// 1 3 8 4 5
		if (gradually === 'increasing') {
			// console.log('compare', Number(levels[y]), Number(levels[y - 1]), y)
			if (Number(levels[y]) > Number(levels[y - 1])) {
				const num = Number(levels[y]) - Number(levels[y - 1])
				if (num >= 1 && num <= 3) {
					count += 1
				} 
			}
		}
	}
	
	if (count === levels.length - 1) {
		safeReports += 1
	} else {
		// [12 10 13 14 16 19]
		for (let t = 0; t < levels.length; t++) {
			const tempLevels = [...levels]
			tempLevels.splice(t, 1)
			// console.log(tempLevels)
			let gradually = Number(tempLevels[0]) > Number(tempLevels[1]) ? 'decreasing' : 'increasing'
			count = 0
			for (let y = 1; y < tempLevels.length; y++) {
				if (gradually === 'decreasing') {
					if (Number(tempLevels[y]) < Number(tempLevels[y - 1])) {
						const num = Number(tempLevels[y - 1]) - Number(tempLevels[y])
						if (num >= 1 && num <= 3) {
							count += 1
						}
					}
				}
				if (gradually === 'increasing') {
					if (Number(tempLevels[y]) > Number(tempLevels[y - 1])) {
						const num = Number(tempLevels[y]) - Number(tempLevels[y - 1])
						if (num >= 1 && num <= 3) {
							count += 1
						} 
					}
				}
			}

			if (count === tempLevels.length - 1) {
				safeReports += 1
				// console.log(tempLevels)
				break;
			} else {
				// console.log('COUNT', count, tempLevels)
			}
		}
	}
}

console.log(safeReports)