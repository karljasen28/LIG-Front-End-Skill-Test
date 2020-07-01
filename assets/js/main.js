$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#arrow_up').fadeIn();
    } else {
        $('#arrow_up').fadeOut();
    }
});
$(document).ready(function() {
    $("#arrow_up").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});