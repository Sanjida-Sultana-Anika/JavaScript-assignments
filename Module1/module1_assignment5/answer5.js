let userInput = parseInt(prompt("Enter a year: "));

let leapYear = (userInput % 4 === 0 && userInput % 100 !== 0) || (userInput % 400 === 0);

document.write("<h2>" + userInput + " is " + (leapYear?"":"not ") + "a leap year!</h2>");
