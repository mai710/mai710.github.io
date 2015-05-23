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
    $('.l-box-2 p').html(summaries[index]);
    
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
    "Current Studios",
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

var summaries = [
    "To accompany the release of the highly anticipated \"Avengers: Age of Ultron\" movie, we built this app to provide fans " +
    "with a hub for all their Avengers content. The app includes character bios and behind the scenes footage, along with " +
    "an immersive <a href='https://www.youtube.com/watch?v=BHrxhgXrrlg' target='blank'>virtual reality experience</a> that " +
    "places you in the center of the Hulkbuster training grounds." +
    "<br/>The app contains other fun experiences that take place at Walmart stores, such as a photo opportunity with life-size " +
    " Avengers heroes.<br/>Check out the trailer for the app <a href='https://www.youtube.com/watch?v=fwbhl9Z3LY0' target='blank'>here.</a>",

    "Explore Enterprise is a companion app for the Entrepid Museum's Enterprise shuttle exhibit. The app guides visitors around " +
    "the massive pavilion where the space shuttle is housed. At each station, visitors can use the app to unlock additional " +
    "content simply by pointing their mobile device at the display in front of them. Using image recognition, facts and stories " +
    "about the Enterprise are presented as videos, infographic, and augmented reality animations." + 
    "<br/>By using the app as a guide, visitors unlock stations one by one and collect badges to advance their rank from 'Recruit' " +
    "to 'Spaceship Commander'. Collect all badges during your visit, and unlock a bonus AR experience." +
    "<br/>Watch <a href='http://www.intrepidmuseum.org/Mission-Enterprise.aspx' target='blank'>this video</a> for a closer look at the exhibit.",

    "For NBA All-Star weekend, Bloomingdale's in NYC wanted to create an interactive window display to get people excited about " +
    "the event. We built a gesture-based Kinect experience that let people step up to the 3-point line and show their skills. " +
    "The goal was to engage people for a minute or two of fun as they went on their way." + 
    "<br/>Check it out in <a href='https://www.youtube.com/watch?v=jvWj9Oasi3w' target='blank'>this video.</a>",

    "White Elephant is an interactive comic app that illustrates the annual journey of the endangered African Elephant. " +
    "The project is a joint effort with artist and friend <a href='http://lifeasplay.ca' target='blank'>Dane Aleksander</a>, " +
    "with whom I collaborated on the storyline and UI/UX design. Through art, we hope to raise awareness for this beautiful " +
    "animal that now faces extinction. We're currently developing the comic as a native iOS app. As a phase 2, we hope to build an " +
    "augmented reality version of the story using Unity3d, and the Vuforia AR SDK. <br />Learn more about White Elephant at " +
    " <a href='http://animathabitat.org' target='blank'>animathabitat.org</a>",
    
    "The Snapdragon Digital Pen is the latest in tablet accessories. The pen works with select tablets fitted with several " +
    "microphones that pick up the pen's ultrasonic signals. When used on the tablet, it works as any stylus would, even when " +
    "hovered above the screen. It can also be used as a regular ink pen off screen, and the tablet will replicate the user's" +
    "writing by tracking the pen's position." +
    "<br/>To demo this innovative tech, we built a Unity android plugin that wraps the pen's sdk and used it for a 'connect the "+
    " dots' coloring book application. Kids could use the pen on a physical coloring book and see their drawing come to life " +
    "on the tablet. Watch the demo <a href='https://www.youtube.com/watch?v=RDCZjy3v_xA' target='blank'>here.</a>",
    
    "To promote the new Mazda3, we built an innovative experience that lets users try on a new car right in their driveway. " +
    "Using point cloud technology, we place a brand new Mazda right on top of their old one. Users can walk around the life-size " +
    "vehicle and view it from all angles. We also created the table-top experience for users who don't have a large enough space." +
    "<br/>Check out this awesome app in <a href='https://www.youtube.com/watch?t=29&v=71syI1UL15U' target='blank'>this video.</a>",
     
    "The 'Man of Steel Experience' app was released alongside the film to allow Superman fans to get up close to movie content " +
    "through the magic of augmented and virtual reality. The app uses geo-location to determine when users are near a Walmart " +
    "store and can therefore access exclusive experiences. Their location is also used in the voting map, where they choose the "+
    "side of Superman or Zod and take over regions on the map." +
    "Users can also tag the walls with their hero's crest with AR graffiti, and tour the inside of Superman's scout ship in a " +
    "virtual reality experience." +
    "<br/>Watch the app's trailer <a href='https://www.youtube.com/watch?v=KgW0nEjvcuI' target='blank'>here.</a>",
    
    "There's no better way to learn than through practical application. I try to write small code samples or build small " +
    "projects whenever I'm learning a new skill. And if it helped me learn, it can maybe help someone else too. That's why " +
    "I make an effort to host my projects on Github. I think it's a great platform for developers to share and collaborate " +
    "with others in the dev community.<br/>Check out my <a href='http://github.com/mai710' target='black'>Github Page</a> " +
    "for source code to various projects, including this website!"
];




