//Public variables
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let users = [];
let value = "";
let textContent;



//sconst _searchField = document.getElementById('search-field');
let _cardView = document.getElementById('div-cards');
let searchField = document.getElementById('search-field');

checkSearch();
function checkSearch() {
    if (searchField && searchField.value) {
        _cardView.style.display = 'block';
        // console.log('It has a value!');
    }
    else {
        //console.log('no value there!');
        _cardView.style.display = 'none';
    }
}

//Event Listener for searching (onTyping)
searchInput.addEventListener("input", (e) => {

    checkSearch();
    value = e.target.value.toLowerCase();



    users.forEach(user => {


        const isVisible = user.name.toLowerCase().includes(value) || user.type.toLowerCase().includes(value);


        user.element.classList.toggle("hide", !isVisible);


    })
    console.log(users);
})

const _myRequest = new Request('https://db.ygoprodeck.com/api/v7/cardinfo.php');
fetch(_myRequest).then(response => response.json()).then(({ data }) => {

    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")
        let no = card.querySelector("[data-no]");






        no.textContent = user.id;
        header.textContent = user.name;
        body.textContent = user.type;
        userCardContainer.append(card)
        // console.log(user.id);
        no.addEventListener('click', function (event) {
            event.preventDefault();
            let idConverted = no.textContent.toString();
            let searchField = document.getElementById('search-field').value = idConverted;
        });
        return { name: user.name, type: user.type, element: card }
    })
})



function nestedBlobTrial() {
    let noOfCardsArray = [];
    let count = 1;

    for (let i = 0; i < noOfCardsArray.length; i++) {

    }


}

//This function will create a text file that contains the custom banlist the user generated!
function generateBanlist() {
    var whilteListCheckBox = document.querySelector('.form-check-input').checked;
    var select = document.getElementById("limitation");
    var cardType = document.getElementById("typeFilters").value;
    var value = select.options[select.selectedIndex].value;
    let searchValue = document.getElementById('search-field').value.toString();


    var textBanlist = String(value);
    //console.log(textBanlist);



    //1.0 Check Input Card & Whitelist boolean
    //1.1 Check Whitelist.
    if (whilteListCheckBox) {

        //1.2 Check limitation & Add Selected Card (?Whitelist: True?)
        if (value == 4) {
            textContent = "$whitelist" + "\n" + "+" + searchValue + " 1" + "\n";

        }
        else if (value == 5) {
            textContent = "$whitelist" + "\n" + "+" + searchValue + " 2" + "\n";
        }
        else if (value == 6) {
            textContent = "$whitelist" + "\n" + "+" + searchValue + " 3" + "\n";
        }
        else {
            textContent = "$whitelist" + "\n" + searchValue + " " + textBanlist + "\n";
        }



    }

    if (!whilteListCheckBox) {
        //1.3 Check limitation & Add Selected Card (?Whitelist: False?)
        if (value == 4) {
            textContent = "+" + searchValue + " 1" + "\n";
        }
        else if (value == 5) {
            textContent = "+" + searchValue + " 2" + "\n";
        }
        else if (value == 6) {
            textContent = "+" + searchValue + " 3" + "\n";
        }
        else {
            textContent = searchValue + " " + textBanlist + "\n";
        }


    }


    //1.4 Check Filters & Add them to banlist file.
    if (cardType == "Monster") {
        textContent += "0x1" + "\n";
    }
    else if (cardType == "Spell") {
        textContent += "0x2" + "\n";
    }
    else if (cardType == "Trap") {
        textContent += "0x4" + "\n";
    }


    //1.5 When finish checking filters
    var blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "banlist.lflist.conf");

    //

    //Check whiltelist
    // if (whilteListCheckBox) {
    //     //Do whitelist text file!
    //     console.log("Marked as whiltelist!");
    //     if (value == 4) {
    //         var blob = new Blob(["$whitelist" + "\n" + "+" + searchValue + " 1" + "\n"], { type: "text/plain;charset=utf-8" })
    //         saveAs(blob, "banlist.lflist.conf")
    //     }
    //     else if (value == 5) {
    //         var blob = new Blob(["$whitelist" + "\n" + "+" + searchValue + " 2" + "\n"], { type: "text/plain;charset=utf-8" })
    //         saveAs(blob, "banlist.lflist.conf");
    //     }
    //     else if (value == 6) {
    //         var blob = new Blob(["$whitelist" + "\n" + "+" + searchValue + " 3" + "\n"], { type: "text/plain;charset=utf-8" });
    //         saveAs(blob, "banlist.lflist.conf");
    //     }
    //     else {
    //         var blob = new Blob(["$whitelist" + "\n" + searchValue + " " + textBanlist + "\n"],
    //             { type: "text/plain;charset=utf-8" }
    //         );
    //         saveAs(blob, "banlist.lflist.conf");
    //     }
    //     return 0;

    // }


    // if (value == "nill") {
    //     alert("Please select your card name & limitation!");
    // }
    // else if (value == 4) { //CONDS location == "side..", attribute= "", lvl/rank ="" , mons type , subtype=""

    //     var blob = new Blob(["+" + searchValue + " 1" + "\n" + "@023" + "\n"],
    //         { type: "text/plain;charset=utf-8" }
    //     );

    //     saveAs(blob, "banlist.lflist.conf");
    // }
    // else if (value == 5) {
    //     var blob = new Blob(["+" + searchValue + " 2" + "\n"],
    //         { type: "text/plain;charset=utf-8" }
    //     );
    //     saveAs(blob, "banlist.lflist.conf");
    // }
    // else if (value == 6) {
    //     var blob = new Blob(["+" + searchValue + " 3" + "\n"],
    //         { type: "text/plain;charset=utf-8" }
    //     );
    //     saveAs(blob, "banlist.lflist.conf");
    // }
    // else {
    //     var blob = new Blob([searchValue + " " + textBanlist + "\n" + searchValue + " " + textBanlist],
    //         { type: "text/plain;charset=utf-8" }
    //     );
    //     saveAs(blob, "banlist.lflist.conf");
    // }



}

