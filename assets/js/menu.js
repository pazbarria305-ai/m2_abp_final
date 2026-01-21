


function mostrarMensaje(mensaje, pagina) {
    let mensajeInfo = document.getElementById("mensaje-info");
    mensajeInfo.textContent = mensaje;

    setTimeout(function () {
        window.location.href = pagina;
    }, 2000);
}


document.getElementById("btn-deposit").addEventListener("click", function (event) {

    let mensaje = "Redirigiendo a la página de depósitos";
    mostrarMensaje(mensaje, "deposit.html");

});

document.getElementById("btn-sendmoney").addEventListener("click", function (event) {

    let mensaje = "Redirigiendo a la página de envío de dinero";
    mostrarMensaje(mensaje, "sendmoney.html");

});

document.getElementById("btn-transaction").addEventListener("click", function (event) {

    let mensaje = "Redirigiendo a la página de transacciones";
    mostrarMensaje(mensaje, "transaction.html");

});



function main() {

    document.getElementById("balance-info").textContent = formatearMoneda(balance);
}

main();