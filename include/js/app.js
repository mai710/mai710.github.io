(function(){

	angular.module('portfolio', [])
		.controller('GalleryController', ['$scope', function($scope){
			$scope.items = projects;
			$scope.selectedItem = {};
			$scope.selectedTitle = {};
			$scope.selectedClient = {};
			$scope.selectedDeveloper = {};
			$scope.selectedSummary = {};
			$scope.selectedImage = {};

			$scope.expandItem = function(item){
				$('.expanded').toggle('clip');	
				$scope.selectedItem = item;
				$scope.selectedTitle = item.title;
				$scope.selectedClient = item.client;
				$scope.selectedDeveloper = item.developer;
				$scope.selectedSummary = item.summary;
				$scope.selectedImage = item.image;
			}
			$scope.collapseItem = function(){
				$('.expanded').toggle('clip');	
			}

		}])
		.filter('html', function($sce) {
	    	return function(val) {
	        	return $sce.trustAsHtml(val);
	    	};
		});


	/*********************************************************/
	/**************** PROJECT PAGE CONTENT *******************/
	/*********************************************************/

	var projects = [
		{
			title:"SUPER HEROES ASSEMBLE",
			image:"include/img/work/avengers.png", 
			client:"Marvel/Walmart",
			developer:"Current Studios",
			tags:["unity", "vuforia", "ar"],
			stores:[
				["apple", "https://itunes.apple.com/ca/app/super-heroes-assemble-canada/id979047191?mt=8"],
				["android", ""],
			],
			summary:"To accompany the release of the highly anticipated \"Avengers: Age of Ultron\" movie, we built this app to provide fans " +
    "with a hub for all their Avengers content. The app includes character bios and behind the scenes footage, along with " +
    "an immersive <a href='https://www.youtube.com/watch?v=BHrxhgXrrlg' target='blank'>virtual reality experience</a> that " +
    "places you in the center of the Hulkbuster training grounds." +
    "<br/>The app contains other fun experiences that take place at Walmart stores, such as a photo opportunity with life-size " +
    " Avengers heroes.<br/>Check out the trailer for the app <a href='https://www.youtube.com/watch?v=fwbhl9Z3LY0' target='blank'>here.</a>",
		},
		{
		    title:"EXPLORE ENTERPRISE", 
		    image:"include/img/work/intrepid.png",
		    client:"Intrepid Museum", 
		    developer:"Current Studios",
		    tags:["xcode", "unity", "vuforia", "ar"],
			stores:[
				["apple", "https://itunes.apple.com/us/app/mission-intrepid-explore-enterprise/id891318456?ls=1&mt=8"],
			],
		    summary:"Explore Enterprise is a companion app for the Intrepid Museum's Enterprise shuttle exhibit. The app guides visitors around " +
    "the massive pavilion where the space shuttle is housed. At each station, visitors can use the app to unlock additional " +
    "content simply by pointing their mobile device at the display in front of them. Using image recognition, facts and stories " +
    "about the Enterprise are presented as videos, infographics, and augmented reality animations." + 
    "<br/>By using the app as a guide, visitors unlock stations one by one and collect badges to advance their rank from 'Recruit' " +
    "to 'Spaceship Commander'. Collect all badges during your visit, and unlock a bonus AR experience." +
    "<br/>Watch <a href='http://www.intrepidmuseum.org/Mission-Enterprise.aspx' target='blank'>this video</a> for a closer look at the exhibit.",
		},
		{
		    title:"NBA: GET IN THE GAME", 
		    image:"include/img/work/nba.png", 
		    client:"Bloomingdale's NYC", 
		    developer:"Current Studios",
		    tags:["win8", "kinect", "unity"],
			stores:[],
		    summary:"For NBA All-Star weekend, Bloomingdale's in NYC wanted to create an interactive window display to get people excited about " +
    "the event. We built a gesture-based Kinect experience that let people step up to the 3-point line and show their skills. " +
    "The goal was to engage people for a minute or two of fun as they went on their way." + 
    "<br/>Check it out in <a href='https://www.youtube.com/watch?v=jvWj9Oasi3w' target='blank'>this video.</a>",
		},
		{
		    title:"WHITE ELEPHANT", 
		    image:"include/img/work/we.jpg", 
		    client:"Animat Habitat", 
		    developer:"Animat Habitat",
		    tags:["xcode", "unity", "vuforia", "ar"],
			stores:[
				["apple-comingsoon", "#"],
			],
		    summary:"White Elephant is an interactive comic app that illustrates the annual journey of the endangered African Elephant. " +
    "The project is a joint effort with artist and friend <a href='http://danealeksander.ca' target='blank'>Dane Aleksander</a>, " +
    "with whom I collaborated on the storyline and UI/UX design. Through art, we hope to raise awareness for this beautiful " +
    "animal that now faces extinction. We're currently developing the comic as a native iOS app. As a phase 2, we hope to build an " +
    "augmented reality version of the story using Unity3d, and the Vuforia AR SDK. <br />Learn more about White Elephant at " +
    " <a href='http://animathabitat.org' target='blank'>animathabitat.org</a>",
		},
		{				
		    title:"SNAPDRAGON DIGITAL PEN", 
		    image:"include/img/work/sdp.png", 
		    client:"Qualcomm", 
		    developer:"Current Studios",
		    tags:["eclipse", "sdp", "unity"],
			stores:[],
		    summary:"The Snapdragon Digital Pen is the latest in tablet accessories. The pen works with select tablets fitted with several " +
    "microphones that pick up the pen's ultrasonic signals. When used on the tablet, it works as any stylus would, even when " +
    "hovered above the screen. It can also be used as a regular ink pen off screen, and the tablet will replicate the user's " +
    "writing by tracking the pen's position." +
    "<br/>To demo this innovative tech, we built a Unity android plugin that wraps the pen's sdk and used it for a 'connect the "+
    "dots' coloring book application. Kids could use the pen on a physical coloring book and see their drawing come to life " +
    "on the tablet.<br />Watch the demo <a href='https://www.youtube.com/watch?v=RDCZjy3v_xA' target='blank'>here.</a>",
		},
		{
		    title:"VIRTUAL MAZDA3", 
		    image:"include/img/work/mazda.png", 
		    client:"Mazda", 
		    developer:"Current Studios",
		    tags:["unity", "vuforia", "ar"],
			stores:[
				["apple", "https://itunes.apple.com/ca/app/virtual-mazda3/id695879761?mt=8"],
				["android", "https://play.google.com/store/apps/details?id=com.addispatch.Mazda3En&hl=en"],
			],
		    summary:"To promote the new Mazda3, we built an innovative experience that lets users try on a new car right in their driveway. " +
    "Using point cloud technology, we place a brand new Mazda right on top of their old one. Users can walk around the life-size " +
    "vehicle and view it from all angles. We also created the table-top experience for users who don't have a large enough space." +
    "<br/>Check out this awesome app in <a href='https://www.youtube.com/watch?t=29&v=71syI1UL15U' target='blank'>this video.</a>",
		},
		{
			title:"MAN OF STEEL",
			image:"include/img/work/mos.png",
			client:"Warner Bros./Walmart",
			developer:"Current Studios",
			tags:["unity", "vuforia", "ar"],
			stores:[
				["apple", "https://itunes.apple.com/ca/app/man-steel-experience-canada/id646491828?mt=8"],
				["android", "https://play.google.com/store/apps/details?id=com.wb.ManOfSteel.Experience"],
			],	
 		    summary:"The 'Man of Steel Experience' app was released alongside the film to allow Superman fans to get up close to movie content " +
    "through the magic of augmented and virtual reality. The app uses geo-location to determine when users are near a Walmart " +
    "store and can therefore access exclusive experiences. Their location is also used in the voting map, where they choose the "+
    "side of Superman or Zod and take over regions on the map. " +
    "Users can also tag the walls with their hero's crest with AR graffiti, and tour the inside of Superman's scout ship in a " +
    "virtual reality experience." +
    "<br/>Watch the app's trailer <a href='https://www.youtube.com/watch?v=KgW0nEjvcuI' target='blank'>here.</a>",
 		},
 		{
		    title:"SOCIAL CODING",			
		    image:"include/img/work/github.png",
		    client:"Independent",
		    developer:"Github",
		    tags:[],
			stores:[],
		    summary:"There's no better way to learn than through practical application. I try to write small code samples or build small " +
    "projects whenever I'm learning a new skill. And if it helped me learn, it can maybe help someone else too. That's why " +
    "I make an effort to host my projects on Github. I think it's a great platform for developers to share and collaborate " +
    "with others in the dev community.<br/>Check out my <a href='http://github.com/mai710' target='black'>Github Page</a> " +
    "for source code to various projects, including this website!"
		}
	];


})();