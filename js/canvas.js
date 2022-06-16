const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.font = '50px Courier New';
ctx.fillStyle = "#d38a24";
let posiciones = [];

function placeholdearPalabra(palabraEnJuego) {
  const numLetras = palabraEnJuego.length;
  let ancho = numLetras * 60;
  for (let i = 0; i < numLetras; i++) {
    // cavas.width/2 lo posiciona en el centro, ancho/2 lo recorre a la izquierda la mitad del ancho de la palabra y (ancho * i / numLetras) es la distancia dependiendo de i
    let posicion = canvas.width/2 - ancho/2 + (ancho * i / numLetras);
    ctx.fillRect(posicion, 500, 50, 2);
    // Se almacena la posicion de la letra para usarla en la funcion letraAcertada para asi imprimir la letra en su lugar correspondiente
    posiciones.push(posicion);
  }
}

function letraAcertada(letra, indexes) {  // Muestra las letras en el lugar correcto
  const indexesLen = indexes.length;
  for (let i = 0; i < indexesLen; i++) {
      ctx.fillText(letra, posiciones[indexes[i]] + 10, 498);
  }
}

function letraErronea(letra) {
  intentos--;
  const numLetrasErroneas = letrasErroneas.length;
  let ancho = numLetrasErroneas * 60;
  // Limpia cada letra para volver a imprimir en una nueva posicion
  ctx.clearRect(0, 510, 1000, 90);
  // Imprimiento cada letra erronea
  for (let i = 0; i < numLetrasErroneas; i++) {
    let posicion = canvas.width/2 - ancho/2 + (ancho * i / numLetrasErroneas);
    ctx.fillText(letrasErroneas[i], posicion, 550);
  }
}

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}