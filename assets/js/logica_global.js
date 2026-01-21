

let balance = 0;

const balanceGuardado = localStorage.getItem("balance");
if (localStorage.getItem("balance")) {
    balance = NumberlocalStorage.getItem("balance");
} else {
    balance = 40_000;
    localStorage.setItem("balance", balance);
}

function formatearMoneda(valor) {
    let formatoBalance = valor.toLocaleString("es-CL", { style: "currency", currency: "CLP" });

    return formatoBalance;
}

function agregarBalance(monto) {
    monto = Number(monto);
    balance = Number(balance) + monto;
    // balance += monto;

    localStorage.setItem("balance", balance);
    alert("Su nuevo salado es: " + formatearMoneda(balance));
}

function retirarBalance(monto) {

    if (balance < monto) {
        alert("Usted no tiene saldo suficiente.")
    } else {
        balance = balance - monto;
        localStorage.setItem("balance", balance);
        // balance -= monto;
        alert(`Se ha descontacto un monto de (${formatearMoneda(monto)}), quedando un saldo de: ${formatearMoneda(balance)}`);
    }

}