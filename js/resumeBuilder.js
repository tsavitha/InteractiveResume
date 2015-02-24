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
    "skills" : ["ASP .NET", "ASP .NET MVC", "JS", "jQuery", "jQuery UI", "jQuery Mobile", "HTML", "CSS", "Bootstrap 3.x", "XML"]
};

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

// display function to display personal and contact information including skill set

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#name').append(formattedName+formattedRole);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#location').append(formattedLocation);

    var formattedPic = HTMLbioPic.replace("%data%",bio.pictureUrl);
    $('#picture').append(formattedPic);

    var msgFilter = "#about";

    var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $(msgFilter).prepend(formattedMsg);

    var contactsFilter = "#headerContacts";
    var footerFilter = "#footerContacts";

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    formattedMobile = formattedMobile.replace("%imagefile%","images/phone.png");
    $(contactsFilter).append(formattedMobile);
    $(footerFilter).append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    formattedEmail = formattedEmail.replace("%imagefile%","images/email.jpeg");
    $(contactsFilter).append(formattedEmail);
    $(footerFilter).append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formattedGithub = formattedGithub.replace("%imagefile%","images/github.png");
    $(contactsFilter).append(formattedGithub);
    $(footerFilter).append(formattedGithub);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    formattedTwitter = formattedTwitter.replace("%imagefile%","images/twitter.jpeg");
    $(contactsFilter).append(formattedTwitter);
    $(footerFilter).append(formattedTwitter);

    $(contactsFilter).find("img").each(function(){
        $(this).addClass("no-padding");
    });

    $(footerFilter).find("img").each(function(){
        $(this).addClass("no-padding");
    });

    var skillsFilter ="#skills";
    if(bio.skills.length > 0) {
        $(msgFilter).append(HTMLskillsStart);
        for(skill in bio.skills) {
            $(skillsFilter).append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    }

}();

// display function to display the Work details

work.display = function() {
    if(work.jobs.length > 0) {
        for(job in work.jobs) {
            var workEntryFilter = ".work-entry:last";
            $('#work-content').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            $(workEntryFilter).append(formattedEmployer+formattedTitle);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(workEntryFilter).append(formattedDates+formattedLocation+formattedDescription);
        }
    }
}();

// display function to display the Project details

projects.display = function() {
  for(project in projects.projects) {
      $('#project-content').append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", (projects.projects[project].title + " - " +
                                                               projects.projects[project].client + ", " +
                                                               projects.projects[project].location));
      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $('.project-entry:last').append(formattedTitle+formattedDates+formattedDescription);

  }
}();

// display function to display Education details

education.display = function() {
    for(school in education.schools) {
        $('#education-content').append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        formattedName = formattedName.replace("%url%", education.schools[school].url);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        var educationEntryFilter = ".education-entry:last";
        $(educationEntryFilter).append(formattedName+formattedDegree);
        $(educationEntryFilter).append(formattedDates);
        $(educationEntryFilter).append(formattedLocation);
        $(educationEntryFilter).append(formattedMajor);
    }

    $(educationEntryFilter).append(HTMLonlineClasses);

    for(course in education.onlineCourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        formattedTitle = formattedTitle.replace("%url%", education.onlineCourses[course].url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        formattedURL = formattedURL.replace("%url%", education.onlineCourses[course].url);
        $(educationEntryFilter).append(formattedTitle+formattedSchool);
        $(educationEntryFilter).append(formattedDates);
        $(educationEntryFilter).append(formattedURL);
    }
}();

// Adding Google map with pins on locations in the resume
$('#mapDiv').append(googleMap);