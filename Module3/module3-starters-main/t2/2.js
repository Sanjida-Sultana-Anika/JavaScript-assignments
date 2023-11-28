document.addEventListener('DOMContentLoaded', function() {
  let getId = document.getElementById('target');

  let li1 = document.createElement('li');
  li1.textContent = 'First Item';

  let li2 = document.createElement('li');
  li2.textContent = 'Second Item';
  li2.classList.add('my-item');

  let li3 = document.createElement('li');
  li3.textContent = 'Third Item';


  getId.appendChild(li1);
  getId.appendChild(li2);
  getId.appendChild(li3);

});

