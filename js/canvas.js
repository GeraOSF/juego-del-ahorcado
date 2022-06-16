const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function placeholdearPalabra(palabraEnJuego) {
  const numLetras = palabraEnJuego.length;
  let ancho = numLetras * 60;
  ctx.fillStyle = "#d38a24";
  for (let i = 0; i < numLetras; i++) {
    // cavas.width/2 lo posiciona en el centro, ancho/2 lo recorre a la izquierda la mitad del ancho de la palabra y (ancho * i / numLetras) es la distancia dependiendo de i
    ctx.fillRect(canvas.width/2 - ancho/2 + (ancho * i / numLetras), 200, 50, 2);
  }
}