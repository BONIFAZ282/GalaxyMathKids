/**
 * Control principal del juego y elementos DOM.
 */

// Elementos DOM
const btnOcultarCalcu = document.getElementById("ocultarCalcu");
const areaTrabajo = document.getElementById("areaTrabajo");
const nombreJugador = document.getElementById("nombreJugador");
const dialogInfoPlaneta = document.getElementById("infoplaneta");
const dialogPregunta = document.getElementById("pregunt");

const btnContinuar = document.getElementById("btnContinuar");
const btnComienzaAventura = document.getElementById("comienzaAventura");
const galaxia1 = document.querySelector(".galaxia1");

/* Variables */
let astro = null;
let planetasArray = [];
let preguntasArray = [];
let preguntas = preguntas_dificil;
let preguntaActualObj = null;
let numeroplanetas = dataplanetas.length;
let index_planeta = -1;
let index_pregunta = 0;

// Función para establecer el área de trabajo y mostrar el nombre del jugador.
function establecerAreaTrabajo() {
  // Obtenemos el nombre almacenado en el navegador
  nombreJugador.innerHTML = "Hola " + localStorage.getItem("jugador") + " !!";

  // Seteamos las dimensiones del área de trabajo
  areaTrabajo.style.height = window.innerHeight - 10 + "px";
  areaTrabajo.style.width = window.innerWidth - 10 + "px";
  areaTrabajo.style.top = "0px";
}

// Función para poblar la galaxia con planetas en posiciones aleatorias.
function poblarGalaxiaConPlanetasRandom() {
  let posX = 0;
  let posY = 0;

  for (let pla = 0; pla < numeroplanetas; pla++) {
    // Obtenemos la posición random
    posX = getRandom(0, window.innerWidth - 250);
    posY = getRandom(0, window.innerHeight - 350);

    // Instancia del objeto
    var plaTemp = new Planeta(areaTrabajo, dialogInfoPlaneta, posX, posY);

    // Insertamos en el array de planetas
    planetasArray.push(plaTemp);

    // Insertamos el planeta y le ponemos un nombre
    plaTemp.insertarElemento(dataplanetas[pla]);
  }
}

// Función para obtener un número aleatorio en un rango dado.
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Esta función carga las preguntas en un array
 * de manera aleatoria.
 */
// Función para cargar preguntas en un orden aleatorio.
function cargarPreguntasRandom() {
  let numeros_random = [];
  let random = 0;
  for (let i = 0; i < numeroplanetas; i++) {
    random = getRandom(0, preguntas_dificil.length);
    if (!numeros_random.includes(random)) {
      numeros_random.push(random);
    } else {
      i--;
    }
  }

  let pre = null;
  numeros_random.forEach((n) => {
    pre = new Pregunta(dialogPregunta, preguntas[n]);
    preguntasArray.push(pre);
  });
}

let puntuacion3 = 0;

// Función para actualizar la puntuación en el div
function actualizarPuntuacion() {
  const puntuacionDiv = document.getElementById("puntuacion3");
  puntuacionDiv.textContent = `PUNTUACIÓN: ${puntuacion3}`;
}

function reiniciarEstilosBotones() {
  const botones = dialogPregunta.querySelectorAll(".btn");
  for (let i = 0; i < botones.length; i++) {
    botones[i].style.background = ""; // Restablecer el fondo a su valor predeterminado
  }
}

function responderPregunta(index_respuesta) {
  if (preguntaActualObj.verificarRespuesta(index_respuesta)) {
    // Respuesta correcta
    // Marcar el botón correcto con fondo verde
    dialogPregunta.querySelectorAll(".btn")[index_respuesta].style.background =
      "lightgreen";

    // Reproducir audio de respuesta correcta
    document.getElementById("audioCorrecto").play();

    // Sumar 10 puntos por respuesta correcta
    puntuacion3 += 10;

    // Actualizar la puntuación en el div
    actualizarPuntuacion();

    // Restaurar los estilos de los botones después de un breve retraso
    setTimeout(reiniciarEstilosBotones, 2000);

    // Esperar un tiempo antes de ocultar el diálogo
    setTimeout(function () {
      preguntaActualObj.ocultarDialog();

      // Incrementar el índice de pregunta y planeta
      index_pregunta++;
      index_planeta++;

      // Establecer la pregunta actual
      preguntaActualObj = preguntasArray[index_pregunta];

      // Hacer viajar al astronauta
      astro.viajarAlPlaneta(index_planeta);
    }, 2000);
    localStorage.setItem("puntuacion3", puntuacion3);
  } else {
    // Respuesta incorrecta
    // Marcar el botón incorrecto con fondo rosa
    dialogPregunta.querySelectorAll(".btn")[index_respuesta].style.background =
      "pink";

    // Reproducir audio de respuesta incorrecta
    document.getElementById("audioIncorrecto").play();

    // Restar 5 puntos por respuesta incorrecta
    puntuacion3 -= 5;

    // Actualizar la puntuación en el div
    actualizarPuntuacion();

    // Restaurar los estilos de los botones después de un breve retraso
    setTimeout(reiniciarEstilosBotones, 2000);
  }
}

// Función para iniciar el juego.
function iniciarJuego() {
  establecerAreaTrabajo();
  poblarGalaxiaConPlanetasRandom();
  cargarPreguntasRandom();
  astro = new Astronauta(areaTrabajo, planetasArray);
  astro.mostrar();
}

// Evento para iniciar el juego y mostrar la galaxia.
btnComienzaAventura.addEventListener("click", function () {
  galaxia1.style.display = "none";

  // Después de hacer clic, se lanza el diálogo de preguntas
  // Comenzamos con la pregunta número 0
  preguntaActualObj = preguntasArray[index_pregunta];
  preguntasArray[index_pregunta].mostrarDialog();
});

/**
 * Binding de los controles
 */
// Evento para continuar el juego o redirigir a la página de victoria.
btnContinuar.addEventListener("click", function () {
  dialogInfoPlaneta.style.display = "none";

  if (index_planeta == numeroplanetas - 1) {
    console.log("Fin del juego");
    // Colocar aquí un mensaje de que ganaste el juego
    window.location.href = "/html/otros/puntuacion3.html";
    return;
  }

  preguntaActualObj.mostrarDialog();
});

// Evento para reconfigurar el tamaño de la pantalla
window.addEventListener("resize", () => {
  location.reload();
});

// Iniciar el juego.
iniciarJuego();
