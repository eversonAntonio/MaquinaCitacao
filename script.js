var r = document.querySelector(':root');

function trocaCor(){
    r.style.setProperty('--cor-padrao', 'rgb(' +
    Math.floor(Math.random() * 255) + ', ' +
    Math.floor(Math.random() * 255) + ', ' +
    Math.floor(Math.random() * 255));
}

trocaCor();