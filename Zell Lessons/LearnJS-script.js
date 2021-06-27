
/* React start script - 
"scripts": {
    "start": "react-scripts start"
  }
  */

//#region FAMILY APP
let famMember = document.querySelector("#family-member");
let famRelation = document.querySelector("#family-relation");
let addFamBtn = document.querySelector("#add-member");
let addCategoryBtn = document.querySelector("#add-categories");
let famMemberList = document.querySelector("#family-members");
let relationSelect = document.querySelector("#fam-relative-btn");
let rlistSelect = document.querySelector("#relation-select"); 
let relationParagraph = document.querySelector("#fam-category-list");
  

//Family Members
let members = {
  name: [],
  relationship: []
}

addFamBtn.onclick = function() {
  if (famMember.value == "") {
    alert("You have to enter a name to submit.");
    return false;
  } else {
  members.name.push(famMember.value);
  members.relationship.push(famRelation.value);
  let memberListItem = document.createElement("p");
  let memberClass = document.createAttribute("class");
    memberClass.value = "member-name";
    memberListItem.setAttributeNode(memberClass);
    memberListItem.innerHTML = famMember.value;
    famMemberList.appendChild(memberListItem);

  famMember.value = "";
  }

}

addCategoryBtn.onclick = function() {
  addFamBtn.disabled = true;
  members.relationship.forEach(parents);
  members.relationship.forEach(mothers);
  members.relationship.forEach(fathers);
  members.relationship.forEach(grands);
  members.relationship.forEach(grandfathers);
  members.relationship.forEach(grandmothers);
  members.relationship.forEach(aunts);
  members.relationship.forEach(uncles);
  members.relationship.forEach(siblings);
  members.relationship.forEach(sisters);
  members.relationship.forEach(sisters);
  members.relationship.forEach(brothers);
  members.relationship.forEach(children);
  members.relationship.forEach(sons);
  members.relationship.forEach(daughters);
  members.relationship.forEach(counsins);

  if (famRelationList.myGrandmother == "") {
    famRelationList.myGrandmother.push("There are no grandmother entries.");
  }

  if (famRelationList.myGrandfather == "") {
    famRelationList.myGrandfather.push("There are no grandfather entries.");
  }

  if (famRelationList.myGrandparents == "") {
    famRelationList.myGrandparents.push("There are no grandparent entries.");
  }

  if (famRelationList.appMother == "") {
    famRelationList.appMother.push("There are no mother entries.");
  }

  if (famRelationList.appFather == "") {
    famRelationList.appFather.push("There are no father entries.");
  }

  if (famRelationList.myParents == "") {
    famRelationList.myParents.push("There are no parent entries.");
  }

  if (famRelationList.myAunts == "") {
    famRelationList.myAunts.push("There are no aunt entries.");
  }

  if (famRelationList.myUncles == "") {
    famRelationList.myUncles.push("There are no uncle entries.");
  }

  if (famRelationList.myBrother == "") {
    famRelationList.myBrother.push("There are no brother entries.");
  }

  if (famRelationList.mySister == "") {
    famRelationList.mySister.push("There are no sister entries.");
  }

  if (famRelationList.mySiblings == "") {
    famRelationList.mySiblings.push("There are no sibling entries.");
  }

  if (famRelationList.myCousins == "") {
    famRelationList.myCousins.push("There are no counsin entries.");
  }

  if (famRelationList.mySon == "") {
    famRelationList.mySon.push("There are no son entries.");
  }

  if (famRelationList.myDaughter == "") {
    famRelationList.myDaughter.push("There are no daughter entries.");
  }

  if (famRelationList.myChildren == "") {
    famRelationList.myChildren.push("There are no children entries.");
  }

  addCategoryBtn.disabled = true;
}

//Family Relationships
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
  myChildren: []
};


