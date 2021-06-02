$(document).ready(function(){
    AOS.init({ once: true });
    $('#day').countdown('2021/06/04', function(event) {
        $(this).html(event.strftime('%dd'));
    });
    $('#hour').countdown('2021/06/04', function(event) {
        $(this).html(event.strftime('%Hh'));
    });
    $('#minute').countdown('2021/06/04', function(event) {
        $(this).html(event.strftime('%Mm'));
    });
    $('#second').countdown('2021/06/04', function(event) {
        $(this).html(event.strftime('%Ss'));
    });
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "close"
        ],
    });    
});