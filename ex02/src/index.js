var myClothes = {
    hat: "Fedora",
    shirt: "nike",
    shoes: "shoes"
};

function myFunction(myObj) {
    var hatValue = myClothes.hat;
    var shirtValue = myClothes.shirt;
    var shoesValue = myClothes.shoes;
    return { hatValue, shirtValue, shoesValue };
};


console.log(myFunction());

module.exports = { myClothes, myFunction };