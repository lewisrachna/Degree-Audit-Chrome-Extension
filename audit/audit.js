/*
Scrapes the necessary information from your Northeastern Degree Audit page and displays it in an easily accessible and digestable manner
*/

console.log("Welcome to your new degree audit!!");

// save the head and body of the original page
var body = document.getElementsByTagName('body')[0];
var head = document.getElementsByTagName('head')[0];

// create a new body to add elements to
var newBody = document.createElement('body');

// define the necessary variables
var textBlocks = body.getElementsByTagName('font');
var tables = body.getElementsByTagName('table');
var words = body.getElementsByClassName("auditText");
var buttons = body.getElementsByClassName("form");

var inner = tables[2].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0].getElementsByTagName('td')[0].getElementsByTagName('table')[0].getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1].getElementsByTagName('td')[0].getElementsByTagName('pre')[0];
var innerParagraphs = inner.getElementsByTagName('b');
var innerLinks = inner.getElementsByTagName('a');
const mainCourseRequirements = [];
const nuPaths = [];
const otherRequirements = [];

var linkedInfo = document.querySelector("body > table:nth-child(6) > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(2) > td > pre > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > spacer > font > pre");
var haveRequirementsBeenSatisfied = linkedInfo.getElementsByTagName('font')[0].innerHTML; //"AT LEAST ONE REQUIREMENT HAS NOT BEEN SATISFIED" OR all have been satisfied
const mainCourseRequirementsInfo = [];
const nuPathsInfo = [];
const otherRequirementsInfo = [];

var paragraphNum = 5;
var categoryNum = 0;
while(!(innerParagraphs[paragraphNum].innerHTML.includes("NUpath"))) {
  mainCourseRequirements[categoryNum] = innerParagraphs[paragraphNum].innerHTML;
  categoryNum += 1;
  paragraphNum += 1;
}
//console.log(mainCourseRequirements);

paragraphNum = paragraphNum + 7; // skip over NUpath description
var pathNum = 0;
toEight = 0;
while (!(toEight === 8)) {
  nuPaths[pathNum] = innerParagraphs[paragraphNum].innerHTML;
  toEight += 1;
  paragraphNum += 1;
  pathNum += 1;
}
//console.log(nuPaths);

var otherCategoryNum = 0;
while(!(innerParagraphs[paragraphNum].innerHTML.includes("LEGEND"))) {
  otherRequirements[otherCategoryNum] = innerParagraphs[paragraphNum].innerHTML;
  otherCategoryNum += 1;
  if (innerParagraphs[paragraphNum].innerHTML.includes("HONORS COURSES")) { //skip honors courses description
    paragraphNum += 8;
  }
  else if (innerParagraphs[paragraphNum].innerHTML.includes("RESIDENCY REQUIREMENT")) { //skip residency requirements description
    paragraphNum += 2;
  }
  else {
    paragraphNum += 1;
  }
}
//console.log(otherRequirements);


// get the general info
var preparedDateAndNUID = document.createElement('p');
preparedDateAndNUID.innerHTML = textBlocks[1].innerHTML;
var nameAndGraduationDate = document.createElement('p');
nameAndGraduationDate.innerHTML = textBlocks[2].innerHTML;
var programCodeAndCatalogYear = document.createElement('p');
programCodeAndCatalogYear.innerHTML = textBlocks[3].innerHTML.substring(0, textBlocks[3].innerHTML.indexOf("CATALOG")).concat(", ".concat(textBlocks[3].innerHTML.substring(textBlocks[3].innerHTML.indexOf("CATALOG"))));
var degreeTitle = document.createElement('p');
degreeTitle.innerHTML = textBlocks[4].innerHTML;
var majorTitle = document.createElement('p');
majorTitle.innerHTML = textBlocks[5].innerHTML;

// separate lines from general info
var myName = document.createElement('p');
myName.innerHTML = nameAndGraduationDate.innerHTML.substring(0,nameAndGraduationDate.innerHTML.indexOf("GRADUATION")-2);
var gradDate = document.createElement('p');
gradDate.innerHTML = nameAndGraduationDate.innerHTML.substring(nameAndGraduationDate.innerHTML.indexOf("GRADUATION"));
var nuid = document.createElement('p');
nuid.innerHTML = "NUID: ".concat(preparedDateAndNUID.innerHTML.substring(26));
var preparedDate = document.createElement('p');
preparedDate.innerHTML = preparedDateAndNUID.innerHTML.substring(0, 26);

//create wrapper
var wrapper = document.createElement('div');
wrapper.setAttribute("id", "wrapper");
newBody.appendChild(wrapper);

// create header
var header = document.createElement('section');
header.setAttribute("id", "header");
wrapper.appendChild(header);

var flexContainer = document.createElement('div');
flexContainer.setAttribute("class", "container flex-container");
header.appendChild(flexContainer);

var logoDiv = document.createElement('div');
logoDiv.setAttribute("class", "logo");
flexContainer.appendChild(logoDiv);

var nuLogo = document.createElement('img');
nuLogo.setAttribute("src", "https://mynortheastern-icons-portal.s3.amazonaws.com/mynortheastern-logo-white.png");
logoDiv.appendChild(nuLogo);

var myPaws = document.createElement('h2');
myPaws.innerHTML = "myPaws";
logoDiv.appendChild(myPaws);

// create content
var content = document.createElement('section');
content.setAttribute("id", "content");
wrapper.appendChild(content);

var generalInfo = document.createElement('section');
generalInfo.setAttribute("id", "general");
wrapper.appendChild(generalInfo);

var generalInfoDiv = document.createElement('div');
generalInfoDiv.setAttribute("class", "general-info");
generalInfoDiv.appendChild(myName);
generalInfoDiv.appendChild(gradDate);
generalInfoDiv.appendChild(degreeTitle);
generalInfoDiv.appendChild(majorTitle);
generalInfoDiv.appendChild(nuid);
generalInfoDiv.appendChild(preparedDate);
generalInfoDiv.appendChild(programCodeAndCatalogYear);
generalInfo.appendChild(generalInfoDiv);

var completionInfo = document.createElement('section');
completionInfo.setAttribute("id", "completion");
wrapper.appendChild(completionInfo);

var completionInfoDiv = document.createElement('div');
completionInfoDiv.setAttribute("class", "completion-info");
completionInfo.appendChild(completionInfoDiv);

var mainCourseRequirementsTable = document.createElement('table');
completionInfoDiv.appendChild(mainCourseRequirementsTable);

var nuPathsTable = document.createElement('table');
completionInfoDiv.appendChild(nuPathsTable);

var otherRequirementsTable = document.createElement('table');
completionInfoDiv.appendChild(otherRequirementsTable);



// at the very end, overwrite the body with our new body
// body.remove();
// head.after(newBody);
