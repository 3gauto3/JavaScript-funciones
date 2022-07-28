let librosParaLeer = 19;
let opcion;

function registrarLibrosLeidos(cant) {
    if(librosParaLeer >= cant) {
        librosParaLeer = librosParaLeer - cant;
        alert(`Quedan ${librosParaLeer} libros para leer`);
    } else {
        alert(`No quedan ${librosParaLeer} por leer`);
    }
}

do {
    opcion = prompt('Elegí un ítem:\n\n1 - Registrar libros leidos\n2 - Finalizar');
    let cant;

    switch (opcion) {
        case '1':
            cant = parseInt(prompt("Registrar libros leidos"));
            registrarLibrosLeidos(cant);
            break;

            break;
        case '2':
            alert("Has finalizado");
            break;
        default:
            alert("INCORRECTO");
            break;
    }

} while(opcion != '3');