let contacto1 = {
    nombre: "Pedro Soto",
    cbu: "111111111",
    alias: "Pedrito",
    banco: "Banco Estado"

}

let contacto2 = {
    nombre: "Margot Barria",
    cbu: "222222222",
    alias: "Mamita",
    banco: "Banco Falabella"

}

let listaContactos = [contacto1, contacto2];


$(function () {

    function mostrarContactos(contactos) {


        let elementos = "";
        for (const contacto of contactos) {

            let { nombre, cbu, alias, banco } = contacto;

            elementos +=
                `<li class="list-group-item">
                <p class="m-0">Nombre: ${nombre}, CBU: ${cbu}, Alias: ${alias}</p>
                <p class="m-0">Banco: ${banco} </p>
            </li>`;
        };

        $("#contactList").html(elementos);
    };


    function filtrarContactos(textoFiltro) {


        let listaFiltrada = listaContactos.filter(function (contacto) {

            let {nombre} = contacto; 

            nombre = nombre.toLowerCase();
            
            textoFiltro = textoFiltro.toLowerCase();

            return nombre.includes(textoFiltro);

    
        });

        mostrarContactos(listaFiltrada);

    }


    function init() {
        mostrarContactos(listaContactos);
    }

    init();






    // eventos barra de busqueda

    $("#buscarcontacto").on("input", function () {
        let textoBusqueda = $(this).val();

        filtrarContactos(textoBusqueda);
    })

});

