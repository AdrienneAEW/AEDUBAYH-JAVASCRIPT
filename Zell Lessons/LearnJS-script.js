//INPUT VALUES
let userDevice = document.getElementById("device-input")
let userBrowser = document.getElementById("browser-input")
let userURL = document.getElementById("url-input")
let userName = document.getElementById("tu-input")
let submitCount = document.getElementById("count-btn")
let timesClicked = 0

submitCount.onclick = function () {
    timesClicked += 1
    console.log(timesClicked)
}

  //user device
  if (window.innerWidth < 414) {
    userDevice.value = "Mobile"
  } else if (window.innerWidth < 1280) {
    userDevice.value = "Tablet"
  } else if (window.innerWidth < 1500) {
    userDevice.value = "Desktop"
  } else if (window.innerWidth < 1920) {
    userDevice.value = "Large"
  }

var browserName = (function (agent) {
  switch (true) {
      case agent.indexOf("edge") > -1: return "MS Edge";
      case agent.indexOf("edg/") > -1: return "Edge ( chromium based)";
      case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
      case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
      case agent.indexOf("trident") > -1: return "MS IE";
      case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
      case agent.indexOf("safari") > -1: return "Safari";
      default: return "other";
    }
  })(window.navigator.userAgent.toLowerCase());

let agentData = window.navigator.userAgentData
/* userAgentData version for migration
  userBrowser.value = agentData.brands[2].brand
*/
  userBrowser.value = browserName
  userURL.value = location.protocol + "//" + location.hostname



//#region MED-TRACKER
let medTable = document.getElementById("med-tracker-table")
let medData = document.getElementById("med-taken-container")

//#endregion

//Animation Stuff

//#region Filtering
let productsContainer = document.getElementById("test-filter");
let products = [
  {
    product: "Wooden Coffee Table",
    prdcategory: "Furniture",
    prdsubcategory: "Tables",
    prdprice: 59.69,  
  },
  {
    product: "Love Seat",
    prdcategory: "Furniture",
    prdsubcategory: "Seating",
    prdprice: 179.00,  
  },
  {
    product: "Dogbone Portrait",
    prdcategory: "Wall Decor",
    prdsubcategory: "Photographs",
    prdprice: 39.99,  
  },
  {
    product: "Skylark",
    prdcategory: "Wall Decor",
    prdsubcategory: "Paintings",
    prdprice: 55.00,  
  },
  {
    product: "Misty Mountains",
    prdcategory: "Wall Decor",
    prdsubcategory: "Paintings",
    prdprice: 29.99,  
  },
  {
    product: "Hi-Wingback Chair",
    prdcategory: "Furniture",
    prdsubcategory: "Seating",
    prdprice: 225.00,  
  },
  {
    product: "Whicker Dinning Table",
    prdcategory: "Furniture",
    prdsubcategory: "Tables",
    prdprice: 139.59,  
  }

]

let productCategory = document.getElementById("test-filter-category")
let productSubcategory = document.getElementById("test-filter-subcategory")

let cardContainer, productName, productPrice, findProduct

productSubcategory.onchange = () => {
  findProduct = productSubcategory.options[productSubcategory.selectedIndex].innerText

  products.forEach((_item, index) => {
    if (products[index].prdsubcategory == findProduct) {
        cardContainer = document.createElement("div")
        productName = document.createElement("h3")
        productPrice = document.createElement("p")
        productPrice.setAttribute('class', 'paragraph-h3')

        productName.innerText = products[index].product
        productPrice.innerText = "$" + products[index].prdprice

        cardContainer.appendChild(productName)
        cardContainer.appendChild(productPrice)
        productsContainer.appendChild(cardContainer)
    }
  })
}

//#endregion

//#region CALCULATOR APP

let calculator = document.querySelector("#calculator");
let calculatorNumber = calculator.querySelector(".numbers-container");
let calcKeys = calculatorNumber.dataset.action;

