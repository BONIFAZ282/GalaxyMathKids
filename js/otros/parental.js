// Declaración de una lista vacía para almacenar los niños
let listaNinos = [];

// Definición de un objeto para representar a un niño
const objNino = {
    id: '',
    nombre: '',
    apellido: '',
    edad: '',
    tiempo: '',
    puntuacion: '',
}

// Variable para controlar si se está editando un niño o no
let editando = false;

// Obtención de referencias a los elementos del formulario
const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const edadInput = document.querySelector('#edad');
const tiempoInput = document.querySelector('#tiempo');
const puntuacionInput = document.querySelector('#puntuacion');
const btnAgregarInput = document.querySelector('#btnAgregar');

// Agregar un evento de escucha al formulario para validar los datos ingresados
formulario.addEventListener('submit', validarFormulario);

// Función para validar el formulario al momento de enviarlo
function validarFormulario(e) {
    e.preventDefault();

    if (editando) {
        editarNino();
        editando = false;
    } else {
        // Asignar valores del formulario al objeto niño
        objNino.id = Date.now();
        objNino.nombre = nombreInput.value;
        objNino.apellido = apellidoInput.value;
        objNino.edad = edadInput.value;
        objNino.tiempo = tiempoInput.value;
        objNino.puntuacion = puntuacionInput.value;

        // Agregar el niño a la lista
        agregarNino();
    }
}

// Función para agregar un niño a la lista
function agregarNino() {
    // Agregar una copia del objeto niño a la lista
    listaNinos.push({ ...objNino });

    // Mostrar la lista de niños en el HTML
    mostrarNinos();

    // Reiniciar el formulario y limpiar el objeto niño
    formulario.reset();
    limpiarObjeto();
}

// Función para limpiar el objeto niño
function limpiarObjeto() {
    objNino.id = '';
    objNino.nombre = '';
    objNino.apellido = '';
    objNino.edad = '';
    objNino.tiempo = '';
    objNino.puntuacion = '';
}

// Función para mostrar la lista de niños en el HTML
function mostrarNinos() {
    // Limpiar el contenido HTML anterior
    limpiarHTML();

    // Obtener referencia al elemento contenedor de los niños
    const divNinos = document.querySelector('.div-ninos');

    // Iterar sobre la lista de niños y crear elementos HTML para mostrarlos
    listaNinos.forEach(nino => {
        const { id, nombre, apellido, edad, tiempo, puntuacion } = nino;

        // Crear un párrafo para mostrar los datos del niño
        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} ${apellido} - ${edad} - ${tiempo} - ${puntuacion}`;
        parrafo.dataset.id = id;

        // Crear una línea horizontal para separar los niños
        const hr = document.createElement('hr');

        // Agregar el párrafo y la línea horizontal al contenedor
        divNinos.appendChild(parrafo);
        divNinos.appendChild(hr);
    });
}

// Función para cargar los datos de un niño en el formulario para editar
function cargarNino(nino) {
    const { id, nombre, apellido, edad, tiempo, puntuacion } = nino;

    // Asignar los valores del niño al formulario
    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    edadInput.value = edad;
    tiempoInput.value = tiempo;
    puntuacionInput.value = puntuacion;

    // Asignar el ID del niño al objeto niño
    objNino.id = id;

    // Cambiar el texto del botón de envío del formulario a "Actualizar"
    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    // Establecer la variable de edición a true
    editando = true;
}


// Función para limpiar el contenido HTML del contenedor de niños
function limpiarHTML() {
    const divNinos = document.querySelector('.div-ninos');
    while (divNinos.firstChild) {
        divNinos.removeChild(divNinos.firstChild);
    }
}
