function query (tag) {
    return document.querySelector(tag);
}


const contador = query('p');

let segundos = 10;
setInterval(() => {
    if(segundos >= 0 && segundos <= 10){
        contador.innerText = segundos;
        contador.style.fontSize = (segundos*10) + "px";
        segundos -=1
    }
}, 1000);