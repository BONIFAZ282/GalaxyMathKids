document.addEventListener("DOMContentLoaded", function () {
    const btnBorrarPuntuaciones = document.getElementById("btnBorrarPuntuaciones");
    if (btnBorrarPuntuaciones) {
        btnBorrarPuntuaciones.addEventListener("click", borrarPuntuaciones);
    }
});

function borrarPuntuaciones() {
    localStorage.removeItem("puntuacion1");
    localStorage.removeItem("puntuacion2");
    localStorage.removeItem("puntuacion3");

    // Recarga la página para reflejar el cambio
    location.reload();
}
