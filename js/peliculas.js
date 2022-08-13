let peliculasCartelera = [{
        id: 1,
        titulo: "Lightyear",
        anio: 2022,
        genero: "animación",
        duracion: "100min",

    },
    {
        id: 2,
        titulo: "El perro Samurai",
        anio: 2022,
        genero: "animación",
        duracion: "90min",
    },
    {
        id: 3,
        titulo: "DC Liga de Supermarscotas",
        anio: 2022,
        genero: "animación",
        duracion: "106min",

    },
    {
        id: 4,
        titulo: "Minions, nace un Villano",
        anio: 2022,
        genero: "animación",
        duracion: "87min",
    },

    {
        id: 5,
        titulo: "Toy Story 4",
        anio: 2022,
        genero: "animación",
        duracion: "90min",
    },
    {
        id: 6,
        titulo: "La ciudad perdida",
        anio: 2022,
        genero: "acción",
        duracion: "130min",
    },
    {
        id: 7,
        titulo: "Jurassic Worl Dominio",
        anio: 2022,
        genero: "aventuras",
        duracion: "128min",
    },
    {
        id: 8,
        titulo: "Tren bala",
        anio: 2022,
        genero: "acción",
        duracion: "126min",
    },
    {
        id: 9,
        titulo: "Top Gun, Maverick",
        anio: 2022,
        genero: "acción",
        duracion: "131min",
    },
    {
        id: 10,
        titulo: "Thor, el mundo oscuro ",
        anio: 2022,
        genero: "ciencia ficción",
        duracion: "128min",
    },
    {
        id: 11,
        titulo: "Perdiendo el norte",
        anio: 2022,
        genero: "comedia",
        duracion: "90min",
    },
    {
        id: 12,
        titulo: "30 noches con mi ex",
        anio: 2022,
        genero: "comedia",
        duracion: "95min",
    },
    {
        id: 13,
        titulo: "Buena suerte Leo",
        anio: 2022,
        genero: "comedia",
        duracion: "97min",
    },
    {
        id: 14,
        titulo: "El teléfono negro",
        anio: 2022,
        genero: "terror",
        duracion: "104min",
    },
    {
        id: 15,
        titulo: "La habitación del horror",
        anio: 2022,
        genero: "terror",
        duracion: "98min",
    },
]

//codigo de prueba

const agregarBtn = document.querySelectorAll('.readMore_btn ');
let carrito = [];
const tbody = document.querySelector('.tbody')
const btnVaciar = document.querySelector('.vaciarCarrito');

agregarBtn.forEach(btn => {
    btn.addEventListener('click', agregarAlCarrito)
})

function agregarAlCarrito(e) {
    const button = e.target;
    const item = button.closest('.card');
    const itemTitulo = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.movie').src;

    const newItem = {
        titulo: itemTitulo,
        precio: parseFloat(itemPrecio),
        img: itemImg,
        cantidad: 1,
    }


    aniadirItemCarrito(newItem);
}

function aniadirItemCarrito(item) {

    const inputElemento = tbody.getElementsByClassName('inputElemento')

    for (let index = 0; index < carrito.length; index++) {
        if (carrito[index].titulo.trim() === item.titulo.trim()) {
            carrito[index].cantidad++;
            const inputValue = inputElemento[index];
            inputValue.value++;
            carritoTotal();
            return null;
        }
    }

    carrito.push(item);
    crearCarrito();
}

function crearCarrito() {
    tbody.innerHTML = '';
    carrito.map(item => {
        const tr = document.createElement('tr');
        tr.classList.add('itemCarrito')
        const Content = `

        <th scope="row" class="text-light text-center">1</th>
                <td class="table__productos pt-3">
                    <img class=" img-thumbnail rounded mx-auto d-block" src=${item.img}>
                    <h6 class="title text-light text-center pt-2">${item.titulo}</h6>
                </td>
                <td class="table__precio text-light pt-3 text-center"><p> $ ${item.precio}</p></td>
                <td class="table__cantidad pt-3 d-flex justify-content-center ">
                    <input  type="number"min="1" value=${item.cantidad} class="text-center inputElemento">
                    <button class="delete btn btn-danger"> X </button>
                </td>

        `
        tr.innerHTML = Content;
        tbody.append(tr);

        tr.querySelector('.delete').addEventListener('click', removerItemCarrito);
        tr.querySelector('.inputElemento').addEventListener('change', sumarCantidad)
    })
    carritoTotal();
}



function carritoTotal() {
    let total = 0;
    const itemCarritoTotal = document.querySelector('.precioCambiar');
    carrito.forEach((item) => {
        const precio = (item.precio)
        total += precio * item.cantidad
    })
    itemCarritoTotal.innerHTML = "$" + total;
    addLocalStorage();
}

function removerItemCarrito(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest(".itemCarrito");

    const titulo = tr.querySelector('.title').textContent;
    for (let index = 0; index < carrito.length; index++) {

        if (carrito[index].titulo.trim() === titulo.trim()) {
            carrito.splice(index, 1)
        }
    }

    tr.remove();
    carritoTotal();

}

function sumarCantidad(e) {
    const sumaInput = e.target;
    const tr = sumaInput.closest('.itemCarrito');
    const titulo = tr.querySelector('.title').textContent;
    carrito.forEach(item => {
        if (item.titulo.trim() === titulo) {
            if (sumaInput.value < 1) {
                sumaInput = 1;
            } else {
                item.cantidad = sumaInput.value;
                carritoTotal();

            }
        }
    })
}

function addLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        crearCarrito();
    }
}



btnVaciar.addEventListener('click',()=>{
    tr = document.querySelectorAll("tr");
    carrito = [];
    tbody.innerHTML = '';
    carritoTotal();
})