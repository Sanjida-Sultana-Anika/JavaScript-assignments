let number = [];

for (let i=0; i<5; i++) {
  let num = parseFloat(prompt(`Enter your number ${i+1} please: `));
  number.push(num);
}

document.write("<p>Numbers in reverse order: </p>");
for (let i = number.length - 1; i >= 0; i--) {
  document.write("<p>" + number[i] + "</p>");
}