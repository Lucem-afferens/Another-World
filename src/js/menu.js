$(document).ready(function() {
    $('#nav-icon2').click(function(){
        $(this).toggleClass('open');
        $('.nav_visible').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
        $('container').toggleClass('container-brightness');
    });
});