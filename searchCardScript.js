//Public variables



//Functon for search (will be replaced then)
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let users = [];

//Event Listener for searching (onTyping)

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    users.forEach(user => {
        const isVisible = user.name.toLowerCase().includes(value) || user.type.toLowerCase().includes(value);

        user.element.classList.toggle("hide", !isVisible);
    })
    console.log(users);
})



//Re-Write the code!
//const myCards = document.querySelector();

//const myCards = document.querySelector("#main");
const _myRequest = new Request('https://db.ygoprodeck.com/api/v7/cardinfo.php');
// let _cards = [];

fetch(_myRequest).then(response => response.json()).then(({ data }) => {


    // for (const _card of data) {
    //     //console.log(_card.name);
    //     const card = userCardTemplate.content.cloneNode(true).children[0]
    //     const header = card.querySelector("[data-header]")
    //     const body = card.querySelector("[data-body]")

    //     header.textContent = _card.name;
    //     body.textContent = _card.type;
    //     userCardContainer.append(card)

    // return { name: _card.name, type: user.type, element: card }
    //}

    users = data.map(user => {
        const card = userCardTemplate.content.cloneNode(true).children[0]
        const header = card.querySelector("[data-header]")
        const body = card.querySelector("[data-body]")

        header.textContent = user.name;
        body.textContent = user.type;
        userCardContainer.append(card)

        return { name: user.name, type: user.type, element: card }
    })
})




// const _myRequest = new Request('https://jsonplaceholder.typicode.com/users');
// //           https://jsonplaceholder.typicode.com/users    https://db.ygoprodeck.com/api/v7/cardinfo.php
// fetch(_myRequest).then(response => response.json()).then(({ data }) => {


//     console.log(data);
//     for (const _card in data) {
//         const card = userCardTemplate.content.cloneNode(true).children[0]
//         const header = card.querySelector("[data-header]")
//         const body = card.querySelector("[data-body]")
//         header.textContent = _card.name
//         body.textContent = _card.type
//         userCardContainer.append(card)
//         return { name: _card.name, type: _card.type, element: card }
//         //console.log(data);
//     }


// })


//This function will create a text file that contains the custom banlist the user generated!
function generateBanlist() {
    var select = document.getElementById("limitation");
    var value = select.options[select.selectedIndex].value;


    //value.toString();

    var textBanlist = String(value);
    console.log(textBanlist);

    if (value == "nill") {
        alert("Please select your card name & limitation!");
    }
    else if (value == 4) {

        var blob = new Blob(["+" + "45820" + " 1" + "\n"],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }
    else if (value == 5) {
        var blob = new Blob(["+" + "45820" + " 2" + "\n"],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }
    else if (value == 6) {
        var blob = new Blob(["+" + "45820" + " 3" + "\n"],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }
    else {
        var blob = new Blob(["0000" + " " + textBanlist + "\n" + "0000" + " " + textBanlist],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }

}





function exportBanlist(textBanlist) {
    var select = document.getElementById("limitation");
    var value = select.options[select.selectedIndex].value;


    //value.toString();

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

function getBanlistData(textBanlist) {
    var select = document.getElementById("limitation");
    var value = select.options[select.selectedIndex].value;


    //value.toString();

    var textBanlist = String(value);
    console.log(textBanlist);

    if (value == "nill") {
        alert("Please select your card name & limitation!");
    }
    else if (value == 4) {

        var blob = new Blob(["+" + "45820" + " 1" + "\n"],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }
    else if (value == 5) {
        var blob = new Blob(["+" + "45820" + " 2" + "\n"],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }
    else if (value == 6) {
        var blob = new Blob(["+" + "45820" + " 3" + "\n"],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }
    else {
        var blob = new Blob(["0000" + " " + textBanlist + "\n" + "0000" + " " + textBanlist],
            { type: "text/plain;charset=utf-8" }
        );
        saveAs(blob, "banlist.txt");
    }

}

