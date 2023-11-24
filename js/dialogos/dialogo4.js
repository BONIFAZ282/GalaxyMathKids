// Obtención de referencias a los botones de diálogo
const btnDialogo1 = document.getElementById('dialogo1');
const btnDialogo2 = document.getElementById('dialogo2');
const btnDialogoAstro1 = document.getElementById('dialogoAstro1');
const btnDialogoCombi = document.getElementById('dialogoCombi');

// Agregar eventos de escucha a los botones de diálogo
btnDialogo1.addEventListener('click', function() {
    // Ocultar el primer diálogo y mostrar el segundo
    const dialogo1 = document.querySelector('.dialogo1');
    const dialogo2 = document.querySelector('.dialogo2');
    dialogo1.style.display = 'none';
    dialogo2.style.display = 'block';
});

btnDialogo2.addEventListener('click', function() {
    // Ocultar el segundo diálogo y mostrar el del primer astronauta
    const dialogo2 = document.querySelector('.dialogo2');
    const dialogoAstro1 = document.querySelector('.dialogoAstro1');
    dialogo2.style.display = 'none';
    dialogoAstro1.style.display = 'block';
});

btnDialogoAstro1.addEventListener('click', function() {
    // Ocultar el diálogo del primer astronauta y mostrar el combinado
    const dialogoAstro1 = document.querySelector('.dialogoAstro1');
    const dialogoCombi = document.querySelector('.dialogoCombi');
    dialogoAstro1.style.display = 'none';
    dialogoCombi.style.display = 'block';
});

btnDialogoCombi.addEventListener('click', function() {
    // Redireccionar a la página 2Completado.html
    location.href = "/html/niveles/2Completado.html";
});