relationSelect.onclick = function() {

  let famCategory = rlistSelect.selectedIndex;
  let categoryChoice = rlistSelect.item(famCategory).value
  
    if (categoryChoice == "grandparents") {
      relationParagraph.innerHTML = famRelationList.myGrandparents.join(", ");
    } else if (categoryChoice == "grandmother") {
      relationParagraph.innerHTML = famRelationList.myGrandmother.join(", ");
    } else if (categoryChoice == "grandfather") {
      relationParagraph.innerHTML = famRelationList.myGrandfather.join(", ");
    } else if (categoryChoice == "parents") {
      relationParagraph.innerHTML = famRelationList.myParents.join(", ");
    } else if (categoryChoice == "mother") {
      relationParagraph.innerHTML = famRelationList.appMother.join(", ");
    } else if (categoryChoice == "father") {
      relationParagraph.innerHTML = famRelationList.appFather.join(", ");
    } else if (categoryChoice == "aunt") {
      relationParagraph.innerHTML = famRelationList.myAunts.join(", ");
    } else if (categoryChoice == "uncle") {
      relationParagraph.innerHTML = famRelationList.myUncles.join(", ");
    } else if (categoryChoice == "siblings") {
      relationParagraph.innerHTML = famRelationList.mySiblings.join(", ");
    } else if (categoryChoice == "sister") {
      relationParagraph.innerHTML = famRelationList.mySister.join(", ");
    } else if (categoryChoice == "brother") {
      relationParagraph.innerHTML = famRelationList.myBrother.join(", ");
    } else if (categoryChoice == "cousin") {
      relationParagraph.innerHTML = famRelationList.myCousins.join(", ");
    } else if (categoryChoice == "children") {
      relationParagraph.innerHTML = famRelationList.myChildren.join(", ");
    } else if (categoryChoice == "son") {
      relationParagraph.innerHTML = famRelationList.mySon.join(", ");
    } else if (categoryChoice == "daughter") {
      relationParagraph.innerHTML = famRelationList.myDaughter.join(", ");
    } else {
      relationParagraph.innerHTML = "There is no " + rlistSelect.item(famCategory).text + "."
    }
}

function parents(value, index, array) {
    if (value == "mother" || value == "father") {
        famRelationList.myParents.push(members.name[index]);
    }
}

function mothers(value, index, array) {
    if (value == "mother") {
        famRelationList.appMother.push(members.name[index]);
    }
}

function fathers(value, index, array) {
    if (value == "father") {
        famRelationList.appFather.push(members.name[index]);
    }
}

function grands(value, index, array) {
    if (value == "grandmother" || value == "grandfather") {
      famRelationList.myGrandparents.push(members.name[index]);
    }
}

function grandfathers(value, index, array) {
    if (value == "grandfather") {
        famRelationList.myGrandfather.push(members.name[index]);
    }
}

function grandmothers(value, index, array) {
    if (value == "grandmother") {
        famRelationList.myGrandmother.push(members.name[index]);
    }
}

function aunts(value, index, array) {
    if (value == "aunt") {
        famRelationList.myAunts.push(members.name[index]);
    }
}

function uncles(value, index, array) {
    if (value == "uncle") {
        famRelationList.myUncles.push(members.name[index]);
    }
}

function siblings(value, index, array) {
    if (value == "brother" || value == "sister") {
        famRelationList.mySiblings.push(members.name[index]);
    }
}

function sisters(value, index, array) {
    if (value == "sister") {
        famRelationList.mySister.push(members.name[index]);
    }
}

function brothers(value, index, array) {
    if (value == "brother") {
        famRelationList.myBrother.push(members.name[index]);
    }
}

function children(value, index, array) {
    if (value == "son" || value == "daughter") {
        famRelationList.myChildren.push(members.name[index]);
    }
}

function sons(value, index, array) {
  if (value == "son") {
    famRelationList.mySon.push(members.name[index]);
  }
}

function daughters(value, index, array) {
if (value == "daughter") {
    famRelationList.myDaughter.push(members.name[index]);
  }
}

function counsins(value, index, array) {
    if (value == "cousin") {
        famRelationList.myCousins.push(members.name[index]);
    }
}

//#endregion


//#region JS PRACTICE

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
const nextLesson = "02-15 Selecting An Element" 
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

//THE BOM AND THE DOM


