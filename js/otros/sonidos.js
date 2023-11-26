// Obtener referencia al elemento de audio principal
const audio = document.getElementById("myAudio");
const completado = document.getElementById("completado");

// Obtener referencias a los elementos de audio para respuestas correctas e incorrectas
const correcto = document.getElementById("audioCorrecto");
const incorrecto = document.getElementById("audioIncorrecto");

// Ajustar el volumen de los audios
audio.volume = 0.5; // Ajustar el volumen del audio principal
completado.volume = 0.5; //Ajustar el volumen de NIvel COmpeltado.
correcto.volume = 0.5; // Ajustar el volumen del audio para respuestas correctas
incorrecto.volume = 0.5; // Ajustar el volumen del audio para respuestas incorrectas

// Agregar un evento para reiniciar el audio principal cuando termine de reproducirse
audio.addEventListener("ended", function() {
  this.currentTime = 0; // Reiniciar el tiempo de reproducción a cero
  this.play(); // Reproducir el audio nuevamente
});

// Iniciar la reproducción del audio principal
audio.play();
