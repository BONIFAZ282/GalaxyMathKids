document.addEventListener("DOMContentLoaded", function () {
    const btnDescargarManual = document.getElementById("btnDescargarManual");
    if (btnDescargarManual) {
        btnDescargarManual.addEventListener("click", descargarManual);
    }
});

function descargarManual() {
    // Ruta al archivo PDF existente
    const rutaPDF = "/pdf/TERCER-AVANCE.pdf";

    // Crear un enlace <a> con un atributo download para descargar el archivo
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = rutaPDF;
    enlaceDescarga.download = 'manualPadre.pdf'; // Nombre del archivo

    // Simular un clic en el enlace para iniciar la descarga
    enlaceDescarga.click();
}
