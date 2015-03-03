/*
 -- The 'bio' object contains all the personal information that is displayed in the header section of the resume.
 */

var bio = {
    "name" : "Savitha Thiyagarajan",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "443-756-4022",
        "email" : "tsavitha@gmail.com",
        "twitter" : "@tsavitha",
        "github" : "tsavitha",
        "location" : "Raleigh, NC"
    },

    "pictureUrl" : "images/savi.jpg",
    "welcomeMessage" : "Hello! Welcome to my Online Resume. Thank you for taking the time to review my resume. " +
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

// display function to display personal and contact information including skill set

bio.display = function () {

    HTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureUrl);
    $('#picture').append(HTMLbioPic);

    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#name').prepend(HTMLheaderName + HTMLheaderRole);

    HTMLlocation = (HTMLlocation.replace("%data%", bio.contacts.location)).replace("%imagefile%", "images/home.png");
    $('#location').append(HTMLlocation);

    HTMLWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#welcome-msg").append(HTMLWelcomeMsg);

    var contactsFilter = "#headerContacts";
    var footerFilter = "#footerContacts";

    HTMLmobile = (HTMLmobile.replace("%data%", bio.contacts.mobile)).replace("%imagefile%", "images/phone.png");
    HTMLmobileFooter = (HTMLmobileFooter.replace("%data%", bio.contacts.mobile)).replace("%imagefile%", "images/phone.png");
    $(contactsFilter).append(HTMLmobile);
    $(footerFilter).append(HTMLmobileFooter);

    HTMLemail = (HTMLemail.replace("%data%", bio.contacts.email)).replace("%imagefile%", "images/email.png");
    HTMLemailFooter = (HTMLemailFooter.replace("%data%", bio.contacts.email)).replace("%imagefile%", "images/email.png");
    $(contactsFilter).append(HTMLemail);
    $(footerFilter).append(HTMLemailFooter);

    HTMLgithub = (HTMLgithub.replace("%data%", bio.contacts.github)).replace("%imagefile%", "images/github.png");
    HTMLgithubFooter = (HTMLgithubFooter.replace("%data%", bio.contacts.github)).replace("%imagefile%", "images/github.png");
    $(contactsFilter).append(HTMLgithub);
    $(footerFilter).append(HTMLgithubFooter);

    HTMLtwitter = (HTMLtwitter.replace("%data%", bio.contacts.twitter)).replace("%imagefile%", "images/twitter.png");
    HTMLtwitterFooter = (HTMLtwitterFooter.replace("%data%", bio.contacts.twitter)).replace("%imagefile%", "images/twitter.png");
    $(contactsFilter).append(HTMLtwitter);
    $(footerFilter).append(HTMLtwitterFooter);


    var skillsFilter = "#skills";
    if (bio.skills.length > 0) {
        $(skillsFilter).append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = (HTMLskills.replace("%data%", bio.skills[i].technology)).replace("%rating%", bio.skills[i].rating);
            $(skillsFilter).append(formattedSkill);
        }
    }

};

/*
 -- The 'work' object contains an array of current and past jobs.
 -- Each element of the array is an object that contains the job details.
 */

var work = {
    "jobs" : [
        {
            "employer" : "Highbrow Technology Inc",
            "title" : "Software Consultant",
            "location" : "Raleigh, NC",
            "dates" : "April 2011 - present",
            "description" : "Working as a Software Consultant with 3 plus years of experience in ASP .NET technologies and Front-end Web " +
            "Development including JavaScript, jQuery and HTML/CSS."
        }
    ]
};

// display function to display the Work details

work.display = function () {
    if (work.jobs.length > 0) {
        for (var i = 0; i < work.jobs.length; i++) {
            var workEntryFilter = ".work-entry:last";
            $('#work-content').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(workEntryFilter).append(formattedEmployer + formattedTitle);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(workEntryFilter).append(formattedDates + formattedLocation + formattedDescription);
        }
    }

};

