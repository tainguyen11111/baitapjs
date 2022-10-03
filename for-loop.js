var scores = [24, 32, 17];
var arraylength = scores.length;
var roundNumber = 0;
var msg = '';
for (var i = 0; i < arraylength; i++) {
    roundNumber = (i + 1);
    msg += 'round' + roundNumber + ': ';
    msg += score[i] +'<br />';
}
document.getElementById('answer').innerHTML = msg;
