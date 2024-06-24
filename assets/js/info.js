document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los párrafos con la clase .about-fe p
    const paragraphs = document.querySelectorAll('.about-fe p');

    // Agregar evento de clic a cada párrafo
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', function() {
            // Alternar la visibilidad del texto adicional
            const extraInfo = paragraph.nextElementSibling; // Seleccionar el siguiente elemento (texto adicional)
            extraInfo.style.display = (extraInfo.style.display === 'block') ? 'none' : 'block';
        });
    });
});
