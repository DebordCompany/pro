window.onload = function () {
  // cartel cookies
  const privacidad = document.querySelector(".cookies");

  if (!localStorage.getItem("cookies-aceptadas") == true) {
    privacidad.classList.add("activo");
  }

  privacidad.addEventListener("click", ocultar);
  function ocultar() {
    privacidad.classList.remove("activo");
    localStorage.setItem("cookies-aceptadas", true);
  }

  // menu interactivo

  const boton = document.getElementById("accion");
  const menu = document.getElementById("hide");
  const quitar = document.querySelector("ul");
  const fuera = document.querySelector(".main");

  boton.addEventListener("click", desplegar);
  quitar.addEventListener("click", recoger);
  fuera.addEventListener("click", recoger);

  function desplegar(desplegar) {
    menu.classList.toggle("desplegable");
  }
  function recoger(recoger) {
    menu.classList.remove("desplegable");
  }
  // avance a contacto

  var contacto = document.getElementById("contacto");
  var seccion = document.querySelector(".contacto");
  var avance = document.querySelector(".avance");

  contacto.addEventListener("click", mover);
  avance.addEventListener("click", mover);

  function mover() {
    seccion.scrollIntoView({ behavior: "smooth" });
  }
  // politica de privacidad
  const minimo = document.querySelector(".minimo");
  const texto = document.querySelector(".texto");

  minimo.addEventListener("click", abrir);
  function abrir() {
    texto.classList.toggle("desplegar");
  }
};