function exportBanlist(textBanlist) {
    var select = document.getElementById("limitation");
    var value = select.options[select.selectedIndex].value;

    var textBanlist = String(value);
    console.log(textBanlist);

    if (value == "nill") {
        alert("Please select your card name & limitation!");
    }
    else if (value == 4) {
        navigator.clipboard.writeText("+" + "45820" + " 1" + "\n");
    }
    else if (value == 5) {
        navigator.clipboard.writeText("+" + "45820" + " 2" + "\n");
    }
    else if (value == 6) {
        navigator.clipboard.write("+" + "8549823" + " 3" + "\n");
    }
    else {
        navigator.clipboard.writeText("045870 " + textBanlist + "\n");
        alert("Banlist copied to clipboard!");
    }
}

// function getBanlistData(textBanlist) {
//     var select = document.getElementById("limitation");
//     var value = select.options[select.selectedIndex].value;


//     //value.toString();

//     var textBanlist = String(value);
//     console.log(textBanlist);

//     if (value == "nill") {
//         alert("Please select your card name & limitation!");
//     }
//     else if (value == 4) {

//         var blob = new Blob(["+" + "45820" + " 1" + "\n"],
//             { type: "text/plain;charset=utf-8" }
//         );
//         saveAs(blob, "banlist.txt");
//     }
//     else if (value == 5) {
//         var blob = new Blob(["+" + "45820" + " 2" + "\n"],
//             { type: "text/plain;charset=utf-8" }
//         );
//         saveAs(blob, "banlist.txt");
//     }
//     else if (value == 6) {
//         var blob = new Blob(["+" + "45820" + " 3" + "\n"],
//             { type: "text/plain;charset=utf-8" }
//         );
//         saveAs(blob, "banlist.txt");
//     }
//     else {
//         var blob = new Blob(["0000" + " " + textBanlist + "\n" + "0000" + " " + textBanlist],
//             { type: "text/plain;charset=utf-8" }
//         );
//         saveAs(blob, "banlist.txt");
//     }

// }

