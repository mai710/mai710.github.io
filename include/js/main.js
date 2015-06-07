$(document).ready(function() {

	/************** SPLASH BUTTONS ****************/

	
    $('.splash .theme-button').click(function(event) {
        event.stopPropagation();
        $('#fullpage').fullpage.moveTo(2);
    });
    


    /************** HOME BUTTON ****************/

    $('.home').click(function(event) {
        event.stopPropagation();
        $('#fullpage').fullpage.moveTo(1);
    });

});

$(window).load(function(){
    $('.loader-bg').fadeOut('slow');
});