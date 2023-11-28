'use strict';
const names = ['John', 'Paul', 'Jones'];

let getElement = document.getElementById('target');

let list = '';
for (let i = 0; i < names.length; i++) {
  list += '<li>' + names[i] + '</li>';
}

getElement.innerHTML = list;