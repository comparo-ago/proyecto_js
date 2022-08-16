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