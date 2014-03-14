// Authors: Mark Smullen and Terry Penner
// Date Created: March 12, 2014
// Purpose: Supports the devotionalpages.html page

// Global Variables
// ****************************************************************************
var currentPage;

// Document initialization
// ****************************************************************************
$(document).ready(function() {
	// Loading the user's current page at the beginning and setting the text size
	currentPage = permenantStorage.getItem("page");
	if (currentPage == null) {
		currentPage = 2;
	}
	changePage();
	setScale(permenantStorage.getItem("font"));
	
	// Binding the event to update the progress bar to when the height changes
	$(window).on("scroll", updateProgress);
	
	// Changing content pages and updating progress when the user swipes side to side
	$("#content").on("swipeleft", function(e) {
		currentPage++;
		if (currentPage > 12) {
			currentPage = 12;
		}
		else {
			if (currentPage > permenantStorage.getItem("page")) {
				permenantStorage.setItem("page", currentPage);
			}
			changePage();
		}
	});
	$("#content").on("swiperight", function(e) {
		currentPage--;
		if (currentPage < 2) {
			currentPage = 2;
		}
		else {
			changePage();
		}
	});
	
	// Making sure that scrolling up and down is still enabled
	$("#content").on('movestart', function(e) {
		if ((e.distX > e.distY && e.distX < -e.distY) ||
		(e.distX < e.distY && e.distX > -e.distY)) {
			e.preventDefault();
		}
	});
});

// Support functions
// ****************************************************************************

// This function updates the progress bar based on the user's current place in the page
function updateProgress() {
	percent = $(document).height() - $(window).height() > 0 ?
			($(document).scrollTop() / ($(document).height() - $(window).height())) : 0;

	var totalPercent = (currentPage - 2 + percent) / 11 * 100;
	$("#progressbar").css("width", totalPercent + "%");
	$("#menu").html("" + $(document).height() + "," + $(window).height() + "," + currentPage);
	
	if (totalPercent == 100) {
		permenantStorage.setItem("completed", true);
	}
}

// This function reloads the content in the page from the new file we want
function changePage() {
	$("#content").toggle().attr("data-html", currentPage + "%20ChristianStarterKit");
	loadDoc();
	$("#content").toggle();
	$(document).scrollTop(0);
}
