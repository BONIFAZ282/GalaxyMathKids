let listaNinos = [];

const objEmpleado = {
    id: '',
    nombre: '',
    apellido: '',
    edad: '',
    tiempo: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const apellidoInput = document.querySelector('#apellido');
const edadInput = document.querySelector('#edad');
const tiempoInput = document.querySelector('#tiempo');
const btnAgregarInput = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario); wwwww

function validarFormulario(e) {
    e.preventDefault();

    if (editando) {
        editarEmpleado();
        editando = false;
    } else {
        objEmpleado.id = Date.now();
        objEmpleado.nombre = nombreInput.value;
        objEmpleado.apellido = apellidoInput.value;
        objEmpleado.edad = edadInput.value;
        objEmpleado.tiempo = tiempoInput.value;

        agregarEmpleado();
    }
}

function agregarEmpleado() {

    listaNinos.push({ ...objEmpleado });

    mostrarNinos();

    formulario.reset();
    limpiarObjeto();
}

function limpiarObjeto() {
    objEmpleado.id = '';
    objEmpleado.nombre = '';
    objEmpleado.apellido = '';
    objEmpleado.edad = '';
    objEmpleado.tiempo = '';
}

function mostrarNinos() {
    limpiarHTML();

    const divNinos = document.querySelector('.div-ninos');

    listaNinos.forEach(empleado => {
        const { id, nombre, apellido, edad, tiempo } = empleado;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${nombre} - ${apellido} - ${edad} - ${tiempo}`;
        parrafo.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => cargarEmpleado(empleado);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => eliminarEmpleado(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divNinos.appendChild(parrafo);
        divNinos.appendChild(hr);
    });
}

function cargarEmpleado(empleado) {
    const { id, nombre, apellido, edad } = empleado;

    nombreInput.value = nombre;
    apellidoInput.value = apellido;
    edadInput.value = edad;
    tiempoInput.value = tiempo;

    objEmpleado.id = id;

    formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

    editando = true;
}

function editarEmpleado() {

    objEmpleado.nombre = nombreInput.value;
    objEmpleado.apellido = apellidoInput.value;
    objEmpleado.edad = edadInput.value;
    objEmpleado.tiempo = tiempoInput.value;

    listaninos.map(empleado => {

        if (empleado.id === objEmpleado.id) {
            empleado.id = objEmpleado.id;
            empleado.nombre = objEmpleado.nombre;
            empleado.apellido = objEmpleado.apellido;
            empleado.edad = objEmpleado.edad;
            empleado.tiempo = objEmpleado.tiempo;
        }
    });

    limpiarHTML();
    mostrarNinos();
    formulario.reset();

    formulario.querySelector('button[type="submit"]').textContent = 'Agregar';

    editando = false;
}

function eliminarEmpleado(id) {

    listaNinos = listaNinos.filter(empleado => empleado.id !== id);

    limpiarHTML();
    mostrarNinos();
}

function limpiarHTML() {
    const divNinos = document.querySelector('.div-ninos');
    while (divNinos.firstChild) {
        divNinos.removeChild(divNinos.firstChild);
    }
}