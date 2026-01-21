
function actualizarMontoInfo() {
    document.getElementById("balance-info").textContent = formatearMoneda(balance);

}


const formDeposit = document.getElementById("form-deposit");

formDeposit.addEventListener("submit", function (event) {
    event.preventDefault();

    let monto = document.getElementById("monto").value;

    monto = Number(monto)

    agregarBalance(monto);
    actualizarMontoInfo();

});



function main() {
    actualizarMontoInfo();
}

main();