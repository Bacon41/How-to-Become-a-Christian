// Authors: Mark Smullen and Terry Penner
// Date Created: May 13, 2014
// Purpose: Supports the about.html page

// Global Variables
// ****************************************************************************
var permenantStorage = window.localStorage;

// Support functions
// ****************************************************************************
// This function takes a url and changes the current page to be it
function redirect(page) {
    window.location = page;
}