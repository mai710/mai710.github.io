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
            'class':'l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4',
            'html': "<div class='item'>"
                        + "<div class='face' style='background-image:url("+images[i]+")'></div>"
                        + "<a class='expand-button' href=''><i class='fa fa-link'></i></a>"
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
    $('.splash-item').eq(index).animate({
        top: '0',
        opacity: '1',
    },500);
    setTimeout(function () {   
        if (++index < length) ShowSplash(index, length);
    }, 80);
}

// function HideSplash(index, length) {  
//     $('.splash-item').eq(index).css('transform', 'translateX(0)');        
//     $('.splash-item').eq(index).animate({
//         left: '-30',
//         // opacity: '0'
//     },250);
//     setTimeout(function () {   
//         if (++index < length) HideSplash(index, length);
//     }, 25);
// }


function HideSplash() {     
    $('.footer').css('visibility', 'hidden');     
    // $('.splash-container').animate({
    //     width: '150px'
    // }, 200);
    $('.splash-logo').animate({
        top: '20px',
        width: '80px',
        height: '80px'
    }, 400);
    $('.splash-item').animate({
        opacity: 0,
    }, 100);
}

/************** PORTFOLIO ANIMATIONS ****************/

function ShowPortfolioFromTop(index, length) {    
    // $('.content-wrapper').css('visibility', 'visible');
    $('.pure-g .l-box').eq(index).animate({
        top: '0',
        opacity: 1
    },100);
    setTimeout(function () {   
        if (++index < length) ShowPortfolioFromTop(index, length);
    }, 40);
}
function ShowPortfolioFromBottom(index) {    
    // $('.content-wrapper').css('visibility', 'visible');
    $('.pure-g .l-box').eq(index).animate({
        top: '0',
        opacity: 1
    },100);
    setTimeout(function () {   
        if (--index >= 0) ShowPortfolioFromBottom(index);
    }, 40);
}

function HidePortfolioToTop(index, length) {    
    // $('.content-wrapper').css('visibility', 'visible');
    $('.pure-g .l-box').eq(index).animate({
        top: '-300px',
        opacity: 0
    },100);
    setTimeout(function () {   
        if (++index < length) ShowPortfolioFromTop(index, length);
    }, 40);
}
function HidePortfolioToBottom(index) {    
    // $('.content-wrapper').css('visibility', 'visible');
    $('.pure-g .l-box').eq(index).animate({
        top: '300px',
        opacity: 0
    },100);
    setTimeout(function () {   
        if (--index >= 0) ShowPortfolioFromBottom(index);
    }, 40);
}

function HidePortfolio() {    
    $( ".pure-g .l-box" ).each(function( index ) {
        $(this).animate({
            top: screen.height
        },200*(index+1));
    });
    // $('.content-wrapper').css('visibility', 'hidden');
}


//bind buttons

var firstClick = true;
$('.splash-item').click(function(event) {
    event.stopPropagation();
    if(firstClick){
        firstClick = false;
        $('.splash-container .overlay').css('backgroundColor', 'rgba(0,0,0,0.95');
        
    }
    $(".splash-item").removeClass('splash-item-clicked');
    $(this).addClass('splash-item-clicked');
});

// $('.splash-item#work').click(function(event) {
    // event.stopPropagation();
    // $('.splash-container .overlay').animate({
    //     backgroundColor: 'rgba(0, 0, 0, 0.97)'
    // },900);
    // HideSplash();
    // window.setTimeout(ShowPortfolio, 300);
// });

$('.splash-item#first').click(function () {
    event.stopPropagation();
    $('.splash-container .overlay').animate({
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },300);
    HidePortfolio();
    ShowSplash(0, $('.splash-item').length);
});

