// Espera a que el contenido del documento esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Llama a la función para actualizar y mostrar la puntuación total
    actualizarPuntuacionTotal();
});

// Función que actualiza y muestra la puntuación total
function actualizarPuntuacionTotal() {
    // Obtiene las puntuaciones individuales del localStorage o establece el valor predeterminado a 0 si no hay datos
    const puntuacion1 = parseInt(localStorage.getItem("puntuacion1")) || 0;
    const puntuacion2 = parseInt(localStorage.getItem("puntuacion2")) || 0;
    const puntuacion3 = parseInt(localStorage.getItem("puntuacion3")) || 0;

    // Calcula la puntuación total sumando las puntuaciones individuales
    const puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3;

    // Obtiene una referencia al elemento HTML donde se mostrará la puntuación total
    const puntuacionTotalMostrada = document.getElementById("puntuacionTotal");

    // Verifica si el elemento existe antes de actualizar su contenido
    if (puntuacionTotalMostrada) {
        // Actualiza el contenido del elemento con la puntuación total calculada
        puntuacionTotalMostrada.textContent = puntuacionTotal;
    }
}
