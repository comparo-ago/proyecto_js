let numeroSecreto = '13'
let ingresar = false


for (let i = 4; i >= 0; i--) {
    let numeroIngresado = prompt('Dime un número del 1 al 20, si le aciertas seguire preguntando. Tienes' + (i + 1) + 'intentos.');
    if (numeroSecreto === numeroIngresado) {
        alert('Felicitaciones, acertaste');
        ingresar = true;
        break;
    } else {
        alert('Te queda' + i + 'intentos.');
    }
}

if (ingresar) {
    let primerPregunta = prompt('¿Cómo la estas pasando hoy?: \n1 - bien.  \n2 - mal. \n3 - más o menos.  \nPresiona x para finalizar.');

    switch (primerPregunta) {
        case '1':
            alert('Me alegra que estes bien, yo por suerte también')

            let segundaPregunta = prompt('¿Quieres jugar un juego?: \n1 - Dale, me copa.  \n2 - No, gracias .');

            switch (segundaPregunta) {
                case '1':
                    alert('Te mentí, no tengo ningún juego, me falta imaginación')
                    break;
                case '2':
                    alert('Bueno, hasta luego')
                    break;
                default:
                    alert('Elegiste una opción invalida')
                    break;
            }
            break;
        case '2':
            alert('¿Cómo es eso?¿Hay algo en lo que pueda ayudar?')

            break;
        case '3':
            alert('Bueno, espero que con esto te levante el animo')
            break;
        default:
            alert('opción invalida')
            break;

    }
    alert('Adios')
}