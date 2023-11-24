/**
 * Event listener for when the DOM content is loaded.
 */
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the saved score from local storage, default to 0 if not present.
    const puntuacionGuardada = localStorage.getItem("puntuacion3") || 0;
  
    // Select the element to display the score.
    const puntuacionMostrada3 = document.getElementById("puntuacionMostrada3");
  
    // Set the content of the selected element to display the score.
    puntuacionMostrada3.textContent = `PUNTUACIÓN: ${puntuacionGuardada}`;
  
    // Add a CSS class to the element for styling purposes.
    puntuacionMostrada3.classList.add("puntuacion3");
  
    // Select the button for moving to the next page.
    const siguienteBtn = document.getElementById("siguienteBtn");
  
    // Add an event listener to the button for redirecting to the specified page.
    siguienteBtn.addEventListener("click", function() {
      window.location.href = "/html/dialogos/dialogo6.html";
    });
  });
  