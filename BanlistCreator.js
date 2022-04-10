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

    let requirment;
    let individual;
    //Other variables should be defined later now we'll try on the small scope to make banlist!

    let nextBtn = document.getElementById('next');
    let itemaddedBtn = document.getElementById('itemAddedBtn');
    //This should enable the qustions (You may show them as divs aswell)
    //@1 Show first question: Whitelist or not!
    let itemQuestions = [];

    itemQuestions[0] = document.getElementById('whiteListBox');
    itemQuestions[1] = document.getElementById('limitation-selection');
    itemQuestions[2] = document.getElementById('ind-selection');
    itemQuestions[3] = document.getElementById('location-selection');

    //Selection values
    let whiteListCheck;
    let selectCardLocation = document.getElementById('card-location');
    let selectCardGroup = document.getElementById('card-group');
    var selectCardLimitation = document.getElementById("limitation");



    //var value = select.options[select.selectedIndex].value;

    count = 0;

    if (count == 0) {

        itemQuestions[0].style.display = "block";
        nextBtn.disabled = false;

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
                //TODO Add + to the textblob.
            }
            else if (value == "limitation") {
                alert("You choose limitation.");
                //TODO don't add + to the text blob.
            }
            itemQuestions[2].style.display = 'block';

        }

        if (count == 3) {
            var select = document.getElementById('card-group');
            var value = select.options[select.selectedIndex].value;
            if (value == "individ") {
                alert("You choose Individual!");
                //TODO Show card Search! (Dropdown search IMP)
            }
            else if (value == "group") {
                alert("You choose group!");
                //TODO Show ban grouping categories.
            }

            itemQuestions[3].style.display = "block"; //it should be the location!
        }

        if (count == 4) {
            //Show location question.
            var select = document.getElementById('card-location');



            var value = select.options[select.selectedIndex].value;
            if (value == "main") {
                alert('main');
            }
            else if (value == "extra") {
                alert('Extra');
            }
            else if (value == "me") {
                alert('main or extra');
            }
            else if (value == "ms") {
                alert('main or side');
            }
            else if (value == "es") {
                alert('extra or side');
            }
            else if (value == "mes") {
                alert('main or extra or side');
            }
            else if (value == "nill") {
                alert('this field is optional!'); //Do not add anything as it's optional~!
            }


            itemaddedBtn.disabled = false;
            nextBtn.disabled = true;
        }

        itemaddedBtn.addEventListener("click", () => {
            //Check WhiteList
            whiteListCheck = document.querySelector('.form-check-input').checked;
            let valueLocation = selectCardLocation.options[selectCardLocation.selectedIndex].value;
            let valueLimitation = selectCardLimitation.options[selectCardLimitation.selectedIndex].value;
            let valueGroup = selectCardGroup.options[selectCardGroup.selectedIndex].value;
            console.log(valueLocation + "\n" + valueLimitation + "\n" + valueGroup + '\n' + whiteListCheck);


            for (let i = 0; i < itemQuestions.length; i++) {
                itemQuestions[i].style.display = "none";

            }


        });

        if (count == 5) {
            /* 
            1. Add the item to text/list.
            2. Hide questions that was shown
            3. Reset their values and the loop should be able to start again! (count ==0)
            */



            //Hide all elements

            count = 0;

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
