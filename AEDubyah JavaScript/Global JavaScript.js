//JavaScript Practice
//Methods
function Para3() {
	var para = document.getElementsByClassName("paragraph-h3");
	  document.getElementById("demo26").innerHTML = para;
}

function Para3a() {
	var paraA = document.getElementsByClassName("paragraph-h3");
	  document.getElementById("demo27").innerHTML = "Number of Paragraph-h3 =" + " " + paraA.length;
}

var virtual28 = ["Expert", "Professional", "Optimum", "Essential"];
var i28, v28Array, v28Text;
for (i28 = 0, v28Array= virtual28.length, v28Text = ""; i28 < v28Array; i28++){
	  v28Text += virtual28[i28] + "<br>";
}
document.getElementById("demo28").innerHTML = v28Text;

function Para3b() {
	var paraB = document.getElementsByClassName("para-demo-27");
	  paraB[1].style.backgroundColor = "pink";
	  paraB[2].style.backgroundColor = "green";
	  paraB[2].style.color = "white";
}
//Statements
var expense, labor, cost;
	var expense = 20;
	var labor = 65;
	var cost = expense + labor;
	document.getElementById("demo11").innerHTML = "The cost is: $" + cost;

var courseDays, courseCost, courseAvgCost;
	var courseDays = 60;
	var courseCost = 1500;
	var courseAvgCost = courseCost / courseDays;
	document.getElementById("demo12").innerHTML = "Course average per day = $" + courseAvgCost;

var operatorStatement = 25;
operatorStatement *= 4;
document.getElementById("demo13").innerHTML = "25 x 4=" + operatorStatement;


//Strings
var color = ["Red", "Yellow", "Orange", "Purple"];
	document.getElementById("demo1").innerHTML = color[3] + " is a beautiful color.";
	document.getElementById("demo1").style.fontWeight = "700";

var price1 = 5;
var price2 = 12;
	var total = price1 + price2;
	document.getElementById("demo4").innerHTML = "The total is: " + total;

// Object
var person = {
	firstName: "Regina",
	lastName: "The Great",
	jobTitle: "President"
};

document.getElementById("demo5").innerHTML = person.firstName + " " + person.lastName + "," + " " + person.jobTitle;

//goes with Loop
var text29 = "";
var client29 = {
	clientfname: "May",
	clientlname: "June",
	clientcompany: "Real Deal Associates",
	clientconverted: "May 1998"
};
var clientText;
for (clientText in client29) {
	text29 += client29[clientText] + " ";
};

document.getElementById("demo29").innerHTML = text29;

//Arrays
var quilts = ["King", "Queen", "Full", "Twin", "Baby"];
	document.getElementById("demo16").innerHTML = "Best sales by size: " + quilts[2];

var quilts = ["King", "Queen", "Full", "Twin", "Baby"];
	document.getElementById("demo17").innerHTML = "Worst sales by size: " + quilts[0];
	
var virtual1 = ["White Glove", "Grande", "Cut Above", "Essential"];
	document.getElementById("demo18").innerHTML = "Lowest selling service: "+ virtual1[3];

// goes with Loop
var i18 = 0;
var text18 = "";
while (virtual1[i18]) {
	text18 += virtual1[i18] + "<br>";
	i18++;
}
document.getElementById("demo30").innerHTML = text18;

//Booleans
var aew1 = 10;
var aew2 = 25;
var aew3 = 10;
	document.getElementById("demo14").innerHTML = (aew1 == aew2);

	document.getElementById("demo15").innerHTML = (aew1 == aew3);

// Dates
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.getElementById("demo6").innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " - " + days[d.getDay()];

//Date Methods
document.getElementById("demo31").innerHTML = "Full Year: " + d.getFullYear();
document.getElementById("demo32").innerHTML = "Month: " + months[d.getMonth()];
document.getElementById("demo33").innerHTML = "Day: " + days[d.getDay()] + ", the " + d.getDate();
document.getElementById("demo34").innerHTML = "Time: " + d.getHours() + ":" + d.getMinutes();

//Date - Specific
var d35 = new Date(2019, 0, 19, 11, 30);
document.getElementById("demo35").innerHTML = "You have until " + months[d35.getMonth()] + " " + d35.getDate() + ", " + d35.getFullYear() + " " + d35.getHours() + ":" + d35.getMinutes() + " a.m." + " to submit your form.";

var d36a = new Date(2019, 0, 19);
var d36b = new Date(2019, 1, 19);
document.getElementById("demo36").innerHTML = "You have between " + days[d36a.getDay()] +", " + months[d36a.getMonth()] + " " + d36a.getDate() + ", " + d36a.getFullYear() + " and " + days[d36b.getDay()] +", " + months[d36b.getMonth()]  + " " + d36b.getDate() + ", " + d36b.getFullYear() + " to submit your expenses.";

