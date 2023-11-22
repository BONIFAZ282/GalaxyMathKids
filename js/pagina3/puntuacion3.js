document.addEventListener("DOMContentLoaded", function () {
    const puntuacionGuardada = localStorage.getItem("puntuacion3") || 0;
    const puntuacionMostrada3 = document.getElementById("puntuacionMostrada3");
    puntuacionMostrada3.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
    puntuacionMostrada3.classList.add("puntuacion3");

    const siguienteBtn = document.getElementById("siguienteBtn");
    siguienteBtn.addEventListener("click", function() {
        window.location.href = "/html/dialogos/dialogo6.html";

    });
});
