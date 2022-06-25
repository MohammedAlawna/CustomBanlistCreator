let count = 0;
let banlistText;
//BanlistText Parts..
let flagType = "";
let quantity = 0;
let cardLocation = "";
let firstTime = true;
var selectCardLimitation = document.getElementById("limitation");
let textArea = document.getElementById("listArea");

let deckLimitSize = document.getElementById("quantity").value;
let itemQuestions = [];
itemQuestions[0] = document.getElementById("whiteListBox");
itemQuestions[1] = document.getElementById("limitation-selection");
itemQuestions[2] = document.getElementById("ind-selection");
itemQuestions[3] = document.getElementById("location-selection");
itemQuestions[4] = document.getElementById("deckSizeBox");
itemQuestions[5] = document.getElementById("noDeckSize");
itemQuestions[6] = document.getElementById("banlistName");
itemQuestions[7] = document.getElementById("ctype-selection");
itemQuestions[8] = document.getElementById("mArch-selection");
itemQuestions[9] = document.getElementById("mType-selection");
itemQuestions[10] = document.getElementById("attr-selection");
itemQuestions[11] = document.getElementById("cat-selection");
itemQuestions[12] = document.getElementById("noLimitDiv");

var generateTextButton = document.getElementById("GenerateTextBtn");
let whiteListCheck;
const searchInput = document.querySelector("[data-search]");
let searchField = document.getElementById("search-field");
let _cardView = document.getElementById("div-cards");
let wholeCard = document.getElementById("carddiv");
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
//let whiteListCheck = document.querySelector(".form-check-input").checked;
var selectDeckLimit;
var selectLimitation;

var valueLimitation;
var selectCardGroup, valueCardGroup;
var selectCardLocation, valueCardLocation;

//Workflow: Click 'CreateBanlist' You'll get a banlist view.
function CreateNewBanlist() {
  firstTime = true;
  let banListPreview = document.getElementById("banListPreview");
  banListPreview.style.display = "flex";
}

function ImportBanlist() {
  let input = document.createElement("input");
  input.type = "file";

  input.onchange = (_) => {
    // you can use this method to get file and perform respective operations
    let files = input.files;

    if (files.length == 0) return;

    const file = files[0];

    let reader = new FileReader();

    reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      textArea.value = lines.join("\n");
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
  };
  input.click();
  document.getElementById("nameBL").disabled = true;
}

/*let input = document.getElementById("inputBanlist");
input.addEventListener("change", () => {
  let files = input.files;

  if (files.length == 0) return;

  const file = files[0];

  let reader = new FileReader();

  reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    textArea.value = lines.join("\n");
  };
  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(file);
});*/

/*Workflow: Click 'ImportBanlist' You'll import an already list with their data appearing on the banist view.
function ImportBanlist() {
  let input = document.getElementById("inputBanlist");
  let textBanlist = textArea.value;

  let txtFile = input.files;

  if (files.length == 0) {
    return;
  }

  let reader = new FileReader();
  reader.onload = (e) => {
    const file = e.target.result;
    const lines = file.split(/\r\n|\n/);
    textBanlist = lines.join("\n");
  };
  reader.onerror = (e) => alert(e.target.error.name);

  reader.readAsText(file);

  alert("Banlist imported successfully.");
}*/

