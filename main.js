
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

function hideImage() {
    // event.preventDefault()
    console.log("hide image is firing")
    cookPotImage.classList.add("hidden")
    outputHeader.classList.remove("hidden")
    outputParagraph.classList.remove("hidden")
    //hide image and show output header and output paragraph
}
function radioButtonSelection() {
    if(sideButton.checked) {
        mealOption = sides
        console.log("Side is checked")
    } else if (mainButton.checked) {
        mealOption = mains
        console.log("Main is checked")
    } else if (dessertButton) {
        mealOption = desserts
        console.log("Dessert is checked")
    } else if (entireMealButton) {
        console.log("Entire meal is checked")
    }

}
function getRandomMeal(mealOption) {
   var randomNumber =  Math.floor(Math.random() * mealOption.length)
   console.log(mealOption[randomNumber])
   mealOutput = mealOption[randomNumber]
   return mealOutput
//    returns a random meal depending which array you pass in
}

function displayFood(mealOutput) {
    
    outputParagraph.innerText = `${mealOutput}!`
}

// class DinnerType {
//     constructor(input) {
//         this.input = inputs
//         this.icon = true
//     }
//     getRandomIndex(inputs) {
//         var number = Math.floor(Math.random() * array.length)
//         input[number(array)]
//         return number
//     }
// }
// var meal = new DinnerType("cheese")//change this.input to value and pass in value in instance







//     } else if (document.getElementById("radio2").checked) {
//         this.input = this.getRandomIndex(mains)
//         console.log("Main dish is checked", this.input)
//     }else if (document.getElementById("radio3").checked) {
//         this.input = this.getRandomIndex(desserts)
//         console.log("Dessert is checked", this.input)
//     }else if (document.getElementById("radio4").checked) {
//         // this.input = this.getRandomIndex(sides)
//         var entireMeal = {
//             meal1: sides[meal.getRandomIndex(sides)],
//             meal2: mains[meal.getRandomIndex(mains)],
//             meal3: desserts[meal.getRandomIndex(desserts)],
//         }
//         console.log("Entire meal is checked", entireMeal)
//     }
// }
//  -------------PseudoCode---------------
/*When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category
When the dish name appears, the cookpot icon disappears*/
