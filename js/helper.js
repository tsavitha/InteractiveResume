/*

 This file contains all of the code running in the background that makes resumeBuilder.js possible. It contains helper functions that
 support the code to build the online resume.

 */


/*

 These are HTML strings. JavaScript functions in resumeBuilder.js replaces the %data% placeholder text with information from
 respective objects.

 */

var HTMLheaderName = '<h1>%data% ';
var HTMLheaderRole = '<small class="white-text">%data%</small></h1>';

//<img src="%imagefile%">
var HTMLmobile = '<div class="col-lg-3 col-md-3"><span class="orange-text"><img src="%imagefile%"> mobile</span><span class="white-text">%data%</span></div>';
var HTMLemail = '<div class="col-lg-3 col-md-3"><span class="orange-text"><img src="%imagefile%"> email</span><span class="white-text">%data%</span></div>';
var HTMLgithub = '<div class="col-lg-3 col-md-3"><span class="orange-text"><img src="%imagefile%"> github</span><span class="white-text">%data%</span></div>';
var HTMLtwitter = '<div class="col-lg-3 col-md-3"><span class="orange-text"><img src="%imagefile%"> twitter</span><span class="white-text">%data%</span></div>';

var HTMLlocation = '<h3 id="location" class="white-text pull-right">%data%</h3>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="%url%">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="%url%">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="%url%">%data%</a>';

var googleMap = '<div id="map"></div>';
//var panelDiv = '<div id="panel"><input type="button" value="Go Back" onclick="goBack();"></div>';

/*
 The next few lines about clicks are for the Collecting Click Locations.
 */
clickLocations = [];

function logClicks(x, y) {
    clickLocations.push(
        {
            x: x,
            y: y
        }
    );
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function (loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


/*
 The custom Google Map for the website with pins for all the locations in the resume is generated here.
 See the documentation below for more details.
 https://developers.google.com/maps/documentation/javascript/reference
 */
var map;    // declares a global map variable

/*
 Start here! initializeMap() is called when page is loaded.
 */
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true,
        scaleControl: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DEFAULT,
            mapTypeIds: [
                google.maps.MapTypeId.ROADMAP,
                google.maps.MapTypeId.SATELLITE
            ],
            position: google.maps.ControlPosition.LEFT_BOTTOM
        }
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
     locationFinder() returns an array of every location string from the JSONs
     written for bio, education, and work.
     */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        // iterates through project locations and appends each location to
        // the locations array
        for (var project in projects.projects) {
            locations.push(projects.projects[project].location);
        }

        return locations;
    }

    /*
     createMapMarker(placeData) reads Google Places search results to create map pins.
     placeData is the object returned from search results containing information
     about a single location.
     */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;   // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // add a 'mouse over' event to display a pop-up containing information about the pin
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.open(map, marker);
        });

        // add a 'mouse out' event to close the pop-up when the mouse moves away from the pin
        google.maps.event.addListener(marker, 'mouseout', function () {
            infoWindow.close(map, marker);
        });

        // add a 'click' event to zoom in to the location when a pin is clicked and then
        // zoom back out after 5 seconds
        google.maps.event.addListener(marker, 'click', function () {
            window.setTimeout(function () {
                map.setZoom(3);
                map.setCenter({lat: 35, lng: 340});
            }, 5000);

            map.setZoom(12);
            map.setCenter(marker.getPosition());
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(panelDiv);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
     callback(results, status) makes sure the search returned results for a location.
     If so, it creates a new map marker for that location.
     */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
     pinPoster(locations) takes in the array of locations created by locationFinder()
     and fires off Google place searches for each location
     */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);

        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function (e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
