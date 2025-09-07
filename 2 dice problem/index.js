var one= Math.floor(Math.random()*6+1)
var two= Math.floor(Math.random()*6+1)

if(one>two){
    document.querySelector("h1").innerHTML="Player 1 wins"; 
}
else if(one<two){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="Draw!";
}

document.querySelector(".first_dice").setAttribute("src","dice"+one+".png");
document.querySelector(".second_dice").setAttribute("src","dice"+two+".png");