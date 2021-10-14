/* ------- Menu lateral ------- */

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

/* ------- Video ------- */

var videoPlayer = document.getElementById("VideoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none";
    myVideo.src = "none";
}

function playVideo(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";
}

/* ------- Loader ------- */

$(window).on('load', function() {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(450).fadeOut('slow');
    $('body').delay(450).css({ 'overflow': 'visible' });
})


// Função para mostrar os demais vídeos na galeria.
function mais() {

    var hide = document.getElementById("hide-list");
    var show = document.getElementById("show-list");

    if (show.style.display == "" || show.style.display == "none") {

        hide.style.display = "none";
        show.style.display = "block";
        document.getElementById("show-list").animate([
            // keyframes
            {
                transform: 'scale(0.9)',
                opacity: '0.2'
            }, {
                transform: 'scale(1)'
            }
        ], {
            // timing options
            duration: 700,

        });


    } else if (hide.style.display == "" || hide.style.display == "none") {
        show.style.display = "none";
        hide.style.display = "block";
        document.getElementById("hide-list").animate([
            // keyframes
            {
                transform: 'scale(0.9)',
                opacity: '0.2'
            }, {
                transform: 'scale(1)'
            }
        ], {
            // timing options
            duration: 700,

        });

    }
}