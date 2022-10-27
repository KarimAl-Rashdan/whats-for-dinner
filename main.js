
// --------Query Selectors---------//
var sideButton = document.getElementById("radio1");
var mainButton = document.getElementById("radio2");
var dessertButton = document.getElementById("radio3");
var entireMealButton = document.getElementById("radio4");


function getRandomIndex(array) {
   var randomNumber =  Math.floor(Math.random() * array.length)
   console.log(array[randomNumber])
   return array[randomNumber]
//    returns a random meal depending which array you pass in
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
// function radioButtonSelection() {
//     if(document.getElementById("radio1").checked) {
//         this.input = this.getRandomIndex(sides)
//         console.log("Side is checked", this.input)
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



