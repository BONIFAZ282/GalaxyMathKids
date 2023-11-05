const audio = document.getElementById("myAudio");
const correcto = document.getElementById("audioCorrecto");
const incorrecto = document.getElementById("audioIncorrecto");

// Ajustar el volumen de los audios
audio.volume = 0.018;
correcto.volume = 0.1;
incorrecto.volume = 0.1;

audio.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
});

audio.play();
