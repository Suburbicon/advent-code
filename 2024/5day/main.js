const fs = require('node:fs');

let rules, orders;
try {
  const data = fs.readFileSync('./data.txt', 'utf-8');
  [rules, orders] = data.split('\n\n');
  rules = rules.split('\n');
  orders = orders.split('\n')
  // console.log(rules, '\n', orders);
} catch (err) {
  console.log(err);
}

const checkedNumbers = {

}
let validOrder = true;
let invalidOrder = false;
let result = 0

for (let i = 0; i < orders.length; i++) {
  let splittedOrders = orders[i].split(',')
  for (let k = 0; k < splittedOrders.length; k++) {
    if (!checkedNumbers[splittedOrders[k]]) {
      checkedNumbers[splittedOrders[k]] = [Number(splittedOrders[k])]
      for (let p = 0; p < rules.length; p++) {
        const [num1, num2] = rules[p].split('|');
        if (Number(num1) === Number(splittedOrders[k])) {
          checkedNumbers[splittedOrders[k]].push(Number(num2))
        } 
      }
      // console.log('UPDATED CHACKED NUMBER', checkedNumbers)
    }
  }
}

for (let i = 0; i < orders.length; i++) {
  // validOrder = true;
  invalidOrder = false
  let splittedOrders = orders[i].split(',')
  for (let k = 0; k < splittedOrders.length; k++) {
    // if (!checkedNumbers[splittedOrders[k]]) {
    //   checkedNumbers[splittedOrders[k]] = [Number(splittedOrders[k])]
    //   for (let p = 0; p < rules.length; p++) {
    //     const [num1, num2] = rules[p].split('|');
    //     if (Number(num1) === Number(splittedOrders[k])) {
    //       checkedNumbers[splittedOrders[k]].push(Number(num2))
    //     } 
    //   }
    //   // console.log('UPDATED CHACKED NUMBER', checkedNumbers)
    // }
    // console.log(checkedNumbers)
    for (let y = k; y < splittedOrders.length; y++) {
      if (!checkedNumbers[splittedOrders[k]].includes(Number(splittedOrders[y]))) {
        invalidOrder = true
        // console.log('STOP', checkedNumbers[splittedOrders[k]], splittedOrders, splittedOrders[k], splittedOrders[y])
        let temp = splittedOrders[k]
        splittedOrders[k] = splittedOrders[y]
        splittedOrders[y] = temp
      }
    }
  }
  // console.log(splittedOrders)

  // if (validOrder) {
  //   console.log('VALID', splittedOrders)
  //   result += Number(splittedOrders[Math.floor(splittedOrders.length / 2)])
  // }
  if (invalidOrder) {
    result += Number(splittedOrders[Math.floor(splittedOrders.length / 2)])
  }
}
console.log(checkedNumbers)
console.log(result)