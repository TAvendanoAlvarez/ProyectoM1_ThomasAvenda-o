# 🎨 Colorfly Studio

Generador de paletas de colores aleatorias con soporte para formatos HSL y HEX. Construido con HTML, CSS y JavaScript.

---

## 🚀 Demo en video

🔗 [Ver proyecto en YouTube](https://youtu.be/vBq0kpolJjo)

---

## 🚀 Link pages

🔗 [Ver proyecto en GitHub Pages](https://tavendanoalvarez.github.io/ProyectoM1_ThomasAvenda-o/html/index.html)

## ✨ Funcionalidades

- Generación aleatoria de paletas de colores
- Soporte para dos formatos de color: **HSL** y **HEX**
- Selector de cantidad de colores: **6, 8 o 9**
- Copia del código de color al portapapeles con un clic
- Texto adaptativo (blanco/negro) según la luminosidad del color de fondo
- Diseño responsive y visual limpio

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura del proyecto |
| CSS3 | Estilos, layout y efectos hover |
| JavaScript (ES6+) | Lógica de generación y renderizado |
| Google Fonts (Archivo Black) | Tipografía |

---

## 📁 Estructura del proyecto

```
colorfly-studio/
├── html/
│   └── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images-removebg-preview.png
├── github-removebg-preview.png
└── README.md
```

---

## ⚙️ Cómo usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TAvendanoAlvarez/colorfly-studio.git
   ```
2. Abre `index.html` directamente en tu navegador — no requiere instalación ni servidor.

---

## 🧠 Decisiones técnicas

### Generación de colores
- **HSL**: se generan valores aleatorios para matiz (0–360°), saturación (0–100%) y luminosidad (0–100%). El texto se muestra en blanco si `L < 50`, negro si `L >= 50`.
- **HEX**: se generan valores RGB aleatorios (0–255) y se convierten a hexadecimal. La luminosidad percibida se calcula con la fórmula `(R*299 + G*587 + B*114) / 1000`; si el resultado es menor a 128, el texto es blanco.

### Render dinámico
Las tarjetas de color se generan mediante `innerHTML` dentro de un ciclo, reconstruyendo el contenedor completo en cada generación para evitar acumulación de elementos.

### Copia al portapapeles
Se usa la API `navigator.clipboard.writeText()` para copiar el código de color. El botón muestra "¡Copiado!" por 1.5 segundos y luego vuelve a su estado original.

---

## 🤖 Uso de IA (prompts)

Este proyecto fue desarrollado con apoyo de herramientas de IA para:

- Organizar la lógica de detección de luminosidad para el texto adaptativo
- Revisar y mejorar la estructura del HTML
- Sugerir mejoras de accesibilidad y UX en los botones de copia

---

## 🔮 Mejoras futuras

- [ ] Generar formato RGBA
- [ ] Bloqueo individual de colores (para regenerar solo los no bloqueados)
- [ ] Animación de transición al generar nueva paleta
- [ ] Exportar paleta como imagen
- [ ] Modo oscuro

---

## 👤 Autor

**Thomas Avendaño**
- GitHub: [@TAvendanoAlvarez](https://github.com/TAvendanoAlvarez)

---

© 2026 Thomas Avendaño. Todos los derechos reservados.
