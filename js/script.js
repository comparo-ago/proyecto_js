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

//array

const cartelera = [{
    titulo: "DC Liga de Supermarscotas",
    anio: 2022,
    genero: "animacion",
    duracion: "106min",
},
{
    titulo: "Elvis",
    anio: 2022,
    genero: "Biografia",
    duracion: "160min",
},
{
    titulo: "La habitación del horror",
    anio: 2022,
    genero: "Terror",
    duracion: "98min",
},
{
    titulo: "Jurassic world dominio",
    anio: 2022,
    genero: "Aventuras",
    duracion: "147min",
}
]

console.log(cartelera);
alert("Entradas disponibles")

for ( i of cartelera){
alert(i.titulo + " " + i.anio + " " + i.genero + " " + i.duracion)
}

//fin del array



if (ingresar) {
    let primerPregunta = prompt('¿Para que función desea comprar entrada?: \n1 - DC Liga de Supermarscotas.  \n2 - Elvis. \n3 - La habitación del horror. \n4 - Jurassic world dominio.');

    switch (primerPregunta) {
        case '1':
            alert("la pelicula seleccionada es 'DC Liga de Supermarscotas'")
            alert('El monto de la entrada es de $1300')
            break;
        case '2':
            alert("la pelicula seleccionada es 'Elvis'")
            alert('El monto de la entrada es de $1300')
            break;
        case '3':
            alert("la pelicula seleccionada es 'La habitación del horror'")
            alert('El monto de la entrada es de $1300')
            break;
        case '4':
            alert("la pelicula seleccionada es 'Jurassic world dominio'")
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