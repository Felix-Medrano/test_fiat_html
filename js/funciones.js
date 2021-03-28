$("div.opciones button").click(function (e) {
  $("form button.seleccionado").removeClass("seleccionado");
  $(this).addClass("seleccionado");
  e.preventDefault();
});

$("#Formaspago button").click(function () {
  $("#Formaspago button.seleccionado").removeClass("seleccionado");
  $(this).addClass("seleccionado");
});

$("header .contenedor a").click(function (e) {
  // alert("La Pagina esta lista");
  var click = $(this).attr("href");
  jQuery(".hamb i").toggleClass("fa-times");
  jQuery("header .contenedor .menu").toggleClass("open");
});
