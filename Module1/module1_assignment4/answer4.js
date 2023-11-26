let studentName = prompt("Enter your name please: ");
let randomNumber =Math.floor(Math.random() * 4) + 1;

let house;
if(randomNumber === 1){
  house="Gryffindor";
} else if(randomNumber === 2){
  house="Slytherin";
} else if(randomNumber === 3){
  house="Hufflepuff";
} else if(randomNumber === 4){
  house="Ravenclaw";
} else {
  house = "Error";
}

document.write("<h2>" + studentName + " you are in " + house + "!</h2>");
