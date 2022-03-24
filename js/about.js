$(function () {
  // Programación para el botón de ir arriba
  let btnTop = document.getElementById("btn-top");

  window.addEventListener("scroll", function () {
    let scroll = document.documentElement.scrollTop,
      fullSize = document.documentElement.offsetHeight,
      sizeVP = document.documentElement.clientHeight;

    if (scroll > 150) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }

    if (fullSize == scroll + sizeVP) {
      btnTop.classList.add("scrollFinal");
    } else {
      btnTop.classList.remove("scrollFinal");
    }
  });

  // btnTop.addEventListener('click', function(){
  //   window.scrollTo(0, 0);
  // });

  $("#btn-top").click(function () {
    window.scrollTo(0, 0);
  });

  // Acordeón para la sección "Sobre mí"
  $('#acordeon').accordion();

});
