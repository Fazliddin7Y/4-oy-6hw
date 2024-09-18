
const multiplicationTable = {};

for (let i = 1; i <= 10; i++) {
  multiplicationTable[i] = {};
  for (let j = 1; j <= 10; j++) {
    multiplicationTable[i][j] = i * j;
  }
}

function multiply(number) {
  if (number < 0 || number > 10) {
    console.log("Please enter a number between 0 and 10.");
    return;
  }
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${multiplicationTable[number][i]}`);
  }
}

let inputNumber = 7;
multiply(inputNumber);
