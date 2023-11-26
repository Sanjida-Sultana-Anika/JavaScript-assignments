function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

let rolls = [];
let result = diceRoll();

while (result !== 6) {
  rolls.push(result);
  result = diceRoll();
}
rolls.push(result);

document.write("<h2>Total dice rolls:</h2>");
document.write("<ul>");
for (let i=0; i <rolls.length; i++) {
  document.write("<li>" + rolls[i] + "</li>");
}
document.write("</ul>");
