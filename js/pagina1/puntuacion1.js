document.addEventListener("DOMContentLoaded", function () {
  // Obtener la puntuación guardada del jugador o establecerla en 0 si no hay ninguna.
  const puntuacionGuardada = localStorage.getItem("puntuacion1") || 0;

  // Elemento DOM para mostrar la puntuación.
  const puntuacionMostrada1 = document.getElementById("puntuacionMostrada1");

  // Mostrar la puntuación en el elemento correspondiente.
  puntuacionMostrada1.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
  puntuacionMostrada1.classList.add("puntuacion1");

  // Elemento DOM para el botón siguiente.
  const siguienteBtn = document.getElementById("siguienteBtn");

  // Evento click en el botón siguiente.
  siguienteBtn.addEventListener("click", function () {
    // Redirigir a la página de diálogo 2.
    window.location.href = "/html/dialogos/dialogo2.html";
  });
});
