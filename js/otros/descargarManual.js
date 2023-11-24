// Espera a que el contenido del documento esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    // Obtén una referencia al botón de descarga del manual
    const btnDescargarManual = document.getElementById("btnDescargarManual");

    // Verifica si el botón existe antes de agregar el evento
    if (btnDescargarManual) {
        // Agrega un evento de clic al botón para ejecutar la función descargarManual
        btnDescargarManual.addEventListener("click", descargarManual);
    }
});

// Función que inicia la descarga del manual en formato PDF
function descargarManual() {
    // Ruta al archivo PDF existente en el servidor
    const rutaPDF = "/pdf/manual.pdf";

    // Crea un elemento de enlace <a> con un atributo download para la descarga del archivo
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = rutaPDF;
    enlaceDescarga.download = 'MANUAL.pdf'; // Nombre del archivo que se descargará

    // Simula un clic en el enlace para iniciar la descarga del archivo
    enlaceDescarga.click();
}
