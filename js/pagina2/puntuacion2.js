document.addEventListener("DOMContentLoaded", function () {
    const puntuacionGuardada = localStorage.getItem("puntuacion2") || 0;
    const puntuacionMostrada2 = document.getElementById("puntuacionMostrada2");
    puntuacionMostrada2.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
    puntuacionMostrada2.classList.add("puntuacion2");

    const siguienteBtn = document.getElementById("siguienteBtn");
    siguienteBtn.addEventListener("click", function() {
        window.location.href = "/html/dialogos/dialogo4.html";

    });
});
