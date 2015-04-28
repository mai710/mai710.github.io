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
var subTitles = [
    "Intrepid Museum", 
    "Mazda", 
    "Bloomingdale's NYC", 
    "Qualcomm", 
    "Animat Habitat", 
    "GitHub",
    "Intrepid Museum",
    "Animat Habitat"
];


var mqDesktop = window.matchMedia( "(min-width: 78em)" );
var mqTabletLandscape = window.matchMedia( "(min-width: 64em)" );
var mqTabletPortrait = window.matchMedia( "(min-width: 48em)" );


$(document).ready(function() {
    BuildPortfolio();
    // mqDesktop.addListener(function(changed) {
    //     BuildPortfolio();
    //     console.log('JS READY');
    //     setTimeout(function(){
    //         $('#fullpage').fullpage.reBuild(true);
    //     }, 500); 
    // });
    // mqTabletLandscape.addListener(function(changed) {
    //     BuildPortfolio();
    //     console.log('JS READY');
    //     setTimeout(function(){
    //         $('#fullpage').fullpage.reBuild(true);
    //     }, 500); 
    // });
    // mqTabletPortrait.addListener(function(changed) {
    //     BuildPortfolio();
    //     console.log('JS READY');
    //     setTimeout(function(){
    //         $('#fullpage').fullpage.reBuild(true);
    //     }, 500);   
    // });
});

function BuildPortfolio() {
    
    //construct gallery item HTML

    var $gallery = $('.gallery');
    var $galleryTablet = $('.gallery-tablet');
    var $galleryMobile = $('.gallery-mobile');


    var openSection = "<div class='slide'>"
                        + "<div class='pure-g portfolio'>";

    var itemHtml =          "<div class='item'>"
                                + "<div class='face' style='background-color:black'>"
                                    + "<div class='curtain'>"
                                        + "<div class='content'>"
                                            + "<a href='' class='sub-header'>View Details</a>"
                                        + "</div>"
                                    + "</div>"
                                + "</div>"
                                + "<div class='tab'>"
                                    +"<div class='pointer'></div>"
                                    + "<div class='content-subhead-wrapper'>"
                                        + "<div class='content-subhead'>"
                                            + "<h3 class='header'></h3>"
                                            + "<h2 class='dash'>___</h2>"
                                            + "<h4 class='sub-header'></h4>"
                                        + "</div>"
                                    + "</div>"
                                + "</div>"
                            + "</div>";

    var closeSection =  "</div>"
                    + "</div>";



    var sectionLength = 4;
    var sectionLengthTablet = 2;
    var sectionLengthMobile = 1;

    // if(mqDesktop.matches || mqTabletLandscape.matches) {
    //     sectionLength = 4;
    // }
    // else if(mqTabletPortrait.matches) {
    //     sectionLength = 2;       
    // }

    for(var i=0; i<images.length; i++) {
        //start a new slide if needed
        if(i % sectionLength == 0) {
            if(i > 0){
                console.log('CLOSE');
                $(closeSection).appendTo($gallery);
            }
            console.log('OPEN');    
            $(openSection).appendTo($gallery);
        }

        //create an item
        var $new_item = $('<div/>', {
            'class':'l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4',
            'html': itemHtml
        });
        $new_item.appendTo($('.pure-g.portfolio').last());

        //set the item's content
        $('.face').last().css('backgroundImage', 'url('+images[i]+')');
        $('.header').last().text(titles[i]);
        $('.sub-header').last().text(subTitles[i]);

        //if this is the last item, close the slide
        if(i == images.length -1){
            console.log('CLOSE');
            $(closeSection).appendTo($gallery);
        }
    }

}

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

$('.splash-item#about').click(function(event) {
    event.stopPropagation();
    $('#fullpage').fullpage.moveTo(2);
});
$('.splash-item#portfolio').click(function(event) {
    event.stopPropagation();
    $('#fullpage').fullpage.moveTo(3);
});
$('.splash-item#contact').click(function(event) {
    event.stopPropagation();
    $('#fullpage').fullpage.moveTo(4);
});


