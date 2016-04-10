// JavaScript File
$(function() {
	    'use strict';
	    console.log("ready!");
	    var currentSection = "";
	
	    changeContentSectionTo("#about");
	
	    $("#menu-aboutme, #menu-skills,#menu-education, #portfolio, #menu-contacts").click(function(event) {
	        var contentID = event.target.id.replace("menu-", "#");
	        changeContentSectionTo(contentID, 700);
	    });
	
	    function changeContentSectionTo(sectionName, animationDuration) {
	        if (currentSection !== sectionName) {
	            $("#content").children().hide();
	            $(sectionName).show(animationDuration ? animationDuration : 0, "linear");
	            currentSection = sectionName;
	        }
	    }
	});
