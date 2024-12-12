$(document).ready(function () {
    // Cargar header y footer dinámicamente
    $("#header").load("header.html");
    $("#footer").load("footer.html");

    // Inicializar AOS (animaciones)
    AOS.init();

    // Configurar eventos para los botones de "Ver detalles"
    configureModals();
});

// Función para configurar los modales dinámicamente
function configureModals() {
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(button => {
        button.addEventListener('click', function () {
            const habitacion = this.getAttribute('data-habitacion');
            const precio = this.getAttribute('data-precio');
            const caracteristicas = this.getAttribute('data-caracteristicas');
            const disponibilidad = this.getAttribute('data-disponibilidad');

            // Actualizar el contenido del modal
            document.querySelector('#detalleHabitacionLabel').textContent = `Detalles de la Habitación ${habitacion}`;
            document.querySelector('#detalleHabitacion .modal-body').innerHTML = `
                <p><strong>Precio:</strong> ${precio}</p>
                <p><strong>Características:</strong> ${caracteristicas}</p>
                <p><strong>Disponibilidad:</strong> ${disponibilidad}</p>
            `;
        });
    });
}

