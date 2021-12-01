const fs = require('fs');
const text = fs.readFileSync('./input.txt', 'utf-8');
const input = text.split('\n');
let count = 0;
input.forEach((item, index) => {
  if (index === input.length) {
    return;
  }
  const next = input[index + 1];
  if (+item < +next) {
    count += 1;
  }
});

console.log(count);
