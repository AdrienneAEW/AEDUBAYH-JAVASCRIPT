
/* React start script - 
"scripts": {
    "start": "react-scripts start"
  }
  */

//#region FAMILY APP
let famMember = document.querySelector("#family-member");
let famRelation = document.querySelector("#family-relation");
let relationChoices = famRelation.querySelectorAll('option');
let famMemberList = document.querySelector("#family-members");
let selectRelation = document.querySelector("#relation-select"); 
let resultChoice = selectRelation.querySelectorAll('option');
let relationResult = document.querySelector("#fam-category-list");
let relativeStatus = "";

//Buttons
let addFamBtn = document.querySelector("#add-member");
let addCategoryBtn = document.querySelector("#add-categories");
let viewRelationsBtn = document.querySelector("#fam-relative-btn");

//Family Members
let members = {
  name: [],
  relationship: []
}

let famRelationList = {
  myGrandmother: [],
  myGrandfather: [],
  myGrandparents: [],
  appMother: [],
  appFather: [],
  myParents: [],
  mySister: [],
  myBrother: [],
  mySiblings: [],
  myAunts: [],
  myUncles: [],
  myCousins: [],
  mySon: [],
  myDaughter: [],
  myChildren: [],
  myNieces: [],
  myNephews: []
};

addFamBtn.onclick = function() {
  if (famMember.value == "") {
    alert("You have to enter a name to submit.");
    return false;
  } 
    let newMember = famMember.value;
    let newRelation = famRelation.value;
    members.name.push(newMember);
    members.relationship.push(newRelation);

    switch (newRelation) {
      case "mother":
        famRelationList.appMother.push(newMember);
        famRelationList.myParents.push(newMember);
        break;
      
      case "father":
        famRelationList.appFather.push(newMember);
        famRelationList.myParents.push(newMember);
        break;

      case "grandfather":
        famRelationList.myGrandfather.push(newMember);
        famRelationList.myGrandparents.push(newMember);
        break;
      
      case "grandmother":
        famRelationList.myGrandmother.push(newMember);
        famRelationList.myGrandparents.push(newMember);
        break;

      case "sister":
        famRelationList.mySister.push(newMember);
        famRelationList.mySiblings.push(newMember);
        break;

      case "brother":
        famRelationList.myBrother.push(newMember);
        famRelationList.mySiblings.push(newMember);
        break;

      case "son":
        famRelationList.mySon.push(newMember);
        famRelationList.myChildren.push(newMember);
        break;

      case "daughter":
        famRelationList.myDaughter.push(newMember);
        famRelationList.myChildren.push(newMember);
        break;

      case "aunt":
        famRelationList.myAunts.push(newMember);
        break;

      case "uncle":
        famRelationList.myUncles.push(newMember);
        break;

      case "niece":
        famRelationList.myNieces.push(newMember);
        break;

      case "nephew":
        famRelationList.myNephews.push(newMember);
        break;

      case "cousin":
        famRelationList.myCousins.push(newMember);
        break;


      default:
        break;
    }
    let memberListItem = document.createElement("p");
      memberListItem.setAttribute("class", "member-name");
      memberListItem.innerHTML = newMember;
      famMemberList.appendChild(memberListItem);
      

    famMember.value = "";
}

let relations;
let relationMsg;

viewRelationsBtn.onclick = function() {
  relativeStatus = selectRelation.value;
  relationMsg = "There are no " + relativeStatus + " entries.";
    if (relativeStatus == "parents") {
        relations = famRelationList.myParents;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "father") {
      relations = famRelationList.appFather;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "mother") {
        relations = famRelationList.appMother;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "grandparents") {
        relations = famRelationList.myGrandparents;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "grandmother") {
        relations = famRelationList.myGrandmother;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }

      relationResult.innerHTML = famRelationList.myGrandmother.join(", ");
    } else if (relativeStatus == "grandfather") {
        relations = famRelationList.myGrandfather;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "aunt") {
        relations = famRelationList.myAunts;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "uncle") {
        relations = famRelationList.myUncles;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "siblings") {
        relations = famRelationList.mySiblings;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "sister") {
        relations = famRelationList.mySister;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "brother") {
        relations = famRelationList.myBrother;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "children") {
        relations = famRelationList.myChildren;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "son") {
        relations = famRelationList.mySon;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "daughter") {
        relations = famRelationList.myDaughter;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "niece") {
        relations = famRelationList.myNieces;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else if (relativeStatus == "nephew") {
        relations = famRelationList.myNephews;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    }
    
    else if (relativeStatus == "cousin") {
        relations = famRelationList.myCousins;
        if (relations == "") {
          relationResult.innerHTML = relationMsg;
        } else {
          relationResult.innerHTML = relations.join(", ");
        }
    } else {
        relationResult.innerHTML = relationMsg;
    }
}

