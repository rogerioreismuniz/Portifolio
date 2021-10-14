/* ------- Menu lateral ------- */

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

/* ------- Loader ------- */

$(window).on('load', function() {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(450).fadeOut('slow');
    $('body').delay(450).css({ 'overflow': 'visible' });
})


/* ------- Função alerta ------- */
function Alerta(){
    alert("Mensagem enviada!")
}