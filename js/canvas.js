// w = 1000px, h = 600px
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.font = '50px Courier New';
ctx.fillStyle = "#d38a24";
ctx.strokeStyle = "#d38a24";
ctx.lineWidth = 10;
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
  dibujarParte();
  const numLetrasErroneas = letrasErroneas.length;
  let ancho = numLetrasErroneas * 60;
  // Limpia cada letra para volver a imprimir en una nueva posicion
  ctx.clearRect(0, 510, 1000, 90);
  // Imprimiendo cada letra erronea
  for (let i = 0; i < numLetrasErroneas; i++) {
    let posicion = canvas.width/2 - ancho/2 + (ancho * i / numLetrasErroneas);
    ctx.fillText(letrasErroneas[i], posicion, 550);
  }
}

function dibujarParte() {
  ctx.beginPath();
  switch (intentos) {
    case 9:
      dibujarCuerda();
      break;
    case 8:
      dibujarCabeza();
      break;
    case 7:
      dibujarCuerpo();
      break;
    case 6:
      dibujarPiernaIzq();
      break;
    case 5:
      dibujarPiernaDer();
      break;
    case 4:
      dibujarBrazoIzq();
      break;
    case 3:
      dibujarBrazoDer();
      break;
    case 2:
      dibujarOjoIzq();
      break;
    case 1:
      dibujarOjoDer();
      break;
    case 0:
      dibujarBoca();
      break;
    
  }
  ctx.closePath();
}

function dibujarCuerda() {
  ctx.moveTo(canvas.width/2, 100);
  ctx.lineTo(canvas.width/2, 25);
  ctx.stroke();
}

function dibujarCabeza() {
  ctx.arc(canvas.width/2, 150, 50, 0, Math.PI * 2);
  ctx.stroke();
}

function dibujarCuerpo() {
  ctx.fillRect(canvas.width/2 - 5, 200, 10, 100);
}

function dibujarPiernaIzq() {
  ctx.moveTo(canvas.width/2, 290);
  ctx.lineTo(canvas.width/2 - 50, 350);
  ctx.stroke();
}

function dibujarPiernaDer() {
  ctx.moveTo(canvas.width/2, 290);
  ctx.lineTo(canvas.width/2 + 50, 350);
  ctx.stroke();
}

function dibujarBrazoIzq() {
  ctx.moveTo(canvas.width/2, 225);
  ctx.lineTo(canvas.width/2 - 60, 250);
  ctx.stroke();
}

function dibujarBrazoDer() {
  ctx.moveTo(canvas.width/2, 225);
  ctx.lineTo(canvas.width/2 + 60, 250);
  ctx.stroke();
}

function dibujarOjoIzq() {
  ctx.arc(canvas.width/2 - 20, 140, 10, 0, Math.PI * 2);
  ctx.fill();
}

function dibujarOjoDer() {
  ctx.arc(canvas.width/2 + 20, 140, 10, 0, Math.PI * 2);
  ctx.fill();
}

function dibujarBoca() {
  ctx.arc(canvas.width/2, 180, 20, Math.PI, 0);
  ctx.stroke();
}

function limpiarCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // TODO: Hacer la base
}