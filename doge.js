function doge() {
    var img = document.createElement('img');
    var div = document.getElementById('doge-gen');
    img.setAttribute('id' , 'doge-img');
    img.src = "cheems.gif";
    div.appendChild(img);
}
function reset() {
    document.getElementById('doge-img').remove();
}
