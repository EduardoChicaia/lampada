const Ligar = document.getElementById('ligar');
const Desligar = document.getElementById('desligar');
const Lampada = document.getElementById('lamp');

function islampadaQuebrada() {
    return Lampada.src.indexOf ('quebrada') > -1;
}

function lampadaLigada () {
    if (!islampadaQuebrada ()) {
        Lampada.src = './img/ligada.jpg';
    }
}

function lampadaDesligada () {

    if (!islampadaQuebrada ()) {
        Lampada.src = './img/desligada.jpg';
    }
}

function lampadaQuebrada() {
        Lampada.src = './img/quebrada.jpg'
}


Ligar.addEventListener ('click', lampadaLigada);
Desligar.addEventListener('click', lampadaDesligada);
Lampada.addEventListener('mouseover', lampadaLigada);
Lampada.addEventListener('mouseleave', lampadaDesligada);
Lampada.addEventListener('dblclick', lampadaQuebrada);