function ProcessQuestionSystem() {
  let nextBtn = document.getElementById("next");
  let itemaddedBtn = document.getElementById("itemAddedBtn");

  if (count == 0) {
    itemQuestions[0].style.display = "block";
    itemQuestions[6].style.display = "block";

    //You may also show input for the banlist name!
    nextBtn.disabled = false;
    itemaddedBtn.disabled = true;
  }

  if (count == 1) {
    // Process First Question (Whitelist)
    whiteListCheck = document.querySelector(".form-check-input").checked;
    var banlistName = document.getElementById("nameBL").value;
    //console.log("The name is: " + banlistName);
    // whiteListCheck = document.getElementById("whiteListCheckBox");

    if (firstTime) {
      banlistText = "!" + banlistName + "\n";
    }

    if (whiteListCheck && firstTime) {
      banlistText += "$whitelist" + "\n";
      //alert("Its a whitelist!");
    } else if (!whiteListCheck) {
      banlistText;
      //alert("It's not whitelist");
      //@IGNORE don't add whitelist to text blob.
    }
    console.log(firstTime);

    console.log(banlistText);
    itemQuestions[1].style.display = "block"; //limitation
    itemQuestions[4].style.display = "block"; //decksize box..
    // firstTime = false;
  }

  if (count == 2) {
    //Check limitation type.
    whiteListCheck = document.querySelector(
      ".form-check-input"
    ).disabled = true;
    banlistName = document.getElementById("nameBL").disabled = true;

    //whiteListCheck = false;
    selectLimitation = document.getElementById("limitation");
    valueLimitation =
      selectLimitation.options[selectLimitation.selectedIndex].value;

    if (valueLimitation == "+") {
      if (firstTime == true) {
        banlistText += "+";
      }
      if (firstTime == false) {
        banlistText = "+";
      }
    }
    if (valueLimitation == "limitation") {
      if (firstTime == true) {
        banlistText;
      }
      if (firstTime == false) {
        banlistText = "";
      }
    }

    selectDeckLimit = document.getElementById("deckLimitEnabled").checked;
    if (selectDeckLimit) {
      console.log("DeckLimit Checked!");
      itemQuestions[5].style.display = "block";
      itemQuestions[2].style.display = "none";

      /*1.Show Deck Limit Input
                2. Don't show the card group question! (should be done in the else statement)
                */
    } else {
      //IF TeckBox.. then show card group.. etc.. if not show location directly.. (jump to count 4)
      itemQuestions[2].style.display = "block";
    }
    //console.log(banlistText);
    itemQuestions[12].style.display = "block";
  }

  if (count == 3) {
    console.log(valueLimitation);

    selectCardGroup = document.getElementById("card-group");
    valueCardGroup =
      selectCardGroup.options[selectCardGroup.selectedIndex].value;

    if (valueCardGroup == "individ") {
      var cardSearcher = document.getElementById("searchCardView");
      var divCardCount = document.getElementById("noLimitDiv");
      var cardLimit = document.getElementById("noLimit").value.toString();

      divCardCount.style.display = "block";

      const _myRequest = new Request(
        "https://db.ygoprodeck.com/api/v7/cardinfo.php"
      );
      fetch(_myRequest)
        .then((response) => response.json())
        .then(({ data }) => {
          users = data.map((user) => {
            const card = userCardTemplate.content.cloneNode(true).children[0];
            const header = card.querySelector("[data-header]");
            const body = card.querySelector("[data-body]");
            let no = card.querySelector("[data-no]");

            /*CODE For Showing Images Has Been Disabled To Later Polishing~!*/
            /*   let imgUrlTmplt =
                   "https://storage.googleapis.com/ygoprodeck.com/pics_artgame/";*/

            no.textContent = user.id;
            header.textContent = user.name;
            //   let imageElement = document.createElement("img");
            //   imageElement.setAttribute("id", "card-thumb");
            body.textContent = "";
            //var imgSrc = imgUrlTmplt + user.id.toString() + ".jpg";
            // imageElement.src = imgSrc;
            //body.appendChild(imageElement);
            userCardContainer.append(card);
            // console.log(user.id);
            card.addEventListener("click", function (event) {
              event.preventDefault();
              let idConverted = no.textContent.toString();
              let searchField = (document.getElementById("search-field").value =
                idConverted);
              _cardView.style.display = "none";
              flagType = idConverted;
              console.log(flagType);
              // banlistText += valueLimitation + idConverted; //with number of limitation/requirment (1, 2, 3)
              console.log(banlistText);
            });
            return { name: user.name, type: user.type, element: card };
          });
        });
      cardSearcher.style = "block";

      //TODO Add Dropdowns for filters ASAP!
    } else if (valueCardGroup == "ctype") {
      itemQuestions[7].style.display = "block";

      //  banlistText += valueLimitation + "@type " + cTypeSelection;
    } else if (valueCardGroup == "attr") {
      itemQuestions[10].style.display = "block";
    } else if (valueCardGroup == "category") {
      itemQuestions[11].style.display = "block";
    } else if (valueCardGroup == "mArch") {
      itemQuestions[8].style.display = "block";
    }

    itemQuestions[3].style.display = "block"; //it should be the location!
  }

  if (count == 4) {
    console.log(banlistText);
    selectCardGroup = document.getElementById("card-group");
    valueCardGroup =
      selectCardGroup.options[selectCardGroup.selectedIndex].value;

    if (valueCardGroup == "ctype") {
      itemQuestions[7].style.display = "block";
    } else if (valueCardGroup == "attr") {
      itemQuestions[10].style.display = "block";
    } else if (valueCardGroup == "category") {
      itemQuestions[11].style.display = "block";
    } else if (valueCardGroup == "mArch") {
      itemQuestions[8].style.display = "block";
    }

    var cardLimit = document.getElementById("noLimit").value.toString();

    selectCardLocation = document.getElementById("card-location");

    valueCardLocation =
      selectCardLocation.options[selectCardLocation.selectedIndex].value;

    quantity = " " + cardLimit;

    generateTextButton.style.display = "block";
    //banlistText += " " + cardLimit;

    itemaddedBtn.disabled = false;
    nextBtn.disabled = true;

    //console.log(banlistText);
  }
}

