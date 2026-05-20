const botonGenerar = document.getElementById('boton-generar');
const cantidadColor = document.getElementById('cantidad-color');
const formatoColor = document.getElementById('formato-color');

const colorHsl = function() {

const H = Math.floor(Math.random() * 360);
const S = Math.floor(Math.random() * 100);;
const L = Math.floor(Math.random() * 100);;

const colorHslGenerado = `hsl(${H} ${S}% ${L}%)`

const colorOscuro = L < 50;

return [colorHslGenerado, colorOscuro]
}