let calcDisplay = document.querySelector("#display");
let calcTotal = document.querySelector("#total");
let calcNums = document.querySelectorAll(".calc-number");
let calcMath = document.querySelectorAll(".calc-indicator");
let calcEqual = document.querySelector(".calc-equal");
let calcClear = document.querySelectorAll(".calc-clear");

calculator.addEventListener('click', (event) => {
    let target = event.target;
    if (target.id == "add" || 
      target.id == "subtract" ||
      target.id == "divide" ||
      target.id == "multiply" ||
      target.id == "equal" ||
      target.id == "decimal" ||
      target.id == "clear") {
        console.log("I'm an operator key.")
    } else if (event.target.id == "1" ||
      target.id == "2" ||
      target.id == "3" ||
      target.id == "4" ||
      target.id == "5" ||
      target.id == "6" ||
      target.id == "7" ||
      target.id == "8" ||
      target.id == "9" ||
      target.id == "0") {
        console.log("I'm a number key.")
      }

      calcMath.forEach((item, index) => {
        if (target == calcMath[index]) {
          console.log("I operate as a " + calcMath[index].innerText + ".")
        }
      })

      calcNums.forEach((item, index) => {
        if (target == calcNums[index]) {
          console.log("I'm a " + calcNums[index].innerText + ".")
        }
      })
      
})

//#endregion


//#region QUOTES
const quoteMachine = document.querySelector("#quote-machine");
const quotes = [
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchil",
        link: "https://www.brainyquote.com/quotes/winston_churchill_124653"
    },

    {
        quote: "Art consists of limitation. The most beautiful part of every picture is the frame.",
        author: "G. K. Chesteron",
        link: "https://www.brainyquote.com/quotes/gilbert_k_chesterton_104127"
    },

    {
        quote: "We must, indeed, all hang together or, most assuredly, we shall all hang separately.",
        author: "Benjamin Franklin",
        link: "https://www.brainyquote.com/quotes/benjamin_franklin_151597"
    }
];
//#endregion

//#region SCRIPTION APP
// Form
const subscriptionForm = document.forms["subscription-app-form"];
const subscriptionName = subscriptionForm["subscription-name"];
const subscriptionWebsite = subscriptionForm["subscription-site"];
const subscriptionDescription = subscriptionForm["subscription-description"];
const subscriptionCategory = subscriptionForm["subscription-category"];
const subscriptionCycle = subscriptionForm["subscription-cycle"];
const subscriptionReminder = subscriptionForm["subscription-reminder"];

// Table
const listTable = document.querySelector("#subscription-list");
const subListContainer = listTable.querySelector("#list-container");
const subscriptionHeadings = document.querySelector("#subscription-headings")
const subListRow = subListContainer.insertRow();
const subscriptionLabels = subscriptionForm.querySelectorAll("label");
let subListHeadings;

  subscriptionLabels.forEach((item) => {
      subListHeadings = document.createElement("th");
      subListHeadings.innerText = item.innerText;
      subscriptionHeadings.appendChild(subListHeadings)
  })


// Subscription Arrays
let subNames = [];
let subDescription = [];
let subCategories = ["Coupons", "Updates", "Membership", "Cable", "Account", "Newsletter", "Entertainment", "Trade Publication", "WiFi"];
let subCategoryOption;
  subCategories.sort().forEach((item) => {
    subCategoryOption = document.createElement("option");
        subCategoryOption.setAttribute("value", item);
        subCategoryOption.innerText = item;
        subscriptionCategory.append(subCategoryOption);
});

let subCycle = ["Yearly", "Endless", "Monthly", "Weekly", "Daily"];
let subCycleOption;
  subCycle.sort().forEach((item) => {
    subCycleOption = document.createElement("option");
      subCycleOption.setAttribute("value", item);
      subCycleOption.innerText = item;
      subscriptionCycle.append(subCycleOption);
  })

let subReminder = [];


// Subscription Cards


//#endregion

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
