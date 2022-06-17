const botonNuevoJuego = document.querySelector("#boton-nuevo-juego");
const botonSalir = document.querySelector("#boton-salir");
let letrasErroneas = [];
let intentos = 10;
let palabraEnJuego = ''

// Asignar la funcion resetearJuego al boton nuevo juego
botonNuevoJuego.onclick = resetearJuego;

botonSalir.onclick = () => {
    hacerInvisible(seccionJuego);
    hacerVisible(seccionMenuPrincipal);
}

// Palabras iniciales
const palabras = ["HTML", "JAVASCRIPT", "AHORCADO", "JUEGO", "TECLADO", "MONITOR", "REFRIGERADOR", "FERROCARRIL", "GORILA"];
let cantidadPalabras = palabras.length;

// Event listener para verificar si la letra esta en la palabra
document.addEventListener("keypress", (e) => {
    if (seccionJuego.classList.contains("display-none")) {
        return;
    }
    const letra = e.key.toUpperCase();
    const indexes = [];
    let letraEncontrada = false;
    // Se hace la busqueda en un ciclo for y cada letra que coincida lo pushea a indexes
    for (let index in palabraEnJuego) {
        if (letra == palabraEnJuego[index]) {
            letraEncontrada = true;
            indexes.push(index);
        }
    }
    if (letraEncontrada) {
        letraAcertada(letra, indexes);
    } else {
        if (letrasErroneas.includes(letra)) {
            return;
        }
        letrasErroneas.push(letra);
        letraErronea(letra);
        if (intentos <= 0) {
            alert(`Haz perdido!, la palabra correcta era ${palabraEnJuego}`);
            resetearJuego();
        }
    }
});

function generarPalabra() {
    return palabras[Math.round(Math.random() * (cantidadPalabras - 1))];
}

function resetearJuego() {
    intentos = 10;
    letrasErroneas = [];
    posiciones = [];
    limpiarCanvas();
    palabraEnJuego = generarPalabra();
    placeholdearPalabra(palabraEnJuego);
    console.log(palabraEnJuego);
}

function sleep(ms) {
    console.log("sleeping")
    return new Promise(resolve => setTimeout(resolve, ms));
}