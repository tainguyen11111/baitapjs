var firsitem = document.getElementById('one');
var showtextcontent = firsitem.textContent;
var showinnertext = firsitem.innerText;
var msg = '<p>textcontent: ' + showtextcontent + '<p/>';
msg += '<p>intenertext: ' + showinnertext + '<p/>';
var el = document.getElementById('scriptresults');
el.innerHTML = msg;
firstitem.textContent = 'sourdough bread';