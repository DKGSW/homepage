function initail_resume() {
    if ($(window).width() >= 1200) {
        $('#title-re').css("height", "35vh");
        $('#title-re').css("padding-top", "65vh")
        $('#title-re').css("text-align", "left");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "15px");
        $('#resume-title').css("font-size", "6vw");
        $('#resume-btn').css("text-align", "left");
        $('#resume-btn').css("padding-left", "15px");
        $('#resume-download').css("margin-top", "3vh");
        $('#resume-download').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 1200 && $(window).width() >= 768) {
        $('#title-re').css("height", "35vh");
        $('#title-re').css("padding-top", "65vh")
        $('#title-re').css("text-align", "left");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "15px");
        $('#resume-title').css("font-size", "8vw");
        $('#resume-btn').css("text-align", "left");
        $('#resume-btn').css("padding-left", "15px");
        $('#resume-download').css("margin-top", "2vh");
        $('#resume-download').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 768 && $(window).width() >= 576) {
        $('#title-re').css("height", "30vh");
        $('#title-re').css("padding-top", "70vh")
        $('#title-re').css("text-align", "center");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "unset");
        $('#resume-title').css("font-size", "8.5vw");
        $('#resume-btn').css("text-align", "center");
        $('#resume-btn').css("padding-left", "unset");
        $('#resume-download').css("margin-top", "unset");
        $('#resume-download').removeClass('btn-sm').addClass('btn-lg');
    } else {
        $('#title-re').css("height", "30vh");
        $('#title-re').css("padding-top", "70vh")
        $('#title-re').css("text-align", "center");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "unset");
        $('#resume-title').css("font-size", "12vw");
        $('#resume-btn').css("text-align", "center");
        $('#resume-btn').css("padding-left", "unset");
        $('#resume-download').css("margin-top", "unset");
        $('#resume-download').removeClass('btn-lg');
        $('#resume-download').removeClass('btn-sm');
    }
}

initail_resume();

$(window).on('resize', function () {
    if ($(window).width() >= 1200) {
        $('#title-re').css("height", "35vh");
        $('#title-re').css("padding-top", "65vh")
        $('#title-re').css("text-align", "left");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "15px");
        $('#resume-title').css("font-size", "6vw");
        $('#resume-btn').css("text-align", "left");
        $('#resume-btn').css("padding-left", "15px");
        $('#resume-download').css("margin-top", "3vh");
        $('#resume-download').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 1200 && $(window).width() >= 768) {
        $('#title-re').css("height", "35vh");
        $('#title-re').css("padding-top", "65vh")
        $('#title-re').css("text-align", "left");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "15px");
        $('#resume-title').css("font-size", "8vw");
        $('#resume-btn').css("text-align", "left");
        $('#resume-btn').css("padding-left", "15px");
        $('#resume-download').css("margin-top", "2vh");
        $('#resume-download').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 768 && $(window).width() >= 576) {
        $('#title-re').css("height", "30vh");
        $('#title-re').css("padding-top", "70vh")
        $('#title-re').css("text-align", "center");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "unset");
        $('#resume-title').css("font-size", "8.5vw");
        $('#resume-btn').css("text-align", "center");
        $('#resume-btn').css("padding-left", "unset");
        $('#resume-download').css("margin-top", "unset");
        $('#resume-download').removeClass('btn-sm').addClass('btn-lg');
    } else {
        $('#title-re').css("height", "30vh");
        $('#title-re').css("padding-top", "70vh")
        $('#title-re').css("text-align", "center");
        $('#title-re').css("margin-bottom", "2vh");
        $('#title-re').css("padding-left", "unset");
        $('#resume-title').css("font-size", "12vw");
        $('#resume-btn').css("text-align", "center");
        $('#resume-btn').css("padding-left", "unset");
        $('#resume-download').css("margin-top", "unset");
        $('#resume-download').removeClass('btn-lg');
        $('#resume-download').removeClass('btn-sm');
    }

})