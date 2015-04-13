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
    
    //animate splash menu
    // ShowSplash_();
    ShowSplash(0, $('.splash-item').length);
    
    //construct gallery items
    
    var $gallery = $('.pure-g.fullscreen-g');
    for(var i=0; i<images.length; i++) {
        var $new_item = $('<div/>', {
            'class':'l-box pure-u-1 pure-u-md-1-3 pure-u-lg-1-3',
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


function ShowSplash_() {
    $('.splash-item').each(function (index) {
        if(index === 0){
            $(this).animate({
                marginTop: '0',
                top: '0'
            },200*(index+1));
        }
        else{
            $(this).animate({
                top: '0',
                opacity: '1'
            },200*(index+1));
        }
    });
}

function ShowSplash (index, length) {          
    if(index === 0){
        $('.splash-item').eq(index).animate({
            marginTop: '0',
            top: '0'
        },110);
    }
    else{
        $('.splash-item').eq(index).animate({
            top: '0',
            opacity: '1'
        },110*(index+1));
    }
    setTimeout(function () {   
        if (++index < length) ShowSplash(index, length);
    }, 40);
}

function HideSplash_() {
    $('.splash-item').each(function (index) {
        if(index === 0){
            $(this).animate({
                marginTop: '-5%',
            },300*(index+1));
        }
        else{
            if($(this).id === 'secondary'){
                $(this).animate({
                    opacity: '0'
                },100*(index+1));
            }
            else{
                $(this).animate({
                    top: '-30px',
                    opacity: '0'
                },300);
            }
        }
    });
}

function HideSplash (index) {          
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

function ShowPortfolio() {    
    $('#portfolio').animate({
        top: "112px"
    },250);
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
    $('#portfolio').animate({
        top: screen.height
    },1000);
}


//bind buttons

    $('.splash-item#gallery').click(function () {
        event.stopPropagation();
        $('.splash-container .overlay').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.97)'
        },900);
        HideSplash($('.splash-item').length);
        // window.setTimeout(ShowPortfolio, 100);
    });

    $('.splash-item#first').click(function () {
        event.stopPropagation();
        $('.splash-container .overlay').animate({
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
        },300);
        HidePortfolio();
        ShowSplash(0, $('.splash-item').length);
    });

