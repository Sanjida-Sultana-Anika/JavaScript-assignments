function diceRoll(no_of_sides) {
  return Math.floor(Math.random() * no_of_sides) + 1;
}

let sides = parseInt(prompt("Enter side no. of your dice: "));

let rolls = [];
let result = diceRoll(sides);

while (result !== sides) {
  rolls.push(result);
  result = diceRoll(sides);
}

document.write("<h2>Total dice rolls:</h2>");
document.write("<ul>");
for (let i=0; i <rolls.length; i++) {
  document.write("<li>" + rolls[i] + "</li>");
}
document.write("</ul>");
