const audio = document.getElementById("myAudio");
// var sound = new Audio();

// sound.src = "/music/alien.mp3"


// sound.volume = 0.1;
audio.volume = 0.025;

audio.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
});

audio.play();
