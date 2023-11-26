let allNames = [];

for (let i= 0; i < 6; i++) {
  let individualName = prompt(`Enter name of dog ${i + 1}:`);
  allNames.push(individualName);
}

allNames.sort();
allNames.reverse();

document.write("<h2>Dog Name List: </h2>");
document.write("<ul>");
for (let i=0; i < 6; i++) {
  document.write('<li>' + allNames[i] + '</li>');
}
document.write("</ul>");
