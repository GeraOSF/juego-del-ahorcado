const botonGuardar = document.querySelector("#boton-guardar");
const botonCancelar = document.querySelector("#boton-cancelar");
const textoAgregar = document.querySelector("#texto-agregar");

textoAgregar.addEventListener("input", e => {
    const letraIngresada = e.target.value[e.target.value.length - 1];
    const letrasPermitidas = /[a-zA-Z]/;
    if (!letrasPermitidas.test(letraIngresada)) {
        textoAgregar.value = textoAgregar.value.slice(0, textoAgregar.value.length - 1);
    }
    else if (letraIngresada === letraIngresada.toLowerCase()) {
        textoAgregar.value = textoAgregar.value
            .slice(0, textoAgregar.value.length - 1) + letraIngresada.toUpperCase();
    }
});

botonGuardar.onclick = () => {
    const palabraAgregada = textoAgregar.value;
    if (palabraAgregada <= 0) {
        alert("Ingrese una palabra");
    }
    else if (palabras.includes(palabraAgregada)) {
        alert("Esta palabra ya esta guardada");
    }
    else {
        palabras.push(palabraAgregada);
        cantidadPalabras++;
        alert("Palabra agregada");
    }
    textoAgregar.value = '';
    textoAgregar.focus();
}

botonCancelar.onclick = () => {
    seccionAgregarPalabras.classList.add("display-none");
    seccionMenuPrincipal.classList.remove("display-none");
}
