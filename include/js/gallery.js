$(document).ready(function() {
    BuildPortfolio();

    /************** BUTTON METHODS ****************/

    // $('.curtain').click(function(event) {
    //     if($(this).css('opacity') == 1){
    //         console.log('CURTAIN');
    //         event.stopPropagation();
    //     }
    // });
    $('.curtain').click(function(event) {
        event.stopPropagation();
        console.log('CLICK');
        var i = $('.curtain').index(this);
        ExpandPortfolio(i);
    });
    $('.tab').click(function(event) {
        event.stopPropagation();
        console.log('CLICK');
        var i = $('.tab').index(this);
        ExpandPortfolio(i);
    });
    $('.close-button').click(function(event) {
        event.stopPropagation();
        $('.expanded').toggle('clip');
    });
});


/*************** GALLERY **************/

function BuildPortfolio() {
    
    //HTML to create 1 item
    var openSection = "<div class='pure-g portfolio'>";

    var itemHtml =          "<div class='item'>"
                                + "<div class='face'>"
                                    + "<div class='curtain'>"
                                        + "<div class='content'>"
                                            // + "<button class='sub-header'>View Details</button>"
                                        + "</div>"
                                    + "</div>"
                                + "</div>"
                                + "<div class='tab'>"
                                    // +"<div class='pointer' id='black'></div>"
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
                    // + "</div>";


    var $gallery = $('.section#section2');
    var sectionLength = 4; //how many items should be on a slide


    //create all the items in this loop
    for(var i=0; i<images.length; i++) {

        //start a new slide if needed
        if(i == 0) {
            if(i > 0){
                $(closeSection).appendTo($gallery);
            }
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
        $('.portfolio .header').last().html(titles[i]+"&nbsp&nbsp<i class='fa fa-external-link gold'></i>");
        $('.portfolio .sub-header').last().text(clients[i]);

        //if this is the last item, close the slide
        if(i == images.length -1){
            $(closeSection).appendTo($gallery);
        }
    }

}

/**************  EXPANDED VIEW ****************/

function ExpandPortfolio(index) {
    //set titles and description
    $('.expanded .title').text(titles[index]);
    $('.expanded .sub-header').first().text(clients[index]);
    $('.expanded .sub-header').last().text(developers[index]);
    $('.l-box-1').css('backgroundImage', 'url('+images[index]+')');
    
    //set tags 
    var itemTags = tags[index];
    $('.icon-container').empty();

    //tags
    for(var i=0; i<itemTags.length; i++) {
        var $newTag = $('<div/>', {
            'class':'tag',
            'id': itemTags[i],
            'html': '<span>'+itemTags[i]+'</span>'
        });
        $newTag.appendTo($('.icon-container').first());
    }
    //store links
    var itemStores = stores[index];
    var itemLinks = storeLinks[index];

    for(var i=0; i<itemStores.length; i++) {
        
        var $button = $("<div class='theme-button'></div>");
        var $newLink = $('<a/>', {
            'class':'content store-link',
            'id': itemStores[i],
            'href': itemLinks[i],
            'target': 'blank',
        });
        $newLink.appendTo($button);
        var $ease = $("<div class='ease'></div>")
        $ease.appendTo($button);
        $button.appendTo($('.icon-container').last());
    }

    //expand view
    $('.expanded').toggle('clip');

}


/*********************************************************/
/**************** PROJECT PAGE CONTENT *******************/
/*********************************************************/


var images = [
    "include/img/work/avengers.png", 
    "include/img/work/intrepid.png", 
    "include/img/work/nba.png", 
    "include/img/work/we.jpg", 
    "include/img/work/sdp.png", 
    "include/img/work/mazda.png", 
    "include/img/work/mos.png",
    "include/img/work/github.png",
];
var titles = [
    "SUPER HEROES ASSEMBLE",
    "EXPLORE ENTERPRISE", 
    "NBA: GET IN THE GAME", 
    "WHITE ELEPHANT", 
    "SNAPDRAGON DIGITAL PEN", 
    "VIRTUAL MAZDA3", 
    "MAN OF STEEL",
    "SOCIAL CODING",
];
var clients = [
    "Marvel/Walmart",
    "Intrepid Museum", 
    "Bloomingdale's NYC", 
    "Animat Habitat", 
    "Qualcomm", 
    "Mazda", 
    "Warner Bros./Walmart",
    "Independent",
];
var developers = [
    "Current Studios",
    "Current Studios",
    "Current Studios",
    "Animat Habitat",
    "Current Studios",
    "Current Studios",
    "Independent",
    "Github",
];
var tags = [
    ["unity", "vuforia", "ar"],
    ["xcode", "unity", "vuforia", "ar"],
    ["win8", "kinect", "unity"],
    ["xcode", "unity", "vuforia", "ar"],
    ["eclipse", "sdp", "unity"],
    ["unity", "vuforia", "ar"],
    ["unity", "vuforia", "ar"],
    [],
];
var stores = [
    ["apple", "android"],
    ["apple",],
    [],
    ["apple-comingsoon"],
    [],
    ["apple", "android"],
    ["apple", "android"],
    []
];
var storeLinks = [
    ["https://itunes.apple.com/ca/app/super-heroes-assemble-canada/id979047191?mt=8", ""],
    ["https://itunes.apple.com/us/app/mission-intrepid-explore-enterprise/id891318456?ls=1&mt=8"],
    [],
    [],
    [],
    ["https://itunes.apple.com/ca/app/virtual-mazda3/id695879761?mt=8", "https://play.google.com/store/apps/details?id=com.addispatch.Mazda3En&hl=en"],
    ["https://itunes.apple.com/ca/app/man-steel-experience-canada/id646491828?mt=8", ""], 
    []
];




