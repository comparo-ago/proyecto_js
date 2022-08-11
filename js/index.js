//peliucla1
let readMore_btn = document.getElementById('readMore_btn');
let hideText = document.getElementById('hideText');

readMore_btn.addEventListener('click', toggle);

function toggle() {
  hideText.classList.toggle('showText');

  if(hideText.classList.contains('showText')) {
    readMore_btn.innerHTML = 'Ver Menos'
  }
  else {
    readMore_btn.innerHTML = 'Ver Mas'
  }
}

//proximamente
/*
let nuevosEstrenos = document.createElement('h5');
nuevosEstrenos.innerHTML = '<h5>Proximamente</h5>';
document.body.append(nuevosEstrenos);
*/

const nuevosEstrenos = document.querySelector("h5");

const h5 = document.createElement("h5");
h5.innerHTML = "Proximamente en estrenarse"

nuevosEstrenos.appendChild(h5)