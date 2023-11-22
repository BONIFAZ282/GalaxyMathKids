document.addEventListener("DOMContentLoaded", function () {
    const puntuacionGuardada = localStorage.getItem("puntuacion") || 0;
    const puntuacionMostrada = document.getElementById("puntuacionMostrada");
    puntuacionMostrada.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
    puntuacionMostrada.classList.add("puntuacion");

    const siguienteBtn = document.getElementById("siguienteBtn");
    siguienteBtn.addEventListener("click", function() {
        window.location.href = "/html/dialogos/dialogo2.html";

    });
});
