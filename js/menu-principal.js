const botonIniciar = document.querySelector("#boton-iniciar");
const botonAgregarPalabra = document.querySelector("#boton-agregar-palabra")
const seccionMenuPrincipal = document.querySelector(".menu-principal");
const seccionJuego = document.querySelector(".seccion-juego");
const seccionAgregarPalabras = document.querySelector(".seccion-agregar-palabra");

botonIniciar.onclick = () => {
    resetearJuego();
    hacerInvisible(seccionMenuPrincipal);
    hacerVisible(seccionJuego);
};

botonAgregarPalabra.onclick = () => {
    hacerInvisible(seccionMenuPrincipal);
    hacerVisible(seccionAgregarPalabras);
};

function hacerInvisible(elem) {
    elem.classList.add("display-none");
}

function hacerVisible(elem) {
    elem.classList.remove("display-none");
}