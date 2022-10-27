// --------Query Selectors---------//

// -----Buttons-----//

var sideButton = document.getElementById("radio1");
var mainButton = document.getElementById("radio2");
var dessertButton = document.getElementById("radio3");
var entireMealButton = document.getElementById("radio4");
var letsCookButton = document.getElementById("lets-cook");

// -----Right Box Space----//

var cookPotImage = document.getElementById("cookpot-image")
var outputSpace = document.getElementById("right-white-box")
var outputHeader = document.getElementById("output-header")
var outputParagraph = document.getElementById("output-paragraph")

// ----------Event Listeners---------//

letsCookButton.addEventListener("click", function(event) {
    event.preventDefault()
    hideImage()
    radioButtonSelection()
    getRandomMeal(mealOption)
    displayFood(mealOutput)
})

// ----------Global Variables--------//
var mealOption;
var mealOutput;
var entireMeal = []

function hideImage() {
    cookPotImage.classList.add("hidden")
    outputHeader.classList.remove("hidden")
    outputParagraph.classList.remove("hidden")
}

function radioButtonSelection() {
    if(sideButton.checked) {
        mealOption = sides
    } else if (mainButton.checked) {
        mealOption = mains
    } else if (dessertButton) {
        mealOption = desserts
    } else if (entireMealButton) {
        mealOption = entireMeal
    }
}

function getRandomMeal(mealOption) {
   var randomNumber =  Math.floor(Math.random() * mealOption.length)
   mealOutput = mealOption[randomNumber]
   return mealOutput
}

function displayFood(mealOutput) {
    outputParagraph.innerText = `${mealOutput}!`
}