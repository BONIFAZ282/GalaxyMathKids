document.addEventListener("DOMContentLoaded", function () {
    const puntuacionGuardada = localStorage.getItem("puntuacion1") || 0;
    const puntuacionMostrada1 = document.getElementById("puntuacionMostrada1");
    puntuacionMostrada1.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
    puntuacionMostrada1.classList.add("puntuacion1");

    const siguienteBtn = document.getElementById("siguienteBtn");
    siguienteBtn.addEventListener("click", function() {
        window.location.href = "/html/dialogos/dialogo2.html";

    });
});
