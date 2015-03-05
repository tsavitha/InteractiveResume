/*

 -- This file contains objects, each with different properties - 'bio', 'work', 'project' and 'education'.
 -- All of these objects also contain a display function to display the other object members as part of
 -- the online resume.

 -- All statements in this 'js' file are enclosed in a self invoking anonymous functions to avoid gloabl variable
 -- declarations. Variables from 'helper.js' are accessed using the global namespace.

 */

(function () {
    var ns = MYRESUMEAPP; // Creating an alias for the global namespace.

    /*
     -- The 'bio' object contains all the personal information that is displayed in the header section of the resume.
     */

    ns.bio = {
        "name": "Savitha Thiyagarajan",
        "role": "Web Developer",
        "contacts": {
            "mobile": "443-756-4022",
            "email": "tsavitha@gmail.com",
            "twitter": "@tsavitha",
            "github": "tsavitha",
            "location": "Raleigh, NC"
        },

        "pictureUrl": "images/savi.jpg",
        "welcomeMessage": "Hello! Welcome to my Online Resume. Thank you for taking the time to review my resume. " +
        "If you like my skill set or find a requirement that matches it and would like to contact me, you can reach me at... ",
        "skills": [
            {"technology": "ASP .NET", "rating": "6"},
            {"technology": "ASP .NET MVC", "rating": "6"},
            {"technology": "JS", "rating": "7"},
            {"technology": "jQuery", "rating": "5"},
            {"technology": "jQuery UI", "rating": "5"},
            {"technology": "jQuery Mobile", "rating": "4"},
            {"technology": "HTML", "rating": "8"},
            {"technology": "CSS", "rating": "8"},
            {"technology": "Bootstrap 3.x", "rating": "8"},
            {"technology": "XML", "rating": "7"}
        ]
    };

    function replacePlaceholder() {

        var stringToBeReplaced = arguments[0];
        var i = 1;
        //var replacedString;

        while (i < arguments.length) {
            stringToBeReplaced = stringToBeReplaced.replace("%data%", arguments[i]);
            i++;
        }

        return stringToBeReplaced;
    }

    /*
     -- Display function to display personal and contact information including skill set.
     -- The different placeholder text are replaced with the corresponding property values from the 'bio' object
     */

    ns.bio.display = function () {

        ns.HTMLbioPic = replacePlaceholder(ns.HTMLbioPic, ns.bio.pictureUrl);
        $('#picture').append(ns.HTMLbioPic);

        ns.HTMLheaderName = ns.HTMLheaderName.replace("%data%", ns.bio.name);
        ns.HTMLheaderRole = ns.HTMLheaderRole.replace("%data%", ns.bio.role);
        /*
         ns.HTMLheaderName = replacePlaceholder(ns.HTMLheaderName, ns.bio.name);
         ns.HTMLheaderRole = replacePlaceholder(ns.HTMLheaderRole, ns.bio.role);
         */
        $('#name').prepend(ns.HTMLheaderName + ns.HTMLheaderRole);


        var testStr = replacePlaceholder(ns.testString, "images/home.png", ns.bio.contacts.location);


        ns.HTMLlocation = (ns.HTMLlocation.replace("%data%", ns.bio.contacts.location))
            .replace("%imagefile%", "images/home.png");
        $('#location').append(ns.HTMLlocation);

        ns.HTMLWelcomeMsg = ns.HTMLWelcomeMsg.replace("%data%", ns.bio.welcomeMessage);
        $("#welcome-msg").append(ns.HTMLWelcomeMsg);

        var headerFilter = "#headerContacts";

        ns.HTMLmobile = (ns.HTMLmobile.replace("%data%", ns.bio.contacts.mobile))
            .replace("%imagefile%", "images/phone.png");
        $(headerFilter).append(ns.HTMLmobile);

        ns.HTMLemail = (ns.HTMLemail.replace("%data%", ns.bio.contacts.email))
            .replace("%imagefile%", "images/email.png");
        $(headerFilter).append(ns.HTMLemail);

        ns.HTMLgithub = (ns.HTMLgithub.replace("%data%", ns.bio.contacts.github))
            .replace("%imagefile%", "images/github.png");
        $(headerFilter).append(ns.HTMLgithub);

        ns.HTMLtwitter = (ns.HTMLtwitter.replace("%data%", ns.bio.contacts.twitter))
            .replace("%imagefile%", "images/twitter.png");
        $(headerFilter).append(ns.HTMLtwitter);

        var footerFilter = "#footerContacts";

        ns.HTMLmobileFooter = (ns.HTMLmobileFooter.replace("%data%", ns.bio.contacts.mobile))
            .replace("%imagefile%", "images/phone.png");
        $(footerFilter).append(ns.HTMLmobileFooter);

        ns.HTMLemailFooter = (ns.HTMLemailFooter.replace("%data%", ns.bio.contacts.email))
            .replace("%imagefile%", "images/email.png");
        $(footerFilter).append(ns.HTMLemailFooter);

        ns.HTMLgithubFooter = (ns.HTMLgithubFooter.replace("%data%", ns.bio.contacts.github))
            .replace("%imagefile%", "images/github.png");
        $(footerFilter).append(ns.HTMLgithubFooter);

        ns.HTMLtwitterFooter = (ns.HTMLtwitterFooter.replace("%data%", ns.bio.contacts.twitter))
            .replace("%imagefile%", "images/twitter.png");
        $(footerFilter).append(ns.HTMLtwitterFooter);


        var skillsFilter = "#skills";
        if (ns.bio.skills.length > 0) {
            $(skillsFilter).append(ns.HTMLskillsStart);
            for (var i = 0; i < ns.bio.skills.length; i++) {
                var formattedSkill = (ns.HTMLskills.replace("%data%", ns.bio.skills[i].technology)).replace("%rating%", ns.bio.skills[i].rating);
                $(skillsFilter).append(formattedSkill);
            }
        }

    };

    /*
     -- The 'work' object contains an array of current and past jobs.
     -- Each element of the array is an object that contains the job details.
     */

    ns.work = {
        "jobs": [
            {
                "employer": "Highbrow Technology Inc",
                "title": "Software Consultant",
                "location": "Raleigh, NC",
                "dates": "April 2011 - present",
                "description": "Working as a Software Consultant with 3 plus years of experience in ASP .NET technologies and Front-end Web " +
                "Development including JavaScript, jQuery and HTML/CSS."
            }
        ]
    };

    /*
     -- Display function to display Work details.
     -- The different placeholder text are replaced with the corresponding property values from the 'work' object
     */

    ns.work.display = function () {
        if (ns.work.jobs.length > 0) {
            for (var i = 0; i < ns.work.jobs.length; i++) {
                var workEntryFilter = ".work-entry:last";
                $('#work-content').append(ns.HTMLworkStart);

                var formattedEmployer = ns.HTMLworkEmployer.replace("%data%", ns.work.jobs[i].employer);
                var formattedTitle = ns.HTMLworkTitle.replace("%data%", ns.work.jobs[i].title);
                $(workEntryFilter).append(formattedEmployer + formattedTitle);

                var formattedLocation = ns.HTMLworkLocation.replace("%data%", ns.work.jobs[i].location);
                var formattedDates = ns.HTMLworkDates.replace("%data%", ns.work.jobs[i].dates);
                var formattedDescription = ns.HTMLworkDescription.replace("%data%", ns.work.jobs[i].description);
                $(workEntryFilter).append(formattedDates + formattedLocation + formattedDescription);
            }
        }

    };

    /*
     -- The 'projects' object contains an array of the different projects.
     -- Each element of the array is an object that contains the project details.
     */

    ns.projects = {
        "projects": [
            {
                "title": "Dominion Maps",
                "client": "Quanta Technology",
                "location": "Raleigh, NC",
                "dates": "Feb 2013 - present",
                "description": "Dominion Maps is an interactive mapping application developed in Silverlight for the Dominion power company. " +
                "It helps to visualize the live power loads and status of the substations in real time. The backend for the application was " +
                "housed in OpenPDC server. Infragistics mapping software components were used to display the shapefiles in the Silverlight " +
                "dashboard. Voltage, frequency and phasor magnitude of each substation was updated every second. The application was used by " +
                "the power station technicians in a giant panel of screens (120”)."
            },
            {
                "title": "Business Associates and Dealers Portal (BADP)",
                "client": "Independent Health",
                "location": "New York City, NY",
                "dates": "Jan 2012 - Feb 2013",
                "description": "Independence Health is one of the nation's largest health care services companies. Its primary operations " +
                "include health insurance products for employer groups and Medicare beneficiaries. This project goal was to create a portal " +
                "for managing business associates and dealers for the management. It facilitates the business to instantly get information " +
                "from different data sources."
            },
            {
                "title": "E-Signature",
                "client": "Direct Mortgage Corporation",
                "location": "Midvale, UT",
                "dates": "April 2011 - Dec 2011",
                "description": "E-Signature is a DMC process to sign the PDF documents by the loan officer. The PDF documents are converted to " +
                "image format and sent to the browser for signing. The documents are verified page by page with watermark on it. The documents " +
                "which are not signed are sent back to the borrower for modification/ resubmission. A 50 page document can be easily loaded " +
                "asynchronously and can be signed page by page."
            }

        ]
    };

    /*
     -- Display function to display Project details.
     -- The different placeholder text are replaced with the corresponding property values from the 'project' object
     */

    ns.projects.display = function () {
        for (var i = 0; i < ns.projects.projects.length; i++) {
            $('#project-content').append(ns.HTMLprojectStart);

            var formattedTitle = ns.HTMLprojectTitle.replace("%data%", (ns.projects.projects[i].title + " - " +
            ns.projects.projects[i].client + ", " + ns.projects.projects[i].location));
            var formattedDates = ns.HTMLprojectDates.replace("%data%", ns.projects.projects[i].dates);
            var formattedDescription = ns.HTMLprojectDescription.replace("%data%", ns.projects.projects[i].description);
            $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

        }
    };

    /*
     -- The 'education' object contains a 'schools' array and an 'onlineCourses' array.
     -- Each of these array elements is an object that contains the details of the schools and online courses.
     */

    ns.education = {
        "schools": [
            {
                "name": "Johns Hopkins University",
                "location": "Baltimore, MD",
                "dates": "2000-2001",
                "degree": "MS",
                "major": "Computer Science",
                "url": "http://www.jhu.edu"
            },
            {
                "name": "Sri Venkateswara College of Engg",
                "location": "Chennai, India",
                "dates": "1994-1998",
                "degree": "BE",
                "major": "Computer Science and Engineering",
                "url": "http://www.svce.ac.in/"
            }
        ],
        "onlineCourses": [
            {
                "title": "Front-end Web Developer Nanodegree",
                "school": "Udacity",
                "dates": "December 2014",
                "url": "https://www.udacity.com/course/nd001"
            }
        ]
    };

    /*
     -- Display function to display Education details.
     -- The different placeholder text are replaced with the corresponding property values from the 'education' object.
     */

    ns.education.display = function () {
        for (var i = 0; i < ns.education.schools.length; i++) {
            $('#education-content').append(ns.HTMLschoolStart);

            var formattedName = ns.HTMLschoolName.replace("%data%", ns.education.schools[i].name);
            formattedName = formattedName.replace("%url%", ns.education.schools[i].url);
            var formattedDegree = ns.HTMLschoolDegree.replace("%data%", ns.education.schools[i].degree);

            var educationEntryFilter = ".education-entry:last";

            $(educationEntryFilter).append(formattedName + formattedDegree);
            $(educationEntryFilter).append(ns.HTMLschoolDates.replace("%data%", ns.education.schools[i].dates));
            $(educationEntryFilter).append(ns.HTMLschoolLocation.replace("%data%", ns.education.schools[i].location));
            $(educationEntryFilter).append(ns.HTMLschoolMajor.replace("%data%", ns.education.schools[i].major));
        }

        $(educationEntryFilter).append(ns.HTMLonlineClasses);

        for (i = 0; i < ns.education.onlineCourses.length; i++) {
            var formattedTitle = ns.HTMLonlineTitle.replace("%data%", ns.education.onlineCourses[i].title);
            formattedTitle = formattedTitle.replace("%url%", ns.education.onlineCourses[i].url);
            var formattedSchool = ns.HTMLonlineSchool.replace("%data%", ns.education.onlineCourses[i].school);
            ns.HTMLonlineURL = (ns.HTMLonlineURL.replace("%data%", ns.education.onlineCourses[i].url))
                .replace("%url%", ns.education.onlineCourses[i].url);

            $(educationEntryFilter).append(formattedTitle + formattedSchool);
            $(educationEntryFilter).append(ns.HTMLonlineDates.replace("%data%", ns.education.onlineCourses[i].dates));
            $(educationEntryFilter).append(ns.HTMLonlineURL);
        }
    };

    // locationDetails object has a property corresponding to each pin displayed on the map.
    // The value of the property is a short description of the corresponding location with a picture
    ns.locationDetails = {

        "chennai": '<div class="col-lg-8 col-md-8"><h1>City of Chennai</h1><hr><p>Chennai is the capital city of the ' +
        'Indian state of Tamil Nadu. Located on the Coromandel Coast off the Bay of Bengal, it is the biggest industrial ' +
        'and commercial centre in South India, and a major cultural, economic and educational centre. ' +
        '<a href="http://en.wikipedia.org/wiki/Chennai">Wikipedia</a> </p></div>' +
        '<div class="col-lg-4 col-md-4"><img class="desImage" src="images/chennai.jpg"></div>',

        "new york": '<div class="col-lg-8 col-md-8"><h1>New York City</h1><hr><p>New York – often called New York City or' +
        ' the City of New York to distinguish it from the State of New York, of which it is a part – is the most populous ' +
        'city in the United States and the center of the New York metropolitan area, the premier gateway for legal ' +
        'immigration to the United States. <a href="http://en.wikipedia.org/wiki/New_York_City">Wikipedia</a></p></div>' +
        '<div class="col-lg-4 col-md-4"><img class="desImage" src="images/newyork.jpg"></div>',

        "raleigh": '<div class="col-lg-8 col-md-8"><h1>City of Raleigh</h1><hr><p> Raleigh is the capital of the state of' +
        ' North Carolina as well as the seat of Wake County in the United States. Raleigh is known as the "City of Oaks" ' +
        'for its many oak trees, which line the streets in the heart of the city. ' +
        '<a href="http://en.wikipedia.org/wiki/Raleigh,_North_Carolina">Wikipedia</a></p></div>' +
        '<div class="col-lg-4 col-md-4"><img class="desImage" src="images/raleigh.jpg"></div>',

        "baltimore": '<div class="col-lg-8 col-md-8"><h1>City of Baltimore</h1><hr><p>Baltimore is the largest city in ' +
        'the State of Maryland, the largest independent city in the United States, and the 26th-most populous city in ' +
        'the country. <a href="http://en.wikipedia.org/wiki/Baltimore">Wikipedia</a></p></div>' +
        '<div class="col-lg-4 col-md-4"><img class="desImage" src="images/baltimore.jpeg"></div>',

        "midvale": '<div class="col-lg-8 col-md-8"><h1>City of Midvale</h1><hr><p>Midvale is a city in Salt Lake County, ' +
        'Utah, United States. It is part of the Salt Lake City, Utah Metropolitan Statistical Area. The population was ' +
        '27,964 at the 2010 census. <a href="http://en.wikipedia.org/wiki/Midvale,_Utah">Wikipedia</a></p></div>' +
        '<div class="col-lg-4 col-md-4"><img class="desImage" src="images/midvale.jpg"></div>'
    };

    // Calling the display functions for each section of the resume.
    ns.bio.display();
    ns.work.display();
    ns.projects.display();
    ns.education.display();

    // Adding Google map with pins on locations in the resume
    $('#mapDiv').append(ns.googleMap);

})();