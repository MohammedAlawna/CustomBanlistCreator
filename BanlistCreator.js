let count;
//let selectCardLocation = document.getElementById("card-location");
//let selectCardGroup = document.getElementById("card-group");
var selectCardLimitation = document.getElementById("limitation");
let textArea = document.getElementById("listArea");
let itemQuestions = [];
let whiteListCheck;
//let whiteListCheck = document.querySelector(".form-check-input").checked;
var selectDeckLimit;
var selectLimitation;
var valueLimitation;
var selectCardGroup, valueCardGroup;
var selectCardLocation, valueCardLocation;

//Workflow: Click 'CreateBanlist' You'll get a banlist view.
function CreateNewBanlist() {
  let banListPreview = document.getElementById("banListPreview");
  banListPreview.style.display = "flex";
}

//ًWorkflow: Click 'ImportBanlist' You'll import an already list with their data appearing on the banist view.
function ImportBanlist() {
  console.log("Success! You imported a banlist.");
}

//AddItemBtn: When you click it a questionaire will appear
function addItem() {
  //boolean variables to create the text file

  let requirment;
  let individual;
  //Other variables should be defined later now we'll try on the small scope to make banlist!

  let nextBtn = document.getElementById("next");
  let itemaddedBtn = document.getElementById("itemAddedBtn");

  //let textArea = document.getElementById('listArea');
  //This should enable the qustions (You may show them as divs aswell)
  //@1 Show first question: Whitelist or not!
  // let itemQuestions = [];

  itemQuestions[0] = document.getElementById("whiteListBox");
  itemQuestions[1] = document.getElementById("limitation-selection");
  itemQuestions[2] = document.getElementById("ind-selection");
  itemQuestions[3] = document.getElementById("location-selection");
  itemQuestions[4] = document.getElementById("deckSizeBox");
  itemQuestions[5] = document.getElementById("noDeckSize");
  itemQuestions[6] = document.getElementById("banlistName");

  //Selection values
  //let whiteListCheck;
  // let selectCardLocation = document.getElementById('card-location');
  // let selectCardGroup = document.getElementById('card-group');
  // var selectCardLimitation = document.getElementById("limitation");

  //var value = select.options[select.selectedIndex].value;

  count = 0;

  if (count == 0) {
    itemQuestions[0].style.display = "block";
    itemQuestions[6].style.display = "block";

    //You may also show input for the banlist name!
    nextBtn.disabled = false;
    itemaddedBtn.disabled = true;
  }

  nextBtn.addEventListener("click", () => {
    count++;
    console.log(count);
    if (count == 1) {
      // Process First Question (Whitelist)
      whiteListCheck = document.querySelector(".form-check-input").checked;
      // whiteListCheck = document.getElementById("whiteListCheckBox");
      if (whiteListCheck) {
        alert("Its a whitelist!");
        //Add Whitelist to text blob.
      } else if (!whiteListCheck) {
        alert("It's not whitelist");
        //@IGNORE don't add whitelist to text blob.
      }

      itemQuestions[1].style.display = "block"; //limitation
      itemQuestions[4].style.display = "block"; //decksize box..
    }

    if (count == 2) {
      //Check limitation type.

      //whiteListCheck = false;
      selectLimitation = document.getElementById("limitation");
      valueLimitation =
        selectLimitation.options[selectLimitation.selectedIndex].value;

      if (valueLimitation == "requirement") {
        alert("You choose a requirment.");
        //TODO Add + to the textblob.
      } else if (valueLimitation == "limitation") {
        alert("You choose limitation.");
        //TODO don't add + to the text blob.
      }
      selectDeckLimit = document.querySelector(".size-check-input").checked;
      if (selectDeckLimit) {
        console.log("DeckLimit Checked!");
        itemQuestions[5].style.display = "block";
        /*1.Show Deck Limit Input
                2. Don't show the card group question! (should be done in the else statement)
                */
      } else {
        //IF TeckBox.. then show card group.. etc.. if not show location directly.. (jump to count 4)
        itemQuestions[2].style.display = "block";
      }
    }

    if (count == 3) {
      console.log(valueLimitation);

      selectCardGroup = document.getElementById("card-group");
      valueCardGroup =
        selectCardGroup.options[selectCardGroup.selectedIndex].value;

      if (valueCardGroup == "individ") {
        alert("You choose Individual!");
        //TODO Show card Search! (Dropdown search IMP)
      } else if (valueCardGroup == "group") {
        alert("You choose group!");
        //TODO Show ban grouping categories.
      }

      itemQuestions[3].style.display = "block"; //it should be the location!
    }

    if (count == 4) {
      //Show location question.
      selectCardLocation = document.getElementById("card-location");

      valueCardLocation =
        selectCardLocation.options[selectCardLocation.selectedIndex].value;
      if (valueCardLocation == "main") {
        alert("main");
      } else if (valueCardLocation == "extra") {
        alert("Extra");
      } else if (valueCardLocation == "me") {
        alert("main or extra");
      } else if (valueCardLocation == "ms") {
        alert("main or side");
      } else if (valueCardLocation == "es") {
        alert("extra or side");
      } else if (valueCardLocation == "mes") {
        alert("main or extra or side");
      } else if (valueCardLocation == "nill") {
        alert("this field is optional!"); //Do not add anything as it's optional~!
      }

      itemaddedBtn.disabled = false;
      nextBtn.disabled = true;
    }

    if (count == 5) {
      valueCardLocation = "";
      valueCardGroup = "";
      selectDeckLimit = false;
      valueLimitation = "";
      whiteListCheck = false;
      count = 0;
    }
  });

  // itemaddedBtn.addEventListener("click", () => {

  //     //Check WhiteList
  //     whiteListCheck = document.querySelector('.form-check-input').checked;
  //     let valueLocation = selectCardLocation.options[selectCardLocation.selectedIndex].value;
  //     let valueLimitation = selectCardLimitation.options[selectCardLimitation.selectedIndex].value;
  //     let valueGroup = selectCardGroup.options[selectCardGroup.selectedIndex].value;
  //     //console.log(valueLocation + "\n" + valueLimitation + "\n" + valueGroup + '\n' + whiteListCheck);
  //     //console.log(textArea.value);
  //     // textArea.value = "ItemAdded";

  //     textArea.value += "+@attribute 0x1 1 main" + "\n";
  //     //console.log("Hello!");

  //     for (let i = 0; i < itemQuestions.length; i++) {
  //         itemQuestions[i].style.display = "none";

  //     }
  //     //count = 0;

  // });

  /*  nextBtn.addEventListener("click", () => {
          let whiteListCheck = document.querySelector('.form-check-input').checked;
          if (whiteListCheck) {
              alert("Whitelist Checked!");
              //If it's true then add whitelist to the text array (for the final blob)
          }
          itemQuestions[1].style.display = "block";
  
      });
  
      nextBtn.addEventListener("click", () => {
  
          alert("Question 2 started!1!");
  
  
      });
  
      //itemQuestions[1] = "2";
      console.log(itemQuestions[0] + '\n' + itemQuestions[1]);*/
}

function applyItem() {
  //Check WhiteList
  whiteListCheck = document.querySelector(".form-check-input").checked = false;
  let numberOfCards = (document.getElementById("noDeckSize").value = 0);
  let valueLocation =
    selectCardLocation.options[selectCardLocation.selectedIndex].value;
  let valueLimitation =
    selectCardLimitation.options[selectCardLimitation.selectedIndex].value;
  let valueGroup = selectCardGroup.options[selectCardGroup.selectedIndex].value;
  selectDeckLimit = document.querySelector(".size-check-input").checked = false;

  //console.log(valueLocation + "\n" + valueLimitation + "\n" + valueGroup + '\n' + whiteListCheck);
  //console.log(textArea.value);
  // textArea.value = "ItemAdded";

  textArea.value += "+@attribute 0x1 1 main" + "\n";
  //console.log("Hello!");

  for (let i = 0; i < itemQuestions.length; i++) {
    itemQuestions[i].style.display = "none";
  }
  //count = 0;
}

function removeItem() {
  console.log("Item Removed!");
}

function randomizeItems() {
  console.log("Items were randomized!");
}

function clearItems() {
  let textArea = document.getElementById("listArea");
  textArea.value = "";
}

/*function Next() {
    count++;
    console.log(count);
}*/
