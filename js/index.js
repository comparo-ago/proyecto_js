//peliucla1
let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggleText);

function toggleText() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Ver Menos'
  }
  else {
    readMore_btn.innerHTML = 'Ver Mas'
  }
}

//pelicula2

