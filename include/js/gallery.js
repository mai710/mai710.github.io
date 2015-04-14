var images = [
    "include/img/work/intrepid.png", 
    "include/img/work/mazda.png", 
    "include/img/work/nba.png", 
    "include/img/work/sdp.png", 
    "include/img/work/slider.jpg", 
    "include/img/work/github.png",
    "include/img/work/intrepid.png",
    "include/img/work/slider.jpg"
];
var titles = [
    "EXPLORE ENTERPRISE", 
    "VIRTUAL MAZDA3", 
    "NBA: GET IN THE GAME", 
    "SNAPDRAGON DIGITAL PEN", 
    "WHITE ELEPHANT", 
    "SOCIAL CODING",
    "EXPLORE ENTERPRISE",
    "WHITE ELEPHANT"
];
var sub_titles = [
    "Intrepid Museum", 
    "Mazda", 
    "Bloomingdale's NYC", 
    "Qualcomm", 
    "Animat Habitat", 
    "GitHub",
    "Intrepid Museum",
    "Animat Habitat"
];

$(document).ready(function () {
    
    //animate splash menu
    // ShowSplash_();
    ShowSplash(0, $('.splash-item').length);
    
    //construct gallery items
    
    var $gallery = $('.pure-g.fullscreen-g');
    for(var i=0; i<images.length; i++) {
        var $new_item = $('<div/>', {
            'class':'l-box pure-u-1 pure-u-md-1-4 pure-u-lg-1-4',
//            'style': 'top:'+screen.height+'px',
            'html': "<div class='item'>"
                        + "<div class='face' style='background-image:url("+images[i]+")'></div>"
                        + "<a class='expand-button' href=''></a>"
                        + "<div class='curtain'>"
                            + "<div class='content-subhead-wrapper'>"
                                + "<div class='content-subhead'>"
                                    + "<h3 class='title'>"+titles[i]+"</h3>"
                                    + "<h2 class='dash'>___</h2>"
                                    + "<h4 class='inner'>"+sub_titles[i]+"</h4>"
                                + "</div>"
                            + "</div>"
                        + "</div>"
                    + "</div>"
        }).appendTo($gallery);
    }

});

/************** SPLASH MENU ANIMATIONS ****************/

function ShowSplash(index, length) {          
    // if(index === 0){
    //     $('.splash-item').eq(index).animate({
    //         marginTop: '0',
    //         top: '0'
    //     },110);
    // }
    // else{
        $('.splash-item').eq(index).animate({
            top: '0',
            opacity: '1'
        },110*(index+1));
    // }
    setTimeout(function () {   
        if (++index < length) ShowSplash(index, length);
    }, 40);
}

function HideSplash(index, length) {  
    $('.splash-item').eq(index).css('transform', 'translateX(0)');        
    $('.splash-item').eq(index).animate({
        left: '0',
        // opacity: '0'
    },250);
    setTimeout(function () {   
        if (++index < length) HideSplash(index, length);
    }, 25);
}


function HideSplashOld(index) {          
    if(index === 0){
        $('.splash-item').eq(index).animate({
            marginTop: '-5%',
        },110);
    }
    else{
        $('.splash-item').eq(index).animate({
            top: '-30px',
            opacity: '0'
        },100);
    }
    setTimeout(function () {   
        if (--index >= 0) HideSplash(index);
    }, 40);
}

/************** PORTFOLIO ANIMATIONS ****************/

function ShowPortfolio() {    
    // $('.content-wrapper').animate({
    //     top: "0"
    // },250);
    $('.content-wrapper').css('visibility', 'visible');
    $('.pure-g .l-box').each(function (index) {
        $(this).animate({
            top: "0"
        },100*(index+1));
    });
        
}

function HidePortfolio() {    
    $( ".pure-g .l-box" ).each(function( index ) {
        $(this).animate({
            top: screen.height
        },200*(index+1));
    });
    $('.content-wrapper').css('visibility', 'hidden');
    // $('.content-wrapper').animate({
    //     top: screen.height
    // },1000);
}


//bind buttons

    $('.splash-item#gallery').click(function () {
        event.stopPropagation();
        $('.splash-container .overlay').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.97)'
        },900);
        HideSplash(0, $('.splash-item').length);
        window.setTimeout(ShowPortfolio, 300);
    });

    $('.splash-item#first').click(function () {
        event.stopPropagation();
        $('.splash-container .overlay').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
        },300);
        HidePortfolio();
        ShowSplash(0, $('.splash-item').length);
    });

