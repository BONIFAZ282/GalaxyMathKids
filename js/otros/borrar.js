// Espera a que el contenido del documento esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al botón de borrar puntuaciones
    const btnBorrarPuntuaciones = document.getElementById("btnBorrarPuntuaciones");

    // Verifica si el botón existe antes de agregar el evento
    if (btnBorrarPuntuaciones) {
        // Agrega un evento de clic al botón para ejecutar la función borrarPuntuaciones
        btnBorrarPuntuaciones.addEventListener("click", borrarPuntuaciones);
    }
});

// Función que borra las puntuaciones almacenadas en localStorage y recarga la página
function borrarPuntuaciones() {
    // Elimina las puntuaciones almacenadas en localStorage
    localStorage.removeItem("puntuacion1");
    localStorage.removeItem("puntuacion2");
    localStorage.removeItem("puntuacion3");

    // Recarga la página para reflejar el cambio
    location.reload();
}
