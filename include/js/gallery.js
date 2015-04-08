var images = [
    "include/img/work/intrepid.png", 
    "include/img/work/mazda.png", 
    "include/img/work/nba.png", 
    "include/img/work/sdp.png", 
    "include/img/work/slider.jpg", 
    "include/img/work/github.png"
];
var titles = [
    "EXPLORE ENTERPRISE", 
    "VIRTUAL MAZDA3", 
    "NBA: GET IN THE GAME", 
    "SNAPDRAGON DIGITAL PEN", 
    "WHITE ELEPHANT", 
    "SOCIAL CODING"
];
var sub_titles = [
    "Intrepid Museum", 
    "Mazda", 
    "Bloomingdale's NYC", 
    "Qualcomm", 
    "Animat Habitat", 
    "GitHub"
];

$(document).ready(function () {
    var $gallery = $('.pure-g.fullscreen-g');
    for(var i=0; i<images.length; i++) {
        var $new_item = $('<div/>', {
            'class':'l-box pure-u-1 pure-u-md-1-3 pure-u-lg-1-6',
            'html': "<div class='item'>"
                        +"<div class='face' style='background-image:url("+images[i]+")'></div>" 
                        + "<div class='curtain'>"
                            + "<div class='content-subhead-wrapper'>"
                                + "<div class='content-subhead'>"
                                    + "<h3 class='title'>"+titles[i]+"</h3>"
                                    + "<h2 class='dash'>___</h2>"
                                    + "<h4 class='inner'>"+sub_titles[i]+"</h4>"
                                + "</div>"
                            + "</div>"
                        + "</div>"
                    +"</div>"
        }).appendTo($gallery);
    }
});


function ScrollPortfolio() {
    console.log(screenTop);
    $('.home-menu').animate({
        top: "0"
    },250);
    
    $('#portfolio').animate({
        top: "60px"
    },250);
    $( ".pure-g .l-box" ).each(function( index ) {
        
        $(this).animate({
            top: "0"
        },70*index);
    });
        
}

$('div').click(function (event) {
    event.stopPropagation();
    ScrollPortfolio();
});