// Forms
// Reset
function clearForm(){
	alert("The form was reset.");
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("This field is required.");
        return false;
    }
}


function myFunction(){
	document.getElementById("demo2").innerHTML = "you to kiss me...";
	document.getElementById("demo3").innerHTML = "I would love too!";
}

//Change Image Attribute
document.getElementById("demo8").src = "https://picsum.photos/400/200?image=998";

	document.getElementById("demo8a-caption").style.display = "none";
	document.getElementById("demo8b-caption").style.display = "block";

//Toogle Attribute
function picToogle() {
    var pic1 = document.getElementById('demo9a-caption');
	var pic2 = document.getElementById('demo9b-caption');
   
   pic1.style.display = (
	pic1.style.display == "none" ? "block" : "none");
	
   pic2.style.display = (
	pic2.style.display == "none" ? "block" : "none");
}


//Background Toogle Attribute
function bgToogle() {
    var bgColor = document.getElementById("demo19");
	 
	bgColor.style.backgroundColor = (
		bgColor.style.backgroundColor == "black" ? "royalblue" : "black");

	if (bgColor.style.backgroundColor == "black") {
		document.getElementById("color-toggle").innerHTML = "Color 2";
	} else {
		document.getElementById("color-toggle").innerHTML = "Color 1";
	}
}

//Background Mouseover Attribute

document.getElementById("demo21").onmouseover = function() {mouseOver()};
document.getElementById("demo21").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("demo20").style.backgroundColor = "yellow";
	document.getElementById("demo20").style.color = "blue";
	document.getElementById("demo20").style.transition = "all 1s";
	document.getElementById("demo20").style.webkitTransition = "all 1s"; /* Safari */
	document.getElementById("demo21").innerHTML = "Color 2";
	document.getElementById("demo21").style.paddingTop
	
}

function mouseOut() {
    document.getElementById("demo20").style.backgroundColor = "red";
	document.getElementById("demo20").style.color = "white";
	document.getElementById("demo20").style.transition = "all 1s";
	document.getElementById("demo20").style.webkitTransition = "all 1s"; /* Safari */
	document.getElementById("demo21").innerHTML = "Color 1";
}

//Event Listener
//Background Toggle Image
var imageChange = document.getElementById('image-toggle');
	imageChange.addEventListener('click',function() {
    document.getElementById('demo22').classList.toggle('image-change2');
});

//Animation
function sqAnimate() {
  var elem = document.getElementById("demo10");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}



// Global Javascrip for AEDubyah Websites

Date.prototype.globalMonth = function() {
	if (this.getMonth() == 0){this.aioProp = "January"};
	if (this.getMonth() == 1){this.aioProp = "February"};
	if (this.getMonth() == 2){this.aioProp = "March"};
	if (this.getMonth() == 3){this.aioProp = "April"};
	if (this.getMonth() == 4){this.aioProp = "May"};
	if (this.getMonth() == 5){this.aioProp = "June"};
	if (this.getMonth() == 6){this.aioProp = "July"};
	if (this.getMonth() == 7){this.aioProp = "August"};
	if (this.getMonth() == 8){this.aioProp = "September"};
	if (this.getMonth() == 9){this.aioProp = "October"};
	if (this.getMonth() == 10){this.aioProp = "November"};
	if (this.getMonth() == 11){this.aioProp = "December"};
};

Date.prototype.globalDay = function() {
	if (this.getDay() == 0){this.aioProp = "Sunday"};
	if (this.getDay() == 1){this.aioProp = "Monday"};
	if (this.getDay() == 2){this.aioProp = "Tuesday"};
	if (this.getDay() == 3){this.aioProp = "Wednesday"};
	if (this.getDay() == 4){this.aioProp = "Thurday"};
	if (this.getDay() == 5){this.aioProp = "Friday"};
	if (this.getDay() == 6){this.aioProp = "Saturday"};
};

function myFunction1() {
    var d = new Date();
    d.globalMonth();
    document.getElementById("demo7").innerHTML = d.aioProp;
}

function dateYear() {
    var d = new Date();
    document.getElementById("demo23").innerHTML = d.getFullYear();
}

//Updated Date
var udate = new Date(document.lastModified);
var umonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	document.getElementById("demo24").innerHTML = umonths[udate.getMonth()] + " " + udate.getDate() + ", " + udate.getFullYear();
	
	document.getElementById("demo25").innerHTML = udate;
	
