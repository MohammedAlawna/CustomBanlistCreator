//Workflow: Click 'CreateBanlist' You'll get a banlist view.
function CreateNewBanlist() {
    let divToAnimate = document.getElementById('animate');
    divToAnimate.style.display = 'block';
    console.log("Banlist View Should Appear At The Bottom!");
}

//ًWorkflow: Click 'ImportBanlist' You'll import an already list with their data appearing on the banist view.
function ImportBanlist() {
    console.log('Success! You imported a banlist.');
}

/*@TrialCode@
function animate() {
    let divToAnimate = document.getElementsByClassName('animate');
    divToAnimate.style.display = block;

}*/