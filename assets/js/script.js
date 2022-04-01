//Wait for the DOM to finish load before running the game
//Get the button elements and event listners to them

document.addEventListener("DOMcontentLoaded", function)() {
let button = ducument.getElementeByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", function () {
if(this.getAttribute("data-type")==="submit"){
    alert("You Clicked Submit");
 } else {
     let gameType = this.getAttribute ("data-type")
  }
    })
 }
})


function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displatSubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}