function nextQuestion() {
  // console.log("HEy!");
  count++;
  ProcessQuestionSystem();
}

ProcessQuestionSystem();

//checkSearch();
function checkSearch() {
  if (searchField && searchField.value) {
    _cardView.style.display = "block";
    // console.log('It has a value!');
  } else {
    //console.log('no value there!');
    _cardView.style.display = "none";
  }
}

searchInput.addEventListener("input", (e) => {
  checkSearch();
  value = e.target.value.toLowerCase();

  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.type.toLowerCase().includes(value);

    user.element.classList.toggle("hide", !isVisible);
  });
  console.log(users);
});

//AddItemBtn: When you click it a questionaire will appear
function addItem() {
  itemQuestions[0].style.display = "block";
  itemQuestions[6].style.display = "block";

  if (count == 0) {
    let nextBtn = document.getElementById("next");
    let itemaddedBtn = document.getElementById("itemAddedBtn");
    nextBtn.disabled = false;
    itemaddedBtn.disabled = true;
  }
  //count = 0;
  // let nextBtn = document.getElementById("next");
  // let itemaddedBtn = document.getElementById("itemAddedBtn");
  // let firstTime = true;
  // //count = 0;
  // if (count == 0) {
  //   itemQuestions[0].style.display = "block";
  //   itemQuestions[6].style.display = "block";
  //   //You may also show input for the banlist name!
  //   nextBtn.disabled = false;
  //   itemaddedBtn.disabled = true;
  // }
  // // count++;
  // nextBtn.addEventListener("click", () => {
  //   count++;
  //   console.log(count);
  //   if (count == 1) {
  //     // Process First Question (Whitelist)
  //     whiteListCheck = document.querySelector(".form-check-input").checked;
  //     var banlistName = document.getElementById("nameBL").value;
  //     //console.log("The name is: " + banlistName);
  //     // whiteListCheck = document.getElementById("whiteListCheckBox");
  //     if (firstTime) {
  //       banlistText = "!" + banlistName + "\n";
  //     }
  //     if (whiteListCheck && firstTime) {
  //       banlistText += "$whitelist" + "\n";
  //       //alert("Its a whitelist!");
  //     } else if (!whiteListCheck) {
  //       banlistText;
  //       //alert("It's not whitelist");
  //       //@IGNORE don't add whitelist to text blob.
  //     }
  //     console.log(banlistText);
  //     itemQuestions[1].style.display = "block"; //limitation
  //     itemQuestions[4].style.display = "block"; //decksize box..
  //     firstTime = false;
  //   }
  //   if (count == 2) {
  //     //Check limitation type.
  //     whiteListCheck = document.querySelector(
  //       ".form-check-input"
  //     ).disabled = true;
  //     banlistName = document.getElementById("nameBL").disabled = true;
  //     //whiteListCheck = false;
  //     selectLimitation = document.getElementById("limitation");
  //     valueLimitation =
  //       selectLimitation.options[selectLimitation.selectedIndex].value;
  //     if (valueLimitation == "+") {
  //       //banlistText += valueLimitation;
  //       // alert("You choose a requirment.");
  //     } else if (valueLimitation == "limitation") {
  //       banlistText;
  //       //TODO don't add + to the text blob.
  //     }
  //     selectDeckLimit = document.querySelector(".size-check-input").checked;
  //     if (selectDeckLimit) {
  //       console.log("DeckLimit Checked!");
  //       itemQuestions[5].style.display = "block";
  //       /*1.Show Deck Limit Input
  //               2. Don't show the card group question! (should be done in the else statement)
  //               */
  //     } else {
  //       //IF TeckBox.. then show card group.. etc.. if not show location directly.. (jump to count 4)
  //       itemQuestions[2].style.display = "block";
  //     }
  //     //console.log(banlistText);
  //   }
  //   if (count == 3) {
  //     console.log(valueLimitation);
  //     selectCardGroup = document.getElementById("card-group");
  //     valueCardGroup =
  //       selectCardGroup.options[selectCardGroup.selectedIndex].value;
  //     if (valueCardGroup == "individ") {
  //       var cardSearcher = document.getElementById("searchCardView");
  //       var divCardCount = document.getElementById("noLimitDiv");
  //       var cardLimit = document.getElementById("noLimit").value.toString();
  //       divCardCount.style.display = "block";
  //       const _myRequest = new Request(
  //         "https://db.ygoprodeck.com/api/v7/cardinfo.php"
  //       );
  //       fetch(_myRequest)
  //         .then((response) => response.json())
  //         .then(({ data }) => {
  //           users = data.map((user) => {
  //             const card = userCardTemplate.content.cloneNode(true).children[0];
  //             const header = card.querySelector("[data-header]");
  //             const body = card.querySelector("[data-body]");
  //             let no = card.querySelector("[data-no]");
  //             /*CODE For Showing Images Has Been Disabled To Later Polishing~!*/
  //             /*   let imgUrlTmplt =
  //                  "https://storage.googleapis.com/ygoprodeck.com/pics_artgame/";*/
  //             no.textContent = user.id;
  //             header.textContent = user.name;
  //             //   let imageElement = document.createElement("img");
  //             //   imageElement.setAttribute("id", "card-thumb");
  //             body.textContent = "";
  //             //var imgSrc = imgUrlTmplt + user.id.toString() + ".jpg";
  //             // imageElement.src = imgSrc;
  //             //body.appendChild(imageElement);
  //             userCardContainer.append(card);
  //             // console.log(user.id);
  //             card.addEventListener("click", function (event) {
  //               event.preventDefault();
  //               let idConverted = no.textContent.toString();
  //               let searchField = (document.getElementById(
  //                 "search-field"
  //               ).value = idConverted);
  //               _cardView.style.display = "none";
  //               flagType = idConverted;
  //               console.log(flagType);
  //               // banlistText += valueLimitation + idConverted; //with number of limitation/requirment (1, 2, 3)
  //               console.log(banlistText);
  //             });
  //             return { name: user.name, type: user.type, element: card };
  //           });
  //         });
  //       cardSearcher.style = "block";
  //       //TODO Add Dropdowns for filters ASAP!
  //     } else if (valueCardGroup == "ctype") {
  //       itemQuestions[7].style.display = "block";
  //       //  banlistText += valueLimitation + "@type " + cTypeSelection;
  //     } else if (valueCardGroup == "attr") {
  //       itemQuestions[10].style.display = "block";
  //     } else if (valueCardGroup == "category") {
  //       itemQuestions[11].style.display = "block";
  //     } else if (valueCardGroup == "mArch") {
  //       itemQuestions[8].style.display = "block";
  //     }
  //     itemQuestions[3].style.display = "block"; //it should be the location!
  //   }
  //   if (count == 4) {
  //     console.log(banlistText);
  //     selectCardGroup = document.getElementById("card-group");
  //     valueCardGroup =
  //       selectCardGroup.options[selectCardGroup.selectedIndex].value;
  //     if (valueCardGroup == "ctype") {
  //       itemQuestions[7].style.display = "block";
  //     } else if (valueCardGroup == "attr") {
  //       itemQuestions[10].style.display = "block";
  //     } else if (valueCardGroup == "category") {
  //       itemQuestions[11].style.display = "block";
  //     } else if (valueCardGroup == "mArch") {
  //       itemQuestions[8].style.display = "block";
  //     }
  //     var cardLimit = document.getElementById("noLimit").value.toString();
  //     selectCardLocation = document.getElementById("card-location");
  //     valueCardLocation =
  //       selectCardLocation.options[selectCardLocation.selectedIndex].value;
  //     banlistText += " " + cardLimit;
  //     itemaddedBtn.disabled = false;
  //     nextBtn.disabled = true;
  //     //console.log(banlistText);
  //   }
  // });
}

