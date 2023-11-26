let numbers = [];

let individualNumber = parseInt(prompt(`Enter number or 0 to stop! : `));
while (individualNumber !== 0) {
  numbers.push(individualNumber);
  individualNumber = parseInt(prompt(`Again enter number or 0 to stop! : `));
}

numbers.sort((a, b) => b - a);

document.write("<h2>>>> See Console </h2>");
console.log("Number List (Large to Small):");
for (let i=0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
