
var rojo = document.getElementById('rojo');
var azul = document.getElementById('azul');
var verde = document.getElementById('verde');

var bodyEle = document.getElementsByTagName("body")[0];
console.log(bodyEle);

rojo.addEventListener('click', function() {
    bodyEle.classList.remove('ca', 'cv');
    bodyEle.classList.add('cr');
});

azul.addEventListener('click', function() {
    bodyEle.classList.remove('cr', 'cv');
    bodyEle.classList.add('ca');
});

verde.addEventListener('click', function() {
    bodyEle.classList.remove('ca', 'cr');
    bodyEle.classList.add('cv');
});

function addRemoveClass(colorC) {

    if (colorC == "cr") {
        alert("asdasd")
        bodyEle.classList.add('cr');
    }
}