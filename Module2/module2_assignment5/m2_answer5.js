let numbers = [];

while (true) {
  let individualNumber = parseInt(prompt(`Enter number: `));

  if (numbers.includes(individualNumber)) {
      console.log("The number has already been given. Operation stopped....")
      break;
  }

  numbers.push(individualNumber);
}

numbers.sort((a, b) => a - b);
console.log("Numbers in Ascending Order: ");

document.write("<h2>>>> See Console </h2>");

for (let i = 0; i < numbers.length;i++){
  console.log(numbers[i]);
}
