$(document).ready(function() {

	/************** SPLASH BUTTONS ****************/

	$('.splash-item#about').click(function(event) {
        event.stopPropagation();
        $('#fullpage').fullpage.moveTo(2);
    });
    $('.splash .theme-button').click(function(event) {
        event.stopPropagation();
        $('#fullpage').fullpage.moveTo(2);
    });
    $('.splash-item#contact').click(function(event) {
        event.stopPropagation();
        $('#fullpage').fullpage.moveTo(4);
    });


    /************** HOME BUTTON ****************/

    $('.home').click(function(event) {
        event.stopPropagation();
        $('#fullpage').fullpage.moveTo(1);
    });

});