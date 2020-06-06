function initail_portfolio() {
    if ($(window).width() >= 1200) {
        $('#title-port-1').css("height", "45vh");
        $('#title-port-1').css("padding-top", "55vh")
        $('#title-port-1').css("text-align", "left");
        $('#portfolio-title-1').css("font-size", "6vw");
    } else if ($(window).width() < 1200 && $(window).width() >= 768) {
        $('#title-port-1').css("height", "45vh");
        $('#title-port-1').css("padding-top", "55vh")
        $('#title-port-1').css("text-align", "left");
        $('#portfolio-title-1').css("font-size", "8vw");
    } else if ($(window).width() < 768 && $(window).width() >= 576) {
        $('#title-port-1').css("height", "40vh");
        $('#title-port-1').css("padding-top", "60vh")
        $('#title-port-1').css("text-align", "center");
        $('#portfolio-title-1').css("font-size", "8.5vw");
    } else {
        $('#title-port-1').css("height", "40vh");
        $('#title-port-1').css("padding-top", "60vh")
        $('#title-port-1').css("text-align", "center");
        $('#portfolio-title-1').css("font-size", "11vw");
    }
}

initail_portfolio();

$(window).on('resize', function () {
    if ($(window).width() >= 1200) {
        $('#title-port-1').css("height", "45vh");
        $('#title-port-1').css("padding-top", "55vh")
        $('#title-port-1').css("text-align", "left");
        $('#portfolio-title-1').css("font-size", "6vw");
    } else if ($(window).width() < 1200 && $(window).width() >= 768) {
        $('#title-port-1').css("height", "45vh");
        $('#title-port-1').css("padding-top", "55vh")
        $('#title-port-1').css("text-align", "left");
        $('#portfolio-title-1').css("font-size", "8vw");
    } else if ($(window).width() < 768 && $(window).width() >= 576) {
        $('#title-port-1').css("height", "40vh");
        $('#title-port-1').css("padding-top", "60vh")
        $('#title-port-1').css("text-align", "center");
        $('#portfolio-title-1').css("font-size", "8.5vw");
    } else {
        $('#title-port-1').css("height", "40vh");
        $('#title-port-1').css("padding-top", "60vh")
        $('#title-port-1').css("text-align", "center");
        $('#portfolio-title-1').css("font-size", "11vw");
    }

})