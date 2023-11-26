let numberOfParticipants = parseInt(prompt("Enter number of participants: "));

let allNames = [];

for (let i= 0; i < numberOfParticipants; i++) {
  let individualName = prompt(`Enter name of participants ${i + 1}:`);
  allNames.push(individualName);
}
allNames.sort();
document.write("<h2>List of participants</h2>");
document.write("<ol>");
for (let i=0; i < allNames.length; i++) {
  document.write('<li>' + allNames[i] + '</li>');
}
document.write("</ol>");
