var lion = {
    "name": "simba",
    "legs": 4,
    "tail": 1
}

function myFunction(roar){
    lion[roar]="roar-roar"
    return lion;
};
console.log(myFunction("roar"));

module.exports = myFunction;