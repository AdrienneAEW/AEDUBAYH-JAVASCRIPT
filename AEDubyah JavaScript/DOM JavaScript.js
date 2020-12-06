//DOM JavaScript
//GLOBAL JAVASCRIPT
//Date Format
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = d.getDate();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthnow = d.toLocaleString("default", {month: "long"});
var year = d.getFullYear();
var domDate = d.toDateString();

//PRACTICE SECTIONS
//DOM Dates
var dateColor = domDate.fontcolor("tomato");
document.getElementById("dom-date1").innerHTML = dateColor;

let today = d.toLocaleString()
let todaydate = d.toLocaleDateString()
let todayday = d.toLocaleString("default", {weekday: "long"})

    document.getElementById("dom-date2").innerHTML = "To Local String = " + today + "<br>" + "A short date and time."
    document.getElementById("dom-date3").innerHTML = "To Local Date String = " + todaydate + "<br>" + "A short date number date.";
    document.getElementById("dom-date4").innerHTML = "To Local Date String = " + monthnow + "<br>" + "The current month in words.";
    document.getElementById("dom-date5").innerHTML = "To Local Date String = " + todayday + "<br>" + "The current day in words.";

  
//Submit Date - see Global date format for variables
if(document.getElementById("submit-date").value.length == 0) {
    document.getElementById("submit-date").defaultValue = monthnow + " " + day + ", " + year;
}

//DOM WINDOW
let winheight = window.innerHeight
let winwidth = window.innerWidth
let winoutheight = window.outerHeight
let winoutwidth = window.outerWidth

    document.getElementById("window-demo1").innerHTML = "The inner height of the window is " + winheight + " and the width is " + winwidth + "." + "The outer height is " + winoutheight + " and the outer width is " + winoutwidth + "."

let horpostion = window.pageXOffset
let verposition = window.pageYOffset

    document.getElementById("window-demo2").innerHTML = "Window is offset horizontally by " + horpostion + " and the offset vertically is " + verposition + "."

  
//DOM DOCUMENT
//Arrow 

let arrowForm = document.getElementById("arrow-form")
    let arrowColor = () => arrowForm.style.backgroundColor = "pink"

     
let arrowElements = arrowForm.length
let arrowFName = arrowForm["firstname"]
let arrowLName = arrowForm["lastname"]
let arrowFullName = arrowFName.value + " " + arrowLName.value

let arrowUpdate = () => {
        document.getElementById("text-entry").value = arrowFName.value + " " + arrowLName.value
        arrowForm.style.backgroundColor = "pink"
}
    
    document.getElementById("arrow-demo1").innerHTML = "Arrow Form number of elements are " + arrowElements  
    document.getElementById("arrow-demo2").innerHTML = "Arrow Form full name is " + arrowFullName
    document.getElementById("arrow-demo3").innerHTML = "Arrow form text entry is "



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

    //call demo 1
    let nameObject = document.getElementsByClassName("name-call")
    let ncList 
    for (ncList = 0; ncList < nameObject.length; ncList++) {
        nameObject[ncList].style.marginLeft = "24px"
    }

        document.getElementById("call-demo1").innerHTML = "There are " + nameObject.length + " elements with the class \"Name Call\"."
        const callsName = {
            firstCN: 'Martha',
            lastCN: 'Stewart',
            fullCN: function() {
                return this.firstCN + " " + this.lastCN
            }
        }
        
        nameObject[0].innerHTML = "I'm thinking of a special, successful person and " + callsName.firstCN + " is their first name."
        nameObject[1].innerHTML = "It's a she and of course her last name is " + callsName.lastCN + "."
        nameObject[2].innerHTML = "My special and successful person\'s\ full name is " + callsName.fullCN() + "."

    //call demo 2
    let cvObject = document.getElementsByClassName("cv-call")
    let cvList
    for (cvList = 0; cvList < cvObject.length; cvList++) {
        cvObject[cvList].style.marginLeft = "24px"
    }

    document.getElementById("call-demo2").innerHTML = "There are " + cvObject.length + " elements with the class \"CV Call\"."
    const cvClient = {
        client: 'Gregory Henry',
        clientid: 'SS513',
        cvtype: 'Traditional',
        cvcost: 274.99,
        cvexpense: 43.61
    }

    let cvtotal = cvClient.clienttotal
    cvClient.clienttotal = cvClient['cvcost'] + cvClient['cvexpense']

    document.getElementById("cv-total").innerHTML = "Total Amount Due:  $" + cvClient['clienttotal']
    document.getElementById("cv-total").style.marginLeft = "150px"
    document.getElementById("cv-total").style.fontWeight = "700"

    cvObject[0].innerHTML = "Client:  " + cvClient['client']
    cvObject[1].innerHTML = "Client ID:  " + cvClient['clientid']
    cvObject[2].innerHTML = "CV Type:  " + cvClient['cvtype']
    cvObject[3].innerHTML = "Design Fee:  $" + cvClient['cvcost']
    cvObject[4].innerHTML = "Plus Expense:  $" + cvClient['cvexpense']

    //call demo 3
    let formCall4 = document.forms["form-calls"]["call3-gender"]
    let fc4Length = formCall4.length
        formCall4[0].checked = true
    let fc4List
    let fc4Text = ""

        for (fc4List = 0; fc4List < fc4Length; fc4List++) {
            fc4Text += formCall4[fc4List].value + "<br>"
        }

        document.getElementById("call-demo4").innerHTML = "There are " + fc4Length + "  \"Gender\" selects."
        document.getElementById("call-demo5").innerHTML = "The list of values for gender radios are:" + "<br>" + fc4Text
        
        
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
