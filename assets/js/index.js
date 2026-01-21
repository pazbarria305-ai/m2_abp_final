// 1. agregar un evento al botón iniciar sesión //

// Capturamos el elemento por su ID //
const formLogin = document.getElementById("form-login")

// Agregar el evento al elemento captura //
formLogin.addEventListener("submit", function (event) {
    // detengo el evento por defecto //
    event.preventDefault();

    // desde aquí creo la lógica que piden //

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // implementa la funcionalidad de validad las credenciales ingresadas utilizando Javascript. si las credenciales son correctas //

    if (email == "admin@admin.com" && password == "123456") {
        // este bloque se ejecuta si las condiciones son verdaderas //
        // mostrar un mensaje de éxito y redirige a la pantalla del menú principal //

        alert("Login exitoso");
        localStorage.setItem("login", true);

        location.href = "menu.html"
    } else {
        // se ejecutan cuando no se cumplan las condiciones anteriores //
        // si las credenciales son incorrectas mostrar un mensaje de error //
        alert("Email y/o contraseña incorrectos")
    }

});