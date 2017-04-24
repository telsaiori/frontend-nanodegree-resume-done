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
      var formattedName = HTMLheaderName.replace("%data%", bio.name)
      var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
      $("#header").prepend(formattedRole);
      $("#header").prepend(formattedName);
      
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var formattedEmail = HTMLmobile.replace("%data%", bio.contacts.email);
      var formattedGithub = HTMLmobile.replace("%data%", bio.contacts.github);
      var formattedLocation = HTMLmobile.replace("%data%", bio.contacts.location);
      $('#topContacts').append(formattedMobile)
      $('#topContacts').append(formattedEmail)
      $('#topContacts').append(formattedGithub)
      $('#topContacts').append(formattedLocation)
      $('#footerContacts').append(formattedMobile)
      $('#footerContacts').append(formattedEmail)
      $('#footerContacts').append(formattedGithub)
      $('#footerContacts').append(formattedLocation)

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
    for (edu in education.schools) {
      $('#education').append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
      var formattedNameAndDegree = formattedName + formattedDegree;
      $(".education-entry").append(formattedNameAndDegree);
      var formattedDate = HTMLschoolName.replace("%data%", education.schools[edu].dates)
      $(".education-entry").append(formattedDate);
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
      $(".education-entry").append(formattedLocation);
      if (education.schools[edu].majors.length > 0 ) {
        for (major in education.schools[edu].majors) {
          var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[major]);
          $(".education-entry").append(formattedMajor);
        }
      }
    }

    $('#education').append(HTMLonlineClasses)
    for (online in education.onlineCourses) {
      $('#education').append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
      var formattedTitleAndSchool = formattedTitle + formattedSchool;
      $(".education-entry:last").append(formattedTitleAndSchool);
      var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
      $(".education-entry:last").append(formattedDate);
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
      for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formettedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formettedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
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
        for (project in projects.projects) {
          $("#projects").append(HTMLprojectStart);
          var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
          $(".project-entry:last").append(formattedTitle);
          var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
          $(".project-entry:last").append(formattedDates);
          var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
          $(".project-entry:last").append(formattedDescription);
          if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
              var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
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