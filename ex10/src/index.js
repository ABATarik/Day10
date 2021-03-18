function myFunction(){

var myMusic ={
001 : {
    artist :"Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats : {
        1: "cd",
        2: "8T",
        3:"LP"

    },
    gold:true
},
002 : {
    artist=myMusic.artist,
    title=myMusic.title,
    release_year=myMusic.release_year
}
}
};
console.log(myFunction(2));
module.exports= myFunction;