const { add, subtract, multiply } = require('./calculator');

console.assert(add(2, 3) === 5, 'add failed');
console.assert(subtract(5, 2) === 3, 'subtract failed');
console.assert(multiply(3, 4) === 12, 'multiply failed');
console.log('All tests passed');