var info;
var pic;

info = localStorage.getItem('info');
pic = localStorage.getItem('pic');

document.getElementById('text').innerHTML = info;
document.getElementById('kartinka').src = pic;
