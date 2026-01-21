let transaccion1 = {
    id: 1,
    glosa: "Recepción dinero otros bancos",
    monto: 5000,
    ingreso: true,
    egreso: false
};

let transaccion2 = {
    id: 2,
    glosa: "Transferencia a otras cuentas",
    monto: 3500,
    ingreso: false,
    egreso: true
};

let historialTransacciones = [transaccion1, transaccion2];

$(function () {

    function construirBoton(transaccion) {

        let monto = transaccion.monto;

        monto = monto.toLocaleString("es-CL", {style: "currency", currency: "CLP"});




        if (transaccion.ingreso) {
            return `<span class="badge rounded-pill text-bg-success">${monto}</span>`;
        }
        if (transaccion.egreso) {
            return `<span class="badge rounded-pill text-bg-danger">${monto}</span>`;
        }
        return "";
    }

    function actualizarHistorial(historial) {
        let items = "";

        for (const transaccion of historial) {
            const { glosa } = transaccion;
            // AQUÍ estaba el error: tenías código HTML suelto fuera del string
            items += `<li class="list-group-item d-flex justify-content-between align-items-center">
                        ${glosa}
                        ${construirBoton(transaccion)}
                      </li>`;
        }

        $("#lista-transacciones").html(items);
    }

    function init() {
        actualizarHistorial(historialTransacciones);
    }

    init();
});