function applyItem() {
  //Check WhiteList

  count = 0;
  selectCardGroup = document.getElementById("card-group");
  valueCardGroup = selectCardGroup.options[selectCardGroup.selectedIndex].value;
  selectDeckLimit = document.getElementById("deckLimitEnabled").checked;
  deckLimitSize = document.getElementById("quantity").value;

  /*
if(isDeckLimit) {
  banlistText += flagtype(@decklimit) + 0 + location + amountInDeckSize
  +@decklimit 0 main 20
}
*/

  if (selectDeckLimit) {
    flagType = "@decklimit ";
    //selectCardGroup.disabled = true;
  } else if (!selectDeckLimit) {
    deckLimitSize = "";
  }
  if (valueCardGroup == "ctype") {
    var cardType = document.getElementById("card-type");
    var cardTypeSelected = cardType.options[cardType.selectedIndex].value;
    flagType = "@type " + cardTypeSelected;
    console.log(flagType);
  }
  if (valueCardGroup == "mArch") {
    console.log("Hello Nael Arch");
  }
  // if (valueCardGroup == "mType") { POSTPONED
  //   console.log("Monster Type!");
  // }
  // if (valueCardGroup == "mRace") {
  //   console.log("Race Type!");
  // }
  if (valueCardGroup == "attr") {
    console.log("attribute");
  }
  if (valueCardGroup == "category") {
    console.log("category");
  }

  whiteListCheck = document.querySelector(".form-check-input").checked = false;
  let locationR = document.getElementById("card-location");
  var cLoc = locationR.options[locationR.selectedIndex].value;
  console.log(cLoc);
  cardLocation = cLoc;
  //banlistText += " " + cLoc + "\n";

  console.log(deckLimitSize);
  let cardIdR = (document.getElementById("search-field").value = "");
  let quantityR = (document.getElementById("noLimit").value = 0);
  let banByR = (document.getElementById("card-group").value = "nill");
  let numberOfCards = (document.getElementById("noDeckSize").value = 0);

  // let valueLocation =
  //   selectCardLocation.options[selectCardLocation.selectedIndex].value;
  // let valueLimitation =
  //   selectCardLimitation.options[selectCardLimitation.selectedIndex].value;
  // let valueGroup = selectCardGroup.options[selectCardGroup.selectedIndex].value;

  /*if (selectDeckLimit) {
    banlistText +=
      flagType + quantity + " " + cardLocation + " " + deckLimitSize;
  }*/

  banlistText +=
    flagType + quantity + " " + cardLocation + " " + deckLimitSize + "\n";
  console.log(count);
  firstTime = false;
  selectDeckLimit = document.querySelector(".size-check-input").checked = false;
  //let flagType = ""; //This inclused flagttype + flag / id..
  /*You make this value public and as it's in the above code..,and 
  then according to flagtype (card search, spell , trap, etc..) assign
  it to the desired value then here you add it in the en to banlist*/
  //let quantity = 0; //same for quantity.. but you add it after flagType..
  //let location = ""; //this one is already added..
  //TODO make the above vairalbes public scope.
  var cardSearcher = (document.getElementById("searchCardView").style.display =
    "none");
  /*banlistText =
    "name" +
    "\n" +
    +"whitelist if.." +
    "req" +
    flagType +
    " " +
    quantity +
    " " +
    location;*/

  //console.log(banlistText);
  //console.log(valueLocation + "\n" + valueLimitation + "\n" + valueGroup + '\n' + whiteListCheck);
  //console.log(textArea.value);
  // textArea.value = "ItemAdded";

  textArea.value += banlistText;
  banlistText = "";
  //console.log("Hello!");

  for (let i = 0; i < itemQuestions.length; i++) {
    itemQuestions[i].style.display = "none";
  }
  //count = 0;
}

