


//This function will create a text file that contains the custom banlist the user generated!
function generateBanlist() {
    var select = document.getElementById("limitation");
    var value = select.options[select.selectedIndex].value;


    //value.toString();

    var textBanlist = String(value);
    console.log(textBanlist);
    var blob = new Blob(["0000" + " " + textBanlist + "\n" + "0000" + " " + textBanlist],
        { type: "text/plain;charset=utf-8" }
    );
    saveAs(blob, "banlist.txt");
}


/*This is a jQuery Trial function!
$("limitation").click(function () {
    console.log("jQuery Clicked!!");
});*/