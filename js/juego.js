const botonNuevoJuego = document.querySelector("#boton-nuevo-juego");
const botonSalir = document.querySelector("#boton-salir");
const letrasClave = document.querySelector(".letras-clave");
const letrasErroneas = document.querySelector(".letras-erroneas");
let intentos = 10;
let palabraEnJuego = ''

botonNuevoJuego.onclick = resetearJuego;

botonSalir.onclick = () => {
    hacerInvisible(seccionJuego);
    hacerVisible(seccionMenuPrincipal);
}

const palabras = ["HTML", "JAVASCRIPT", "AHORCADO", "JUEGO", "TECLADO", "MONITOR", "REFRIGERADOR", "FERROCARRIL", "GORILA"];
let cantidadPalabras = palabras.length;

document.addEventListener("keypress", (e) => {
    if (seccionJuego.classList.contains("display-none")) {
        return;
    }
    const letra = e.key.toUpperCase();
    const indexes = [];
    let letraEncontrada = false;
    for (let index in palabraEnJuego) {
        if (letra == palabraEnJuego[index]) {
            letraEncontrada = true;
            indexes.push(index);
        }
    }
    if (letraEncontrada) {
        letraAcertada(letra, indexes);
    } else {
        intentos--;
        if (intentos <= 0) {
            alert(`Haz perdido!, la palabra correcta era ${palabraEnJuego}`);
            resetearJuego();
            return;
        }
        letraErronea(letra);
    }
});

function generarPalabra() {
    return palabras[Math.round(Math.random() * (cantidadPalabras - 1))];
}

function placeholdearPalabra(palabraEnJuego) {
    const palabraLen = palabraEnJuego.length;
    for (let i = 0; i < palabraLen; i++) {
        const spam = document.createElement("spam");
        spam.textContent = " . ";
        letrasClave.appendChild(spam);
    }
}

function letraAcertada(letra, indexes) {  // Muestra las letras en el lugar correcto
    const indexesLen = indexes.length;
    for (let i = 0; i < indexesLen; i++) {
        letrasClave.children[indexes[i]].textContent = letra;
    }
}

function letraErronea(letra) {    // Muestra la letra en las letras erroneas
    const cantidadLetrasErr = letrasErroneas.children.length;
    for (let i = 0; i < cantidadLetrasErr; i++) { // Revisar si la letra ya esta en la lista
        if (letrasErroneas.children[i].textContent == letra) {
            return;
        }
    }
    const spam = document.createElement("spam");
    spam.textContent = letra;
    letrasErroneas.appendChild(spam);
}

function resetearJuego() {
    intentos = 10;
    letrasClave.innerHTML = '';
    letrasErroneas.innerHTML = '';
    palabraEnJuego = generarPalabra();
    placeholdearPalabra(palabraEnJuego);
    console.log(palabraEnJuego);
}