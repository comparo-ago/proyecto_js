/*let numeroSecreto = '13'
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
*/

let precioEntrada = '1300'
let usuario = 'matias'
let contraseña = '1234'
let ingresar = false


alert('Bienvenido/a a nuestro sitio de compra de entradas')
let preguntaRegistro = alert('A continuación inicie sesión');


for (let i = 2; i >= 0; i--) {
    let usuarioIngresado = prompt('Escribe tu nombre de usuario. Tienes ' + (i + 1) + 'intentos.');
    let contraseñaIngresada = prompt('Escriba su contraseña. Tienes ' + (i + 1) + 'intentos.')
    if (usuarioIngresado === usuario) {
        alert('Bienvenido ' + usuario);
        ingresar = true;
        break;
    } else {
        alert('Te queda' + i + 'intentos.');
    }

    if (contraseñaIngresada === contraseña) {
        alert('Bienvenido ' + usuario);
        ingresar = true;
        break;
    } else {
        alert('Te queda' + i + 'intentos.');
    }
}



if (ingresar) {
    let primerPregunta = prompt('¿Para que función desea comprar entrada?: \n1 - Minions, nace un Villano.  \n2 - After, almas perdidas. \n3 - After, en mil pedazos. \n4 - Thor amor y trueno');

    switch (primerPregunta) {
        case '1':
            alert('El monto de la entrada es de $1300')
            break;
        case '2':
            alert('El monto de la entrada es de $1300')
            break;
        case '3':
            alert('El monto de la entrada es de $1300')
            break;
        case '4':
            alert('El monto de la entrada es de $1300')
            break;
        default:
            alert('Elegiste una opción invalida')
            break;
    }

}

let cantidadDeEntradas = prompt('Por favor ingrese la cantidad de entradas que desea comprar')

//calculo

let total = precioEntrada * cantidadDeEntradas;
alert('El monto total es de ' + total);


let totalConDescuento = total / 2;
alert('Por ser un dia de descuento su entrada sera de ' + totalConDescuento)


//continuar o finalizar compra


let finalizarCompra = prompt('¿Desea fenalizar su compra?: \n1 - si. : \n2 - no.')
continuar = true
switch (finalizarCompra) {
    case '1':
        alert('Hasta luego')
        break;
    case '2':

        break;
    default:
        break;

}