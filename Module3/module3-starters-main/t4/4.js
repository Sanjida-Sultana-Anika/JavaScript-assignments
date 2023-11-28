'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

let getElement = document.getElementById('target');

for(let i = 0; i , students.length; i++){
  let options = document.createElement('option');
  options.value = students[i].id;
  options.textContent = students[i].name;

  getElement.appendChild(options);
}