/**
 * Script para gestionar la puntuación y eventos relacionados con la página actual.
 */

document.addEventListener("DOMContentLoaded", function () {
    // Obtener la puntuación guardada o establecerla en 0 si no existe
    const puntuacionGuardada = localStorage.getItem("puntuacion2") || 0;
  
    // Mostrar la puntuación en el elemento correspondiente
    const puntuacionMostrada2 = document.getElementById("puntuacionMostrada2");
    puntuacionMostrada2.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
    puntuacionMostrada2.classList.add("puntuacion2");
  
    // Configurar el evento para el botón siguiente
    const siguienteBtn = document.getElementById("siguienteBtn");
    siguienteBtn.addEventListener("click", function() {
      // Redirigir a la siguiente página
      window.location.href = "/html/dialogos/dialogo4.html";
    });
  });
  