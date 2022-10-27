
class DinnerType {
    constructor(input) {
        this.input = input
    }
    getRandomIndex(array) {
        var number = Math.floor(Math.random() * array.length)
        console.log(number)
        return number
    }
}
var meal = new DinnerType("cheese")//change this.input to value and pass in value in instance
function radioButtonSelection() {
    if(document.getElementById("radio1").checked) {
        this.input = this.getRandomIndex(sides)
        console.log("Side is checked", this.input)
    } else if (document.getElementById("radio2").checked) {
        this.input = this.getRandomIndex(mains)
        console.log("Main dish is checked", this.input)
    }else if (document.getElementById("radio3").checked) {
        this.input = this.getRandomIndex(desserts)
        console.log("Dessert is checked", this.input)
    }else if (document.getElementById("radio4").checked) {
        // this.input = this.getRandomIndex(sides)
        var entireMeal = {
            meal1: sides[meal.getRandomIndex(sides)],
            meal2: mains[meal.getRandomIndex(mains)],
            meal3: desserts[meal.getRandomIndex(desserts)],
        }
        console.log("Entire meal is checked", entireMeal)
    }
}

/* have radioButtonSelection instantiate a new class so that whatever is passed in as
the argument for input assigns this.input to a value. this.input can even start as null
we can use this function to assign the input to a array[getRandomIndex(array)]*/

/*this file handles data model updating*/