function exportBanlist() {
  var textValue = textArea.value;
  navigator.clipboard.writeText(textValue);
  alert("Banlist copied to clipboard!");
  //navigator.clipboard.writeText("+" + "45820" + " 1" + "\n");
}

function generateBanlist() {
  alert("Banlist Generated Successfully!");

  var textValue = textArea.value;
  var blob = new Blob([textValue], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "banlist.lflist.conf");

  //var blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
  //saveAs(blob, "banlist.lflist.conf");
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

//Banlist Templates Functions
function GetTCG() {
  fetch("TCG.txt")
    .then((response) => response.text())
    .then((data) => {
      // Do something with your data
      console.log(data);
      textArea.value = data;
    });
}

function GetOCG() {
  fetch("OCG.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function GetGOAT() {
  fetch("GOAT.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function GetTraditional() {
  fetch("Traditional.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function GetWorld() {
  fetch("World.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function GetSpeed() {
  fetch("Speed.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function GetTraditional() {
  fetch("Traditional.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function GetRush() {
  fetch("Rush.txt")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      textArea.value = data;
    });
}

function deleteSelected() {
  var startSelected = textArea.selectionStart;
  var endSelected = textArea.selectionEnd;

  var selectedText = textArea.value.substring(startSelected, endSelected);
  console.log(selectedText);
  //var searchedInArea = textArea.value.search(selectedText);
  textArea.value = textArea.value.replace(selectedText, "");
}

/*function Next() {
    count++;
    console.log(count);
}*/
