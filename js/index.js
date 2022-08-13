//pelicula1
//todos los botones para ver más info
//readMore_btn
let readMore_btn = document.querySelectorAll('.btn-light');

readMore_btn.forEach(btn => {
  btn.addEventListener('click', intercambiar);
});


function intercambiar() {
  let spanTexto = this.parentElement.querySelector('.hideText'); //Acá, el this hace referencia al elemento sobre el cual se está aplicando la función, en este caso, es el boton de ver más
  spanTexto.classList.toggle('showText');

  if (spanTexto.classList.contains('showText')) {
    this.innerHTML = 'Ver Menos'
  }
  else {
    this.innerHTML = 'Ver Mas'
  }
}




