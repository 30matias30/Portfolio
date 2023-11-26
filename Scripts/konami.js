const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

let konamiCodeIndex = 0;

function checkKonamiCode(event) {
    if (event.key.toLowerCase() === konamiCode[konamiCodeIndex]) {
        konamiCodeIndex++;
        if (konamiCodeIndex === konamiCode.length) {
            // Código Konami ingresado correctamente, realiza la acción deseada
            alert('Código Konami ingresado correctamente!');
            // Puedes realizar otras acciones aquí
            konamiCodeIndex = 0; // Reinicia el índice para futuros intentos
        }
    } else {
        konamiCodeIndex = 0; // Reinicia el índice si se ingresa una tecla incorrecta
        // alert('Código Konami ingresado incorrectamente!');
    }
}

// Agrega el evento keydown al documento para escuchar las teclas presionadas
document.addEventListener('keydown', checkKonamiCode);