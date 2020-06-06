//設定初始狀態
function initail_intro() {
    if ($(window).width() >= 1200) {
        $('#main').css("height", "47vh");
        $('#main').css("margin-top", "53vh")
        $('#discription-text').css("text-align", "left");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "15px");
        $('#name').css("font-size", "8vw");
        $('#intro').css("font-size", "4vw");
        $('#detail-btn').css("padding-left", "15px");
        $('#detail').css("margin-top", "3vh");
        $('#detail').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 1200 && $(window).width() >= 768) {
        $('#main').css("height", "45vh");
        $('#main').css("margin-top", "55vh")
        $('#discription-text').css("text-align", "left");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "15px");
        $('#name').css("font-size", "10vw");
        $('#intro').css("font-size", "5vw");
        $('#detail-btn').css("padding-left", "15px");
        $('#detail').css("margin-top", "2vh");
        $('#detail').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 768 && $(window).width() >= 576) {
        $('#main').css("height", "40vh");
        $('#main').css("margin-top", "60vh")
        $('#discription-text').css("text-align", "center");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "unset");
        $('#name').css("font-size", "11vw");
        $('#intro').css("font-size", "5.5vw");
        $('#detail-btn').css("padding", "unset");
        $('#detail').css("margin-top", "unset");
        $('#detail').removeClass('btn-sm').addClass('btn-lg');
    } else {
        $('#main').css("height", "40vh");
        $('#main').css("margin-top", "60vh")
        $('#discription-text').css("text-align", "center");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "unset");
        $('#name').css("font-size", "15vw");
        $('#intro').css("font-size", "7vw");
        $('#detail-btn').css("padding", "unset");
        $('#detail').css("margin-top", "unset");
        $('#detail').removeClass('btn-lg');
        $('#detail').removeClass('btn-sm');
    }
}

initail_intro();

$(window).on('resize', function () {
    if ($(window).width() >= 1200) {
        $('#main').css("height", "47vh");
        $('#main').css("margin-top", "53vh")
        $('#discription-text').css("text-align", "left");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "15px");
        $('#name').css("font-size", "8vw");
        $('#intro').css("font-size", "4vw");
        $('#detail-btn').css("padding-left", "15px");
        $('#detail').css("margin-top", "3vh");
        $('#detail').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 1200 && $(window).width() >= 768) {
        $('#main').css("height", "45vh");
        $('#main').css("margin-top", "55vh")
        $('#discription-text').css("text-align", "left");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "15px");
        $('#name').css("font-size", "10vw");
        $('#intro').css("font-size", "5vw");
        $('#detail-btn').css("padding-left", "15px");
        $('#detail').css("margin-top", "2vh");
        $('#detail').removeClass('btn-sm').addClass('btn-lg');
    } else if ($(window).width() < 768 && $(window).width() >= 576) {
        $('#main').css("height", "40vh");
        $('#main').css("margin-top", "60vh")
        $('#discription-text').css("text-align", "center");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "unset");
        $('#name').css("font-size", "11vw");
        $('#intro').css("font-size", "5.5vw");
        $('#detail-btn').css("padding", "unset");
        $('#detail').css("margin-top", "unset");
        $('#detail').removeClass('btn-sm').addClass('btn-lg');
    } else {
        $('#main').css("height", "40vh");
        $('#main').css("margin-top", "60vh")
        $('#discription-text').css("text-align", "center");
        $('#discription-text').css("margin-bottom", "2vh");
        $('#discription-text').css("padding-left", "unset");
        $('#name').css("font-size", "15vw");
        $('#intro').css("font-size", "7vw");
        $('#detail-btn').css("padding", "unset");
        $('#detail').css("margin-top", "unset");
        $('#detail').removeClass('btn-lg');
        $('#detail').removeClass('btn-sm');
    }

})