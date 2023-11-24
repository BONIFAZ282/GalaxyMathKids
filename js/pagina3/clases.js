/**
 * Clases utilizadas en el juego:
 * - Planeta: Representa un planeta en el juego.
 * - Astronauta: Representa al astronauta que viaja entre planetas.
 * - Pregunta: Representa una pregunta en el juego.
 */

class Planeta {
  /**
   * Constructor de la clase Planeta.
   * @param {HTMLElement} areaTrabajo - Área de trabajo del juego.
   * @param {HTMLElement} contenedorDialog - Contenedor del diálogo del planeta.
   * @param {number} pos_x - Posición X del planeta.
   * @param {number} pos_y - Posición Y del planeta.
   */
  constructor(areaTrabajo, contenedorDialog, pos_x, pos_y) {
    this.posX = pos_x;
    this.posY = pos_y;
    this.areaTrabajo = areaTrabajo;
    this.contenedorDialog = contenedorDialog;

    // Almacenamos la misma data del array de planetas
    this.index = 0;
    this.msg_bg_color = "";
    this.nombre = "";
    this.foto = "";
    this.descripcion = "";
  }

  /**
   * Método para insertar un planeta en el área de trabajo.
   * @param {Object} data - Datos del planeta.
   */
  insertarElemento(data) {
    this.index = data.index;
    this.msg_bg_color = data.msg_bg_color;
    this.nombre = data.nombre;
    this.foto = data.foto;
    this.descripcion = data.descripcion;

    var planeta = document.createElement("div");
    planeta.classList.add("planeta");
    planeta.style.left = this.posX + "px";
    planeta.style.top = this.posY + "px";
    planeta.innerHTML = this.nombre;
    this.areaTrabajo.append(planeta);
  }

  /**
   * Método para mostrar el diálogo del planeta.
   */
  mostrarDialogo() {
    this.contenedorDialog.style.display = "block";
    this.contenedorDialog.style.backgroundColor = this.msg_bg_color;
    this.contenedorDialog.querySelectorAll(".nombre")[0].innerHTML =
      "Nuevo Planeta Liberado: " + this.nombre;
    this.contenedorDialog.querySelectorAll(".foto")[0].src =
      "../../" + this.foto;
    this.contenedorDialog.querySelectorAll(".descripcion")[0].innerHTML =
      this.descripcion;
  }

  /**
   * Método para mostrar las coordenadas del planeta en la consola.
   */
  mostrarCoordenadas() {
    console.log("X: " + this.posX + ", Y:" + this.posY);
  }
}

class Astronauta {
  /**
   * Constructor de la clase Astronauta.
   * @param {HTMLElement} areaTrabajo - Área de trabajo del juego.
   * @param {Array} planetas - Array de planetas en el juego.
   */
  constructor(areaTrabajo, planetas) {
    this.planetas = planetas;
    this.posX = getRandom(0, 100);
    this.posY = getRandom(50, window.innerHeight - 250);
    this.astro = document.createElement("div");
    this.astro.classList.add("astronauta");
    this.astro.style.left = this.posX + "px";
    this.astro.style.top = this.posY + "px";
    this.astro.style.display = "none";

    // Insertamos el astronauta en el DOM.
    areaTrabajo.append(this.astro);
  }

  /**
   * Método para mostrar el astronauta en la pantalla.
   */
  mostrar() {
    this.astro.style.display = "block";
    this.astro.classList.add("bounce");
  }

  /**
   * Método para hacer que el astronauta viaje a un planeta.
   * @param {number} index - Índice del planeta al que viajará el astronauta.
   */
  viajarAlPlaneta(index) {
    console.log("El astronauta viaja al planeta " + index + "...");
    var planeta = this.planetas[index];
    planeta.mostrarCoordenadas();

    var distanciaX = planeta.posX - this.posX;
    var distanciaY = planeta.posY - this.posY;

    console.log(
      "El astronauta debe moverse: " + distanciaX + ", " + distanciaY
    );

    this.astro.classList.remove("bounce");
    setTimeout(() => {
      this.astro.style["transform"] =
        "translate(" + distanciaX + "px, " + distanciaY + "px)";
    }, 500);

    setTimeout(() => {
      this.planetas[index].mostrarDialogo();
    }, 3500);
  }
}

class Pregunta {
  /**
   * Constructor de la clase Pregunta.
   * @param {HTMLElement} contenedorDialog - Contenedor del diálogo de la pregunta.
   * @param {Object} data - Datos de la pregunta.
   */
  constructor(contenedorDialog, data) {
    this.contenedorDialog = contenedorDialog;
    this.respuestas = [];
    this.respuestas_desordenadas = [];
    this.categoria = data.categoria;
    this.pregunta = data.pregunta;
    this.respuesta_correcta = data.respuesta;

    this.respuestas.push(data.respuesta);
    this.respuestas.push(data.incorrecta1);
    this.respuestas.push(data.incorrecta2);
    this.respuestas.push(data.incorrecta3);
  }

  /**
   * Método para mezclar aleatoriamente las respuestas de la pregunta.
   */
  randomRespuestas() {
    let numeros_random = [];
    let random = 0;
    for (let i = 0; i < this.respuestas.length; i++) {
      random = getRandom(0, 4);
      if (!numeros_random.includes(random)) {
        numeros_random.push(random);
      } else {
        i--;
      }
    }
    numeros_random.forEach((n) => {
      this.respuestas_desordenadas.push(this.respuestas[n]);
    });
  }

  /**
   * Método para mostrar el diálogo de la pregunta.
   */
  mostrarDialog() {
    this.randomRespuestas();
    this.contenedorDialog.style.display = "block";
    this.contenedorDialog.querySelectorAll(".categoria")[0].innerHTML =
      this.categoria;
    this.contenedorDialog.querySelectorAll(".pregunta")[0].innerHTML =
      this.pregunta;
    this.contenedorDialog.querySelectorAll(".btn")[0].innerHTML =
      this.respuestas_desordenadas[0];
    this.contenedorDialog.querySelectorAll(".btn")[1].innerHTML =
      this.respuestas_desordenadas[1];
    this.contenedorDialog.querySelectorAll(".btn")[2].innerHTML =
      this.respuestas_desordenadas[2];
    this.contenedorDialog.querySelectorAll(".btn")[3].innerHTML =
      this.respuestas_desordenadas[3];
  }

  /**
   * Método para verificar si la respuesta seleccionada es correcta.
   * @param {number} index_respuesta - Índice de la respuesta seleccionada.
   * @returns {boolean} - true si la respuesta es correcta, false en caso contrario.
   */
  verificarRespuesta(index_respuesta) {
    return (
      this.respuestas_desordenadas[index_respuesta] == this.respuesta_correcta
    );
  }

  /**
   * Método para ocultar el diálogo de la pregunta.
   */
  ocultarDialog() {
    this.contenedorDialog.style.display = "none";
  }
}
