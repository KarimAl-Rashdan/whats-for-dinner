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
    // getRandomMeal(mealOption)
    // displayFood(mealOutput)
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
        getRandomMeal()
        displayFood(mealOutput)
    } else if (mainButton.checked) {
        mealOption = mains
        getRandomMeal()
        displayFood(mealOutput)
    } else if (dessertButton.checked) {
        mealOption = desserts
        getRandomMeal()
        displayFood(mealOutput)
    } else if (entireMealButton.checked) {
        fullCourse()
        getRandomCourse(entireMeal)
        displayEntireMeal(courseOutput)
    }
}

function getRandomMeal(mealOption) {
   var randomNumber =  Math.floor(Math.random() * mealOption.length)
   mealOutput = mealOption[randomNumber]
   return mealOutput
}

function getRandomCourse(entireMeal) {
    var randomNum = Math.floor(Math.random() * entireMeal.length)
    courseOutput = entireMeal[randomNum]
    return courseOutput
}

function displayFood(mealOutput) {
    outputParagraph.innerText = `${mealOutput}!`
    }


function fullCourse() {
    fullMeal = {
        side: getRandomMeal(sides),
        main: getRandomMeal(mains),
        dessert: getRandomMeal(desserts),
    }
    entireMeal.push(fullMeal)
    console.log(entireMeal)
}

function displayEntireMeal(courseOutput) {
    console.log(courseOutput)
    outputParagraph.innerText = ""
    outputParagraph.innerText = `${courseOutput.main} with a side of ${courseOutput.side} and ${courseOutput.dessert} for dessert!`
}

// When the user selects the “Entire Meal” option and then clicks the “Let’s Cook!” button, the user sees a message with a side, main and dessert option from the lists of possible dishes for all categories
// When the meal items appear, the cookpot icon disappears 