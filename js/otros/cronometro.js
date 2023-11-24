// Variables para el cronómetro
let tiempoRef = Date.now(); // Referencia de tiempo inicial
let cronometrar = false; // Bandera para controlar el cronómetro
let acumulado = 0; // Tiempo acumulado

// Función para iniciar el cronómetro
function iniciar() {
    cronometrar = true;
}

// Función para pausar el cronómetro
function pausar() {
    cronometrar = false;
}

// Función para reiniciar el cronómetro
function reiniciar() {
    acumulado = 0;
}

// Función que se ejecuta cada 1/60 de segundo (aproximadamente)
setInterval(() => {
    let tiempo = document.getElementById("tiempoCronometro"); // Elemento HTML que muestra el tiempo
    if (cronometrar) {
        acumulado += Date.now() - tiempoRef; // Actualiza el tiempo acumulado
    }
    tiempoRef = Date.now(); // Actualiza la referencia de tiempo
    tiempo.innerHTML = formatearMS(acumulado); // Muestra el tiempo formateado en el elemento HTML
}, 1000 / 60);

// Función para formatear milisegundos a formato HH:MM:SS.MMM
function formatearMS(tiempo_ms) {
    let MS = tiempo_ms % 1000; // Obtén los milisegundos

    let St = Math.floor(((tiempo_ms - MS) / 1000)); // Calcula los segundos totales

    let S = St % 60; // Calcula los segundos
    let M = Math.floor((St / 60) % 60); // Calcula los minutos
    let H = Math.floor((St / 60 / 60)); // Calcula las horas

    // Prototipo para agregar ceros a la izquierda
    Number.prototype.ceros = function (n) {
        return (this + "").padStart(n, 0);
    }

    // Devuelve el tiempo formateado
    return H.ceros(2) + ":" + M.ceros(2) + ":" + S.ceros(2) + "." + MS.ceros(3);
}
