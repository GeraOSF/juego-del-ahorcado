const botonNuevoJuego = document.querySelector("#boton-nuevo-juego");
const botonSalir = document.querySelector("#boton-salir");
let letrasErroneas = [];
let letrasEncontradas = [];
let intentos = 10;
let palabraEnJuego = '';
let numLetrasAcertadas = 0;
let juegoTerminado = false;

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
    if (seccionJuego.classList.contains("display-none") || juegoTerminado) {
        return;
    }
    const letra = e.key.toUpperCase();
    if (!/^[A-Z]$/.test(letra)) {
        return;
    }
    const indexes = [];
    let letraEncontrada = false;
    // Se hace la busqueda en un ciclo for y cada letra que coincida lo pushea a indexes
    if (!letrasEncontradas.includes(letra)) {
        for (let index in palabraEnJuego) {
            if (letra == palabraEnJuego[index]) {
                numLetrasAcertadas++;
                letraEncontrada = true;
                indexes.push(index);
            }
        }
    }
    
    if (letraEncontrada) {
        letrasEncontradas.push(letra);
        letraAcertada(letra, indexes);
        if (numLetrasAcertadas == palabraEnJuego.length) {
            setTimeout(() => {alert(`Felicidades, haz ganado!, la palabra correcta fue ${palabraEnJuego}!`)}, 1);
            juegoTerminado = true;
        }
    } else {
        if (letrasErroneas.includes(letra) || letrasEncontradas.includes(letra)) {
            return;
        }
        letrasErroneas.push(letra);
        letraErronea(letra);
        if (intentos <= 0) {
            setTimeout(() => {alert(`Haz perdido!, la palabra correcta era ${palabraEnJuego}!`)}, 1);
            juegoTerminado = true;
        }
    }
});

function generarPalabra() {
    return palabras[Math.round(Math.random() * (cantidadPalabras - 1))];
}

function resetearJuego() {
    juegoTerminado = false;
    intentos = 10;
    numLetrasAcertadas = 0;
    letrasErroneas = [];
    letrasEncontradas = [];
    posiciones = [];
    limpiarCanvas();
    palabraEnJuego = generarPalabra();
    placeholdearPalabra(palabraEnJuego);
    console.log(palabraEnJuego);
}