let count;
//Workflow: Click 'CreateBanlist' You'll get a banlist view.
function CreateNewBanlist() {
    let banListPreview = document.getElementById('banListPreview');
    banListPreview.style.display = 'flex';

}

//ًWorkflow: Click 'ImportBanlist' You'll import an already list with their data appearing on the banist view.
function ImportBanlist() {
    console.log('Success! You imported a banlist.');
}

//AddItemBtn: When you click it a questionaire will appear 
function addItem() {

    //boolean variables to create the text file
    let whiteListCheck;
    let requirment;
    let individual;
    //Other variables should be defined later now we'll try on the small scope to make banlist!

    let nextBtn = document.getElementById('next');
    //This should enable the qustions (You may show them as divs aswell)
    //@1 Show first question: Whitelist or not!
    let itemQuestions = [];
    itemQuestions[0] = document.getElementById('whiteListBox');
    itemQuestions[1] = document.getElementById('limitation-selection');
    //itemQuestions[2] = document.getElementById();

    count = 0;

    if (count == 0) {

        itemQuestions[0].style.display = "block";

    }

    nextBtn.addEventListener("click", () => {
        count++;
        console.log(count);
        if (count == 1) {
            // Process First Question (Whitelist)
            whiteListCheck = document.querySelector('.form-check-input').checked;
            if (whiteListCheck) {
                alert("Its a whitelist!");
                //Add Whitelist to text blob.
            }
            else if (!whiteListCheck) {
                alert("It's not whitelist");
                //@IGNORE don't add whitelist to text blob.
            }

            itemQuestions[1].style.display = "block";



        }

        if (count == 2) {
            //Check limitation type.
            var select = document.getElementById("limitation");
            var value = select.options[select.selectedIndex].value;


            if (value == "requirement") {
                alert("You choose a requirment.");
            }
            else if (value == "limitation") {
                alert("You choose limitation.")
            }
            else {

            }
        }







    })







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

function removeItem() {
    console.log("Item Removed!");
}

function randomizeItems() {
    console.log("Items were randomized!");
}

function clearItems() {
    console.log("Items were reset");
}

/*function Next() {
    count++;
    console.log(count);
}*/
