$(document).ready(function () {
    //area 1
    $('.photo').hover(function () {
        $(this).siblings().stop().fadeTo(500, 0.5);
    }, function () {
        $(this).siblings().stop().fadeTo(500, 1);
    });
    $('.photoLine').children().hover(function () {
        $(this).siblings().stop().fadeTo(500, 0.5);
    }, function () {
        $(this).siblings().stop().fadeTo(500, 1);
    });
});