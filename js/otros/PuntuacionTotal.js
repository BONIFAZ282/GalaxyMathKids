document.addEventListener("DOMContentLoaded", function () {
    actualizarPuntuacionTotal();
});

function actualizarPuntuacionTotal() {
    const puntuacion1 = parseInt(localStorage.getItem("puntuacion1")) || 0;
    const puntuacion2 = parseInt(localStorage.getItem("puntuacion2")) || 0;
    const puntuacion3 = parseInt(localStorage.getItem("puntuacion3")) || 0;

    const puntuacionTotal = puntuacion1 + puntuacion2 + puntuacion3;

    const puntuacionTotalMostrada = document.getElementById("puntuacionTotal");
    if (puntuacionTotalMostrada) {
        puntuacionTotalMostrada.textContent = puntuacionTotal;
    }
}
