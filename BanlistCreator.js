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
    console.log('Questionaire Should Start!');
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