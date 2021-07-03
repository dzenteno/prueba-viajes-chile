$(document).ready(function () {

  $('.carousel').carousel({
    interval: 4000
  })
  // Evento click
  $("a").click(function (event) {
    event.preventDefault();

    // SmoothScroll - variable gato guarda los id
    let gato = this.hash;
    $("html").animate({
      scrollTop: $(gato).offset().top,
    },
      800)
  })

  // tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


})

