
    const imageContainers = document.querySelectorAll('.trust-img .image-container');

    imageContainers.forEach(container => {
        container.addEventListener('click', () => {
            // Removemos la clase 'active' de todos los contenedores
            imageContainers.forEach(c => c.classList.remove('active'));

            // Agregamos la clase 'active' solo al contenedor clickeado
            container.classList.add('active');
        });
    });