//#endregion


//#region JS PRACTICE

//SWITCH
let colorSelection = document.querySelector("#switchy-select");
let switchyColor = colorSelection.querySelectorAll("option");
let switchySquare = document.querySelector(".switchy-square");

colorSelection.onchange = function() {
switch (colorSelection.value) {
  case "green":
      switchySquare.style.backgroundColor = "green";
      switchySquare.style.color = "white";
    break;

  case "red":
    switchySquare.style.backgroundColor = "red";
    switchySquare.style.color = "yellow";
    break;

  case "yellow":
    switchySquare.style.backgroundColor = "yellow";
    switchySquare.style.color = "red";
    break;

  case "blue":
    switchySquare.style.backgroundColor = "blue";
    switchySquare.style.color = "white";
    break;

  case "orange":
    switchySquare.style.backgroundColor = "orange";
    switchySquare.style.color = "white";
    break;

  case "purple":
      switchySquare.style.backgroundColor = "purple";
      switchySquare.style.color = "white";
    break;


  default:
    switchySquare.style.backgroundColor = "white";
    switchySquare.style.color = "black";
    break;
}
}

let myFamily = ["Anna", "Mildred", "Regina", "Tammy", "Nathaniel", "Natters", "Maurice", "Corrie"];

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr = result.failure;
  let arrIndex;
  
    for (arrIndex in arr) {
       failureItems.push(arr[arrIndex]);
  }
  // Only change code above this line
  return failureItems;
}

const jsTest1 = document.getElementsByClassName("js-test1")[0]
const nextLesson = "02-17 Listening to Events" 
const testComment = "Click me to see the next lesson."

//PAGE FUNCTIONS - DO NOT DELETE
function swapText() {
    if (jsTest1.innerHTML == testComment) {
        jsTest1.innerHTML = nextLesson
    } else {
        jsTest1.innerHTML = testComment
    }
}

//PERFORM EXERCISES BELOW THIS LINE
let test2 = document.getElementsByClassName("js-test2")[0].innerHTML = "Open console. Type directly into console. Call things into the console. Log the console. K?"

//OBJECTS
const myObject = {
    myString: "I'm a string.",
    myNumber: 4,
    myBoolan: true,
    newObject: {
        mommie1: "Regina",
        mommie2: "Ellen",
        mommie3: "Brown"
    },
    myFunction: function () {
        const myMother = this.newObject.mommie1 + " " + this.newObject.mommie2 + " " + this.newObject.mommie3;
        
        return myMother
    },
    myArray: ["Corrie", "Maurice", "Nathaniel"]
}

const myBracket = 'myString'
const myBracket1 = myObject[myBracket]

console.log("Im going to type in the console")

//#endregion

//#region PALINDROME
//Palindrome App
let palappInput = document.querySelector("#pa-word-input");
let palappWord;
let checkWord = [];
let palappBackward;
let word2;
let palappMatch = document.querySelector("#palindrome-result");

function wordChecked() {
  palappWord = palappInput.value.toLowerCase();
  checkWord.push(palappWord);
  palappBackward = checkWord[0].valueOf().split('').reverse().join('');
  word2 = palappBackward;

  if (Boolean(palappWord == palappBackward) == true) {
    palappMatch.innerHTML = palappWord.toUpperCase() + " is a palindrome!";
  } else {
    palappMatch.innerHTML = palappWord.toUpperCase() + " is not a palindrome.";
  }

  checkWord = [];
  
}


//Console Practice
let dromeString = ["Anna", "Otto", "south", "noon", "cat", "Racecar", "game", "eye"];
let reverseString = [];
let wordReversed = "";

function reverseWord(value, index, array) {
    wordReversed = dromeString[index].valueOf().toLowerCase().split('').reverse().join('');
    reverseString.push(wordReversed);
}


//#endregion
