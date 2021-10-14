console.log("HI Rachna!!");

const paragraphs = document.getElementsByTagName('b');
const tables = document.getElementsByTagName('table');
const words = document.getElementsByClassName("auditText");

var preparedDateAndNUID = paragraphs[4];
var nameAndGraduationDate = paragraphs[5];
var programCodeAndCatalogYear = paragraphs[6];
var degreeTitle = paragraphs[7];
var majorTitle = paragraphs[8];

// make top table the length of the screen (modify buttons later)
tables[0].style.width = "100%";

// remove
const i = 0;
while (i < 5) {
  paragraphs[4].remove();
  i++;
}
