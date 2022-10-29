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

function hideImage() { //hide Image function looks good no refactoring necessary
    cookPotImage.classList.add("hidden")
    outputHeader.classList.remove("hidden")
    outputParagraph.classList.remove("hidden")
}

function radioButtonSelection() {
    if(sideButton.checked) {
        getRandomMeal(sides)
        displayFood(mealOutput)
    } else if (mainButton.checked) {
        getRandomMeal(mains)
        displayFood(mealOutput)
    } else if (dessertButton.checked) {
        getRandomMeal(desserts)
        displayFood(mealOutput)
    } else if (entireMealButton.checked) {
        fullCourse()
        getRandomMeal(entireMeal)
        displayFood(mealOutput)
    }
}

function getRandomMeal(mealOption) {
   var randomNumber =  Math.floor(Math.random() * mealOption.length)
   mealOutput = mealOption[randomNumber]
   return mealOutput
}

function displayFood(mealOutput) {
    if(sideButton.checked || mainButton.checked ||dessertButton.checked) {
        outputParagraph.innerText = `${mealOutput}!`
    } else if (entireMealButton.checked) {
        outputParagraph.innerText = ""
        outputParagraph.innerText = `${mealOutput.main} with a side of ${mealOutput.side} and ${mealOutput.dessert} for dessert!`
    }
}

function fullCourse() {
    fullMeal = {
        side: getRandomMeal(sides),
        main: getRandomMeal(mains),
        dessert: getRandomMeal(desserts),
    }
    entireMeal.push(fullMeal)
}
