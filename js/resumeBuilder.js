/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
    "name" : "Telsa Peng",
    "role" : "Engineer",
    "contacts" : {
        "mobile": "12345678",
        "email": "test@gmail.com",
        "github": "telsaiori",
        "location": "Taiwan"
        },
    "welcomeMessage": "Ciao~" ,
    "skills": ["ruby on rails", "Japanese", "English", "Chinese"],
    "bioPic": "images/dagatame.jpg",
    
    display: function(){
      var formattedName = HTMLheaderName.replace("%data%", bio.name);
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLmobile.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLmobile.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLmobile.replace("%data%", bio.contacts.location);
      $('#topContacts').append(formattedMobile);
      $('#topContacts').append(formattedEmail);
      $('#topContacts').append(formattedGithub);
      $('#topContacts').append(formattedLocation);
      $('#footerContacts').append(formattedMobile);
      $('#footerContacts').append(formattedEmail);
      $('#footerContacts').append(formattedGithub);
      $('#footerContacts').append(formattedLocation);

      var formattedWeclome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
      $("#header").append(formattedWeclome);
      var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
      $("#header").append(formattedBioPic);

      if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++){
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
          $('#skills').append(formattedSkill);
        }
      }

    }
 };

 var education = {
    "schools": [{
       "name": "Altheia University",
       "location": "Taipei",
       "degree": "Bachelor of Science",
       "majors": ["Information Management"],
       "dates": 2006
    }],
    "onlineCourses": [{
       "title": "Front-end developer nonadegree",
       "school": "udacity",
       "dates": "April 2017" ,
       "url": "https://classroom.udacity.com/nanodegrees/nd001"
    }, {
       "title": "Ruby nonadegree",
       "school": "udacity",
       "dates": "April 2016",
       "url": "https://www.udacity.com/"
    }],

  display: function(){
    for (var edu = 0; edu < education.schools.length; edu++) {
      $('#education').append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      var formattedNameAndDegree = formattedName + formattedDegree;
      $(".education-entry").append(formattedNameAndDegree);
      var formattedEduDate = HTMLschoolName.replace("%data%", education.schools[edu].dates);
      $(".education-entry").append(formattedEduDate);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
      $(".education-entry").append(formattedLocation);
      if (education.schools[edu].majors.length > 0 ) {
        for (var i = 0; i < education.schools[edu].majors.length; i++) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[i]);
          $(".education-entry").append(formattedMajor);
        }
      }
    }

    $('#education').append(HTMLonlineClasses);
    for (var online = 0; online < education.onlineCourses; online++) {
      $('#education').append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      var formattedTitleAndSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedTitleAndSchool);
      var formattedMoocDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
      $(".education-entry:last").append(formattedMoocDate);
      var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
      $(".education-entry:last").append(formattedURL);
    }
  }
 };


 var work = {
    "jobs": [{
       "employer": "Allion",
       "title": "Assitant Engineer", 
       "location": "Taiwan",
       "dates": "March 2005 ~ March 2007",
       "description": "QA"  
    },{
       "employer": "Toshiba", 
       "title": "Software Engineer",
       "location": "Taiwan",
       "dates": "April 2007 ~ March 2010",
       "description": "Blah~blah" 
    }],
    display: function(){
      for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formettedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formettedEmployerTitle);
        var formattedJobDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedJobDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  };

  var projects = {
      projects: [{
        "title": "Atlus game news",
        "dates": "Jan 2012 - Jan 2013",
        "description": "Collect Atlus game news for gamers",
        "images": ["images/atlus_post.jpg"]
      }],

      display: function(){
        for (var project = 0; project < projects.projects.length; project++) {
          $("#projects").append(HTMLprojectStart);
          var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
          $(".project-entry:last").append(formattedTitle);
          var formattedPDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
          $(".project-entry:last").append(formattedPDates);
          var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
          $(".project-entry:last").append(formattedDescription);
          if (projects.projects[project].images.length > 0) {
            for (var i = 0; i < projects.projects[project].images.length; i++) {
              var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[i]);
              $(".project-entry:last").append(formattedImages);
            }
          }

    }
      }

  };

  bio.display();
  education.display();
  work.display();
  projects.display();
  $('#mapDiv').append(googleMap);