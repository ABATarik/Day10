var players = {
    7: "Muhamed Besic",
    10: "Miralem Pjanic",
    11: "Edin Dzeko"

}

function myFunction(myObj) {
    var playerNumber = players[10];

    return playerNumber;

};
console.log(myFunction());

module.exports = { players, myFunction };