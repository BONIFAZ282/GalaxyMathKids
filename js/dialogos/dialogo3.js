// Obtención de referencias a los botones de diálogo
const btnDialogo1 = document.getElementById('dialogo1');
const btnDialogo2 = document.getElementById('dialogo2');
const btnDialogo3 = document.getElementById('dialogo3');
const btnDialogo4 = document.getElementById('dialogo4');
const btnDialogoCombi = document.getElementById('dialogoCombi');
const btnDialogoAstro1 = document.getElementById('dialogoAstro1');
const btnDialogoAstro2 = document.getElementById('dialogoAstro2');

// Agregar eventos de escucha a los botones de diálogo
btnDialogo1.addEventListener('click', function() {
    // Ocultar el primer diálogo y mostrar el segundo
    const dialogo1 = document.querySelector('.dialogo1');
    const dialogo2 = document.querySelector('.dialogo2');
    dialogo1.style.display = 'none';
    dialogo2.style.display = 'block';
});

btnDialogo2.addEventListener('click', function() {
    // Ocultar el segundo diálogo y mostrar el tercero
    const dialogo2 = document.querySelector('.dialogo2');
    const dialogo3 = document.querySelector('.dialogo3');
    dialogo2.style.display = 'none';
    dialogo3.style.display = 'block';
});

btnDialogo3.addEventListener('click', function() {
    // Ocultar el tercer diálogo y mostrar el del primer astronauta
    const dialogo3 = document.querySelector('.dialogo3');
    const dialogoAstro1 = document.querySelector('.dialogoAstro1');
    dialogo3.style.display = 'none';
    dialogoAstro1.style.display = 'block';
});

btnDialogoAstro1.addEventListener('click', function() {
    // Ocultar el diálogo del primer astronauta y mostrar el cuarto
    const dialogoAstro1 = document.querySelector('.dialogoAstro1');
    const dialogo4 = document.querySelector('.dialogo4');
    dialogoAstro1.style.display = 'none';
    dialogo4.style.display = 'block';
});

btnDialogo4.addEventListener('click', function() {
    // Ocultar el cuarto diálogo y mostrar el combinado
    const dialogo4 = document.querySelector('.dialogo4');
    const dialogoCombi = document.querySelector('.dialogoCombi');
    dialogo4.style.display = 'none';
    dialogoCombi.style.display = 'block';
});

btnDialogoCombi.addEventListener('click', function() {
    // Ocultar el diálogo combinado y mostrar el del segundo astronauta
    const dialogoCombi = document.querySelector('.dialogoCombi');
    const dialogoAstro2 = document.querySelector('.dialogoAstro2');
    dialogoCombi.style.display = 'none';
    dialogoAstro2.style.display = 'block';
});

btnDialogoAstro2.addEventListener('click', function() {
    // Redireccionar a la página pagina2.html
    location.href = "/html/paginas/pagina2.html";
});
