let sacarPremio = (premio,self) => {
    self.style.display = 'none';
    let numero = Math.round(Math.random()*99);
    let bola_uno = document.querySelector('#one');
    let bola_dos = document.querySelector('#two');
    let bola_tres = document.querySelector('#three');
    if (premio == 1) {
        bola_uno.setAttribute('class', 'movimientoUno bola');
        bola_uno.style.display = 'flex';
        bola_uno.innerHTML = `<h1>${numero}</h1>`;
    }else if (premio == 2) {
        bola_dos.setAttribute('class', 'movimientoDos bola');
        bola_dos.style.display = 'flex';
        bola_dos.innerHTML = `<h1>${numero}</h1>`;
    }else if (premio == 3) {
        bola_tres.setAttribute('class', 'movimientoTres bola');
        bola_tres.style.display = 'flex';
        bola_tres.innerHTML = `<h1>${numero}</h1>`;
    }
}