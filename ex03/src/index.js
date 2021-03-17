var myFood = {
    vegetable : "carrot",
    fruit : "orange",
    drink : "water"
};

function myFunction(myObj) {
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood["fruit"];
    var dringValue = myFood["drink"];

    return { vegetableValue, fruitValue, dringValue };

}

console.log(myFunction());

module.exports = {myFood, myFunction};