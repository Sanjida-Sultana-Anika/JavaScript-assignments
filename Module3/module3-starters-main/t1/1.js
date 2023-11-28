let getElement = document.getElementById('target');

let list = '<li>First item</li>' +
                  '<li>Second item</li>' +
                  '<li>Third item</li>';

getElement.innerHTML = list;

getElement.classList.add('my-list');
