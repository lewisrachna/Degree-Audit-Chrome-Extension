console.log("Welcome to your new degree audit!!");

// define all variables
var body = document.getElementsByTagName('body')[0];
var head = document.getElementsByTagName('head')[0];

// create a new body to add components to
var newBody = document.createElement('body');
body.remove();
head.after(newBody);

var paragraphs = body.getElementsByTagName('b');
var textBlocks = body.getElementsByTagName('font');
var tables = body.getElementsByTagName('table');
var words = body.getElementsByClassName("auditText");

// get the page headers
var preparedDateAndNUID = textBlocks[1].textContent;
var nameAndGraduationDate = textBlocks[2].textContent;
var programCodeAndCatalogYear = textBlocks[3].textContent;
var degreeTitle = textBlocks[4].textContent;
var majorTitle = textBlocks[5].textContent;

// attempt to add something to the new body
var div1 = document.createElement('h1')
div1.innerHTML = "THIS IS THE NEW PAGE";
newBody.appendChild(div1);
