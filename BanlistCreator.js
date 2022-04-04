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

    let nextBtn = document.getElementById('next');
    //This should enable the qustions (You may show them as divs aswell)
    //@1 Show first question: Whitelist or not!
    let itemQuestions = [];
    itemQuestions[0] = document.getElementById('whiteListBox');
    itemQuestions[1] = document.getElementById('limitation-selection');


    count = 0;

    if (count == 0) {
        itemQuestions[0].style.display = "block";

    }

    else if (count == 1) {
        console.log("Count is 1");
    }

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

function Next() {
    count++;
    console.log(count);
}
