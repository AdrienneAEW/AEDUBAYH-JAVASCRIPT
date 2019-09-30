//DOM JavaScript
//GLOBAL JAVASCRIPT
//Date Format
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()];
var year = d.getFullYear();
var domDate = d.toDateString();

//PRACTICE SECTIONS
//DOM Dates
var dateColor = domDate.fontcolor("tomato");
document.getElementById("dom-date1").innerHTML = dateColor;

//Arrow
let num1 = 5
let num2 = 10
const sumArrow = (num1, num2) => num1 + num2
const arrowTotal = sumArrow(5,7)
	document.getElementById("arrow-demo1").innerHTML = "The total is " + arrowTotal

const arrowName = (name1, name2) => name2 + ", " + name1
let clientName = arrowName("Adrienne","Warden")
    document.getElementById("arrow-demo2").innerHTML = "Client up next is: " + clientName

const maRed = (maidenName, marriedName) => maidenName + " after marriage " + maidenName + " - " + marriedName
let motherName = maRed("Warden","Brown")
    document.getElementById("arrow-demo3").innerHTML = "My mother's maiden name was " + motherName



//Submit Date - see Global date format for variables
if(document.getElementById("submit-date").value.length == 0) {
    document.getElementById("submit-date").defaultValue = month + " " + day + ", " + year;
}
//DOM DOCUMENT
var mDoc = document.getElementById("dom-document");
var mDocP = mDoc.getElementsByTagName("p");

document.getElementById("dom-doc1").innerHTML = "There are " + mDocP.length + " paragraphs in this section.";

//Call a Specific HTML Element

document.getElementById("dom-doc-title").innerHTML = document.title;

var domURL = document.URL;
document.getElementById("dom-doc3").innerHTML = "The document URL is: " + domURL;

var domModify = document.lastModified;
document.getElementById("dom-doc4").innerHTML = "This document was modified on: " + domModify;

//Query Selector
document.querySelector(".title").style.fontStyle = "underline";
//ARRAYS
//Value Of
var arrServices = ["Optimal", "Expert", "Professional", "Essential"];
document.getElementById("arr-demo1").innerHTML = arrServices.valueOf();

//Splice
var arrList = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
arrList.splice(5, 0, "Item 5a", "Item 6");
document.getElementById("arr-demo2").innerHTML = arrList;

var arrListA = ["Item A", "Item B", "Item C", "Item D", "Item E"];
arrListA.splice(4, 1, "Item Da");
document.getElementById("arr-demo3").innerHTML = arrListA;

var arrListB = ["Item A", "Item B", "Item C", "Item D", "Item E", "Hmmm", "Yupe"];
arrListB.splice(4, 1);
document.getElementById("arr-demo4").innerHTML = arrListB;

//Forms
var formDate = document.getElementById("fname").value;
var emptyDate = Boolean(formDate == "")
document.getElementById("form-demo").innerHTML = emptyDate;

