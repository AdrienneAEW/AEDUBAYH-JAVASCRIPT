//JavaScript Practice
//JS Challenges
	//Todo List
	let todoDate = document.getElementById("todo-date");
	let todoTask = document.getElementById("todo-task");
	let todoAdd = document.getElementById("addtask-btn");
	let todoMaster = document.getElementById("todo-list");

		function addTask() {
		let todoRow = document.createElement("li");
		let todoDelete = document.createElement("button");
			todoDelete.innerHTML = "X";
		let todoDeleteClass = document.createAttribute("class");
			todoDeleteClass.value = "todo-delete";
		let todoDeleteTitle = document.createAttribute("title");
			todoDeleteTitle.value = "Delete Task";
		let dateOfTask = todoDate.value;
		let taskItem = todoTask.value;
		let todoValue = document.createTextNode(dateOfTask + " - " + taskItem);
		
		
			todoDelete.setAttributeNode(todoDeleteClass);
			todoDelete.setAttributeNode(todoDeleteTitle);
		todoRow.appendChild(todoValue)
		todoRow.appendChild(todoDelete);
		todoMaster.appendChild(todoRow);
		}

	//Expense List
	let expTable = document.getElementById("expense-table");
	let expDate = document.getElementById("expense-date");
	let expDesc = document.getElementById("expense");
	let expAmount = document.getElementById("expense-amount")
	
		function addExpense() {
		let expDelete = document.createElement("button");
			expDelete.innerHTML = "X";
		let closeClass = document.createAttribute("class");
			closeClass.value = "exp-btn";
		let closeTitle = document.createAttribute("title");
			closeTitle.value = "Remove Expense";
			expDelete.setAttributeNode(closeClass);
			expDelete.setAttributeNode(closeTitle);

		let expRecord = expTable.insertRow();
		let dateOf = expRecord.insertCell(0);
		let descOf = expRecord.insertCell(1);
		let amountOf = expRecord.insertCell(2);
		let endOf = expRecord.insertCell(3);

			dateOf.innerHTML = expDate.value
			descOf.innerHTML = expDesc.value;
			amountOf.innerHTML = "$" + expAmount.value;
			endOf.appendChild(expDelete);


		}


//For Loop
var virtual28 = ["Expert", "Professional", "Optimum", "Essential"];
var i28, v28Array, v28Text;
for (i28 = 0, v28Array= virtual28.length, v28Text = ""; i28 < v28Array; i28++){
	  v28Text += virtual28[i28] + "<br>";
}
document.getElementById("demo28").innerHTML = v28Text;

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


// Object
var person = {
	firstName: "Regina",
	lastName: "The Great",
	jobTitle: "President"
};

document.getElementById("demo5").innerHTML = person.firstName + " " + person.lastName + "," + " " + person.jobTitle;


// Dates
let dayCurrent = new Date();
let dayLocal = dayCurrent.toLocaleDateString();
let monthName = dayCurrent.toLocaleDateString('default', {month: 'long'});
let dayName = dayCurrent.toLocaleDateString('default', {weekday: 'long'});
let yearCurrent = dayCurrent.getFullYear();
let dayFull = monthName + " " + dayCurrent.getDate() + ", " + yearCurrent;







	document.querySelector("#current-date1").innerHTML = "Today's date is :" + dayLocal;
	document.querySelector("#current-date2").innerHTML = "The current month is " + monthName;
	document.querySelector("#current-date3").innerHTML = "Today is " + dayName;
	document.querySelector("#current-date4").innerHTML = "The current year is ";
	document.querySelector("#current-date4").innerHTML = "Date as Month (name), day and year = " + dayFull;
	



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
	let hideMe = document.getElementById("demo2"); 
		hideMe.innerHTML = "you to kiss me...";
	let theAnswer = document.createElement("button");
		theAnswer.innerHTML = "Answer";
	let answerTitle = document.createAttribute("title");
		answerTitle.value = "Click me for an answer.";
		theAnswer.setAttributeNode(answerTitle)
	hideMe.appendChild(theAnswer);
		theAnswer.style.marginLeft = "20px";

		theAnswer.onclick = function() {
			document.getElementById("demo3").innerHTML = "I would love too!";
		}
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
	
