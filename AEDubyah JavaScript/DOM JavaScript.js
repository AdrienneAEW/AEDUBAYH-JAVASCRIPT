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

//Submit Date - see Global date format for variables
if(document.getElementById("submit-date").value.length == 0) {
    document.getElementById("submit-date").defaultValue = month + " " + day + ", " + year;
}
//DOM DOCUMENT
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

function formHello() {
    let firname = document.forms["multi-form"]["FirstName"].value
    let namedin = firname
    if (firname == "") {
        alert("Hello No Name")
    } else {
        alert("Hello " + namedin)
    }
}

function formChecks() {
    let
}

//Objects
const hairItem = {
    brush: 'hard bristle',
    comb: 'pic',
    curlers: 'foam'
}

let straighten = hairItem.press
 hairItem.press = 'hotcomb'

let hairClean = hairItem.wash
 hairItem.wash = 'head and shoulders'

document.getElementById("dom-hair1").innerHTML =  "For afros we " + hairItem.comb;
document.getElementById("dom-hair2").innerHTML = "We straighten your hair with a " + hairItem['press']
document.getElementById("dom-hair3").innerHTML = "For high dandruff we wash with " +hairItem['wash']

const someObject = {
    someTime: function () {
        return "hello"
    }
}

let newObject = someObject.someTime()
    document.getElementById("dom-hair4").innerHTML = "Say " + someObject.someTime()

//Object Challenges
const emptyObject = {

}

emptyObject.addOne = "addition one"
console.log(emptyObject.addOne)

let newAdd = emptyObject.addTwo
 emptyObject.addTwo = 'addition two'

console.log(emptyObject['addTwo'])

emptyObject.addThree = 'addition three'
console.log(emptyObject.addThree)

emptyObject.addFour = 'addition four'
let lastAdd = emptyObject.addFive
emptyObject.addFive = 'addition five'

document.getElementById("dom-obj1").innerHTML = emptyObject.addFour + " added with dot notation and " + emptyObject['addFive'] + " added with bracket notation"


/* IF and ELSE */

const james = 22
const valerie = 25
const kenneth = 27
let ifQuest1;
if (james > 54) {
        ifQuest1 = "James is older then me."
    } else if (valerie > 54) {
        ifQuest1 = "Valerie is older then me."
    } else if (kenneth >+ 54) {
        ifQuest1 = "Kenneth is older than me."
    }
    else {
        ifQuest1 = "I'm older than James, Valerie and Kenneth."
    }
document.getElementById("dom-ifs1").innerHTML = ifQuest1

/* Query Selectors */
const qs1 = document.querySelector('#star-wars-characters')
const qs2 = qs1.querySelector('li')

console.log(qs2)

const qs3 = document.querySelector('[data-type="hero"]')
const qs4 = qs1.querySelector('.luke')
const qs5 = qs1.querySelector('.yoda')
const qs6 = document.querySelector('[data-type="master"]')
const qs7 = qs1.querySelector('.badboy')
const qs8 = qs1.querySelector('[data-type="villain"]')
console.log(qs3)
console.log(qs4)
console.log(qs5)
console.log(qs6)
console.log(qs7)
console.log(qs8)

const valueQS1 = document.getElementById("element-query")
  valueQS1.querySelector('#dom-selq1').innerHTML = "I'm a query selector."

const valueQS2 = document.getElementById("element-query")
  valueQS2.querySelector('#dom-selq2').innerHTML = "I'm a query selector that wants to get a value from some where else, but doesn't know how."

  /* Events */

  document.getElementById("event1-btn").addEventListener("click", eventDate)
  
  function eventDate() {
    document.getElementById("dom-events1").innerHTML = domDate
  }
  
const evBtn = document.querySelector('#event2-btn')
  evBtn.addEventListener('click', function () {
      console.log('Button is clicked')
  } )
