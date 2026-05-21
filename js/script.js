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

const colorHex = function() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);

    const iluminación = (R * 299 + G * 587 + B * 114) / 1000;

    const colorOscuro = iluminación < 128;

    const hexR = R.toString(16).padStart(2, '0');
    const hexG = G.toString(16).padStart(2, '0');
    const hexB = B.toString(16).padStart(2, '0');

    const colorHexGenerado = `#${hexR}${hexG}${hexB}`.toUpperCase();

    return [colorHexGenerado, colorOscuro]
}

const copiarColor = function(texto, boton) {
    navigator.clipboard.writeText(texto).then(function() {
        boton.textContent = '¡Copiado!';
        setTimeout(function() {
            boton.textContent = texto;
        }, 1500);
    });
}

const generarPaleta = function() {
    const cantidad = parseInt(cantidadColor.value);
    const formato = formatoColor.value;

    const contenedor = document.querySelector('.paleta-contenedor')
    contenedor.innerHTML = '';
for (let i = 0; i < cantidad; i++) {

        let colorGenerado;
        let colorOscuro;

        if (formato === 'hsl') {
            [colorGenerado, colorOscuro] = colorHsl();
        } else {
            [colorGenerado, colorOscuro] = colorHex();
        }

        let colorTexto;
        if (colorOscuro) {
            colorTexto = '#ffffff';
        } else {
            colorTexto = '#000000';
        }

        contenedor.innerHTML += `
            <div class="tarjeta-color">
                <div class="bloque-color" style="background-color: ${colorGenerado};">
                    <p class="codigo-color" style="color: ${colorTexto};">${colorGenerado}</p>
                    <button
                        class="boton-copiar"
                        style="color: ${colorTexto}; border-color: ${colorTexto};"
                        onclick="copiarColor('${colorGenerado}', this)"
                    >
                        Copiar
                    </button>
                </div>
            </div>
        `;
    }
}

botonGenerar.addEventListener('click', generarPaleta);