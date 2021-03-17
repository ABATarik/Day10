var myPet = {
    species: "Golden Retriver",
    name: "Freud",
    legs: 4,
    friends: "Jung, " + "Kan."
}
function myFunction(myObj) {
    return myObj;
};

console.log(myFunction(myPet));


module.exports = {myPet, myFunction};