/*
 -- The 'projects' object contains an array of the different projects.
 -- Each element of the array is an object that contains the project details.
 */

var projects = {
    "projects" : [
        {
            "title" : "Dominion Maps",
            "client" : "Quanta Technology",
            "location" : "Raleigh, NC",
            "dates" : "Feb 2013 - present",
            "description" : "Dominion Maps is an interactive mapping application developed in Silverlight for the Dominion power company. " +
            "It helps to visualize the live power loads and status of the substations in real time. The backend for the application was " +
            "housed in OpenPDC server. Infragistics mapping software components were used to display the shapefiles in the Silverlight " +
            "dashboard. Voltage, frequency and phasor magnitude of each substation was updated every second. The application was used by " +
            "the power station technicians in a giant panel of screens (120”)."
        },
        {
            "title" :"Business Associates and Dealers Portal (BADP)",
            "client" : "Independent Health",
            "location" : "New York City, NY",
            "dates" : "Jan 2012 - Feb 2013",
            "description" : "Independence Health is one of the nation's largest health care services companies. Its primary operations " +
            "include health insurance products for employer groups and Medicare beneficiaries. This project goal was to create a portal " +
            "for managing business associates and dealers for the management. It facilitates the business to instantly get information " +
            "from different data sources."
        },
        {
            "title" : "E-Signature",
            "client" : "Direct Mortgage Corporation",
            "location" : "Midvale, UT",
            "dates" : "April 2011 - Dec 2011",
            "description" : "E-Signature is a DMC process to sign the PDF documents by the loan officer. The PDF documents are converted to " +
            "image format and sent to the browser for signing. The documents are verified page by page with watermark on it. The documents " +
            "which are not signed are sent back to the borrower for modification/ resubmission. A 50 page document can be easily loaded " +
            "asynchronously and can be signed page by page."
        }

    ]
};

// display function to display the Project details

projects.display = function () {
    for (var i = 0; i < projects.projects.length; i++) {
        $('#project-content').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", (projects.projects[i].title + " - " +
        projects.projects[i].client + ", " +
        projects.projects[i].location));
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $('.project-entry:last').append(formattedTitle + formattedDates + formattedDescription);

    }
};

/*
 -- The 'education' object contains a 'schools' array and an 'onlineCourses' array.
 -- Each of these array elements is an object that contains the details of the schools and online courses.
 */

var education = {
    "schools" : [
        {
            "name" : "Johns Hopkins University",
            "location" : "Baltimore, MD",
            "dates" : "2000-2001",
            "degree" : "MS",
            "major" : "Computer Science",
            "url" : "http://www.jhu.edu"
        },
        {
            "name" : "Sri Venkateswara College of Engg",
            "location" : "Chennai, India",
            "dates" : "1994-1998",
            "degree" : "BE",
            "major" : "Computer Science and Engineering",
            "url" : "http://www.svce.ac.in/"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-end Web Developer Nanodegree",
            "school" : "Udacity",
            "dates" : "December 2014",
            "url" : "https://www.udacity.com/course/nd001"
        }
    ]
};

// display function to display Education details

education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $('#education-content').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        formattedName = formattedName.replace("%url%", education.schools[i].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var educationEntryFilter = ".education-entry:last";
        $(educationEntryFilter).append(formattedName+formattedDegree);
        $(educationEntryFilter).append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(educationEntryFilter).append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
        $(educationEntryFilter).append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
    }

    $(educationEntryFilter).append(HTMLonlineClasses);

    for (i = 0; i < education.onlineCourses.length; i++) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[i].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        HTMLonlineURL = (HTMLonlineURL.replace("%data%", education.onlineCourses[i].url)).replace("%url%", education.onlineCourses[i].url);
        $(educationEntryFilter).append(formattedTitle+formattedSchool);
        $(educationEntryFilter).append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $(educationEntryFilter).append(HTMLonlineURL);
    }
};

bio.display();
work.display();
projects.display();
education.display();

// Adding Google map with pins on locations in the resume
$('#mapDiv').append(googleMap);
