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
    ShowSplash(0, $('.splash .splash-item').length);
    
    //construct gallery items
    
    var $gallery1 = $('#slide1 .pure-g.fullscreen-g#work-portfolio');
    for(var i=0; i<images.length/2; i++) {
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
        }).appendTo($gallery1);
    }
    var $gallery2 = $('#slide2 .pure-g.fullscreen-g#work-portfolio');
    for(var i=images.length/2; i<images.length; i++) {
        console.log('item' + i);
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
        }).appendTo($gallery2);
    }

});

/************** SPLASH MENU ANIMATIONS ****************/

function ShowSplash(index, length) { 
    // $('.splash-container .overlay').animate({
    //     backgroundColor: 'rgba(0,0,0,0.95)'
    // }, 300);

    


    $('.splash .splash-item').eq(index).animate({
        top: '0',
        opacity: '1',
    },500);
    setTimeout(function () {   
        if (++index < length) ShowSplash(index, length);
        else $('.footer').css('visibility', 'visible');
    }, 80);
}

function HideSplash() {  
    // $('.splash-container .overlay').animate({
    //     backgroundColor: 'rgba(0,0,0,0.95)'
    // }, 300);
    $('.menu').animate({
        top: '-200px'
    },300);
    setTimeout(function(){
        $('.menu').css('left', '50px');
        $('.menu').animate({
            top: '15px'
        },200)}, 1000);
    $('.menu').addClass('side-menu');   
    $('.footer').css('visibility', 'hidden');     
    // $('.splash-container').animate({
    //     width: '150px'
    // }, 200);
    // $('.splash-logo').animate({
    //     top: '10px',
    //     width: '80px',
    //     height: '80px'
    // }, 400);
    $('.splash .splash-item').animate({
        opacity: 0,
    }, 100);
}

/************* Menu Animations *********************/

function ToggleMenuTab() { 
   $('.menu-item').fadeToggle('slow');
}

function ToggleMenu() {
    if($('.menu').hasClass('open')) {
        $('.menu').removeClass('open');
        HideMenu($('.menu .splash-item').length);
    }
    else{
        $('.menu').addClass('open');
        ShowMenu(0, $('.menu .splash-item').length);
    }
}

function ShowMenu(index, length) { 
    if(index == 0) {
        $('.splash-logo').animate({
            width: '80px',
            height: '80px'
        },100);
    }
    $('.menu .splash-item').eq(index).addClass('slideout');
    setTimeout(function () {   
        if (++index < length) ShowMenu(index, length);
    }, 40);
}

function HideMenu(index) {
    if(index == $('.menu .splash-item').length){
        $('.splash-logo').animate({
            width: '70px',
            height: '70px'
        },100);
    }
    $('.menu .splash-item').eq(index).removeClass('slideout');
    setTimeout(function () {   
        if (--index >= 0) HideMenu(index);
    }, 40);
}

function HideMenuInstant() {
    $('.splash-logo').css('width', '70px');
    $('.splash-logo').css('height', '70px');
    $('.menu .splash-item').removeClass('slideout');
    $('.menu').removeClass('open');
}

/************** PORTFOLIO ANIMATIONS ****************/

function ShowPortfolioFromTop(index, length) {    
    $('.pure-g#work-portfolio .l-box').eq(index).animate({
        top: 0,
        opacity: 1
    },500);
    setTimeout(function () {   
        if (++index < length) ShowPortfolioFromTop(index, length);
    }, 40);
}
function ShowPortfolioFromBottom(index) {    
    $('.pure-g#work-portfolio .l-box').eq(index).animate({
        top: 0,
        opacity: 1
    },500);
    setTimeout(function () {   
        if (--index >= 0) ShowPortfolioFromBottom(index);
    }, 40);
}

function HidePortfolio() {    
    $( ".pure-g#work-portfolio .l-box" ).each(function( index ) {
        $(this).animate({
            opacity: 0
        },500);
    });
}


//bind buttons

$('.splash-item').click(function(event) {
    event.stopPropagation();
    HideMenu(0, $('.menu .splash-item').length);

});

// $('.splash-item#work').click(function(event) {
    // event.stopPropagation();
    // $('.splash-container .overlay').animate({
    //     backgroundColor: 'rgba(0, 0, 0, 0.97)'
    // },900);
    // HideSplash();
    // window.setTimeout(ShowPortfolio, 300);
// });

// $('.splash-item#first').click(function () {
//     event.stopPropagation();
//     $('.splash-container .overlay').animate({
//         backgroundColor: 'rgba(0, 0, 0, 0.9)'
//     },300);
//     HidePortfolio();
//     ShowSplash(0, $('.splash-item').length);
// });

$('.splash-logo').click(function(event) {
    if($('.menu').hasClass('side-menu')) {
        // $('.menu ul.splash-item-list').slideToggle(300);
        ToggleMenu();
    }
});

