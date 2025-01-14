//codigo de login

const $btnSignIn = document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),
    $signUp = document.querySelector('.sign-up'),
    $signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }

})

//inicio de sesión

let user = 'Flor'
let contra = 'hola'
let ingresar = false

const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
})

const btnInicioSesion = document.getElementById('button')

btnInicioSesion.addEventListener("click", () => {
    let ususarioSolicitante = document.getElementById("username").value;
    let passwordSolicitante = document.getElementById("password").value;
    const InicioSolicitante = {
        "password": passwordSolicitante,
        "username": ususarioSolicitante,
    }
    localStorage.setItem("InicioSolicitante", JSON.stringify(InicioSolicitante));

    if ((user === ususarioSolicitante) && ( contra === passwordSolicitante)) {
        Swal.fire({
            icon:'success',
            title: 'Bienvenido/a ' + ususarioSolicitante + ' a Cine Hits',
            showConfirmButton: false,
            timer: 3000,
        })
        ingresar = true
    } else {
        swal.fire({
            icon: 'error',
            title: 'Acceso denegado',
            text: 'vuelva a intentarlo',
            showConfirmButton: false,
            timer: 3000,
        })
    }
})

//registro

const nombre = document.getElementById('nombre')
const email = document.getElementById('email')
const contraseña = document.getElementById('contraseña')
const button2 = document.getElementById('button2')

button2.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        nombre: nombre.value,
        email: email.value,
        contraseña: contraseña.value
    }
    console.log(data)
})

const btnRegistrarse = document.querySelector('#button2')

btnRegistrarse.addEventListener("click", () => {
    let nombreSolicitante = document.getElementById("nombre").value;
    let emailSolicitante = document.getElementById("email").value;
    let contraseñaSolicitante = document.getElementById("contraseña").value;
    const datosSolicitante = {
        "nombre": nombreSolicitante,
        "email": emailSolicitante,
        "contraseña": contraseñaSolicitante,
    }
    localStorage.setItem("datosSolicitante", JSON.stringify(datosSolicitante));
    Swal.fire({
        icon: 'success',
        title: 'Tus datos se registraron correctamente',
        text: 'Se te enviara un correo electrónico a tu cuenta con la confirmación del registro',
        showConfirmButton: false,
        timer: 5000
    })
})




//verificacion de email
/*
async function verificarEmail(emailSolicitante) {
    let API = ` https://www.disify.com/api/email/${emailSolicitante}`;
    const resp = await fetch(API);
    const dataJson = await resp.json();
    console.log(dataJson);
}



btnRegistrarse.addEventListener("click", ()=>{
verificarEmail(emailSolicitante);
})

*/