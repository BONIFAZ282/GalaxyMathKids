// Obtén el elemento del nombre de usuario por su ID
let nombreUsuario = document.getElementById("nombreUsuario");

// Función asociada al botón "Jugar"
function botonJugar() {
    // Verifica si el campo de nombre de usuario está vacío
    if (nombreUsuario.value == "") {
        // Agrega la clase de animación de parpadeo si el campo está vacío
        nombreUsuario.classList.add("parpadeo");
        
        // Establece un temporizador para quitar la clase después de 3000 milisegundos (3 segundos)
        let timer = setTimeout(function () {
            nombreUsuario.classList.remove("parpadeo");
        }, 3000);
    } else {
        // Almacena el nombre de usuario en el almacenamiento local
        localStorage.setItem("jugador", nombreUsuario.value);
        
        // Redirige a la página de niveles
        location.href = "/html/niveles/niveles.html";
    }
    // Evita que el formulario se envíe y la página se recargue
    return false;
}

// Función asociada al botón "Reglas"
function botonReglas() {
    // Verifica si el campo de nombre de usuario está vacío
    if (nombreUsuario.value == "") {
        // Agrega la clase de animación de parpadeo si el campo está vacío
        nombreUsuario.classList.add("parpadeo");
        
        // Establece un temporizador para quitar la clase después de 3000 milisegundos (3 segundos)
        let timer = setTimeout(function () {
            nombreUsuario.classList.remove("parpadeo");
        }, 3000);
    } else {
        // Almacena el nombre de usuario en el almacenamiento local
        localStorage.setItem("jugador", nombreUsuario.value);
        
        // Redirige a la página de reglas
        location.href = "/html/otros/reglas.html";
    }
    // Evita que el formulario se envíe y la página se recargue
    return false;
}
