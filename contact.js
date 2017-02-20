$(function () {
    $('.nav-toggle').on('click', function (e) {
        $('.sideNav').toggleClass('open');

        e.stopPropagation();
        return false;
        });

        $('*:not(.nav-toggle)').on('', function () {
        $('.sideNav').removeClass('open');
        });
});
$(function heyListen(){
$('.nav-toggle').fadeOut(1000).fadeIn(1000, heyListen);
});      