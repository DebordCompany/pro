// cambio de texto e imagen

var titular = document.querySelector("#titular");
var titular02 = document.querySelector("#titular02");
var titular03 = document.querySelector("#titular03");
var titular04 = document.querySelector("#titular04");
var titular05 = document.querySelector("#titular05");
var imagen = document.getElementById("imagen");
console.log(
  "Hola, si estas mirando el codigo para saber como esta hecha la web, no dudes en contactarme y yo mismo te lo explico. Muchas gracias"
);
window.onscroll = function () {
  if (window.scrollY > 1400 && window.scrollY < 1700) {
    titular.classList.add("aparece");
    imagen.src = "/media/iphone-mockup.png";
  } else if (window.scrollY > 1700) {
    titular.classList.remove("aparece");
  }
  if (window.scrollY > 1700 && window.scrollY < 2000) {
    titular02.classList.add("aparece");
    imagen.src = "/media/ipad-mockup.png";
  } else if (window.scrollY < 1700 || window.scrollY > 2000) {
    titular02.classList.remove("aparece");
  }
  if (window.scrollY > 2000 && window.scrollY < 2300) {
    titular03.classList.add("aparece");
    imagen.src = "/media/iphone-mockup-design.png";
  } else if (window.scrollY < 2000 || window.scrollY > 2300) {
    titular03.classList.remove("aparece");
  }
  if (window.scrollY > 2300 && window.scrollY < 2600) {
    titular04.classList.add("aparece");
    imagen.src = "/media/iphone-mockup-cv.png";
  } else if (window.scrollY < 2300 || window.scrollY > 2600) {
    titular04.classList.remove("aparece");
  }
  if (window.scrollY > 2600 && window.scrollY < 2800) {
    titular05.classList.add("aparece");
    imagen.src = "/media/iphone-mockup-cv.png";
  } else if (window.scrollY < 2600 || window.scrollY > 3500) {
    titular05.classList.remove("aparece");
  }
};
// movimiento a inicio
var boton = document.querySelector("#subir");
var inicio = document.querySelector("nav");

boton.addEventListener("click", mover);

function mover() {
  inicio.scrollIntoView({ behaivor: "smooth" });
  console.log("hola");
}
