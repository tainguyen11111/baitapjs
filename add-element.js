var newEl = document.createElement('li');
var newtext = document.createTextNode('quinoa');
newEl.appendChild(newtext);
var position = document.getElementsByClassName('ul')[0];
position.appendChild(newEl);