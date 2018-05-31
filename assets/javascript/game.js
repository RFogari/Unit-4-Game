/* layout:
New random number generates each time game resets
Random number is visible onscreen to player
Random number is between 19 and 120
Player uses 4 objects on screen
Each object is asigned a random value between 1 and 12.
Each time the object is clicked the amount is added to the total player amount.
The value of each object is not revealed until the player clicks.
If the player total matches the computer number player wins.
Win count updates.
If the player goes over the computer amount - player loses.
Loss count updates.
Win or loss game resets
Win and loss does not reset.
*/




$(document).ready(function (){

var win = 0;
var loss = 0;
var totalAmount = 0;


//random number generated each time game resets
var randomMatch = Math.floor((Math.random()*101+19))
console.log(randomMatch);

//add random number to HTML
$(".randomNumber").html(randomMatch);

//Push wins or losses to HTML
$(".wins").html(win);
$(".loses").html(loss);

//object random numbers
var object1 = Math.floor(Math.random()*11+1);
var object2 = Math.floor(Math.random()*11+1);
var object3 = Math.floor(Math.random()*11+1);
var object4 = Math.floor(Math.random()*11+1);

console.log(object1, object2, object3, object4);


function won(){
    win++;
    $(".wins").text(win);
    alert("You Win!!");
    newGame();
}

function lost(){
        loss++;
        $(".loss").text(loss);
        alert("You Lose!");
        newGame();
}




//on click functions

$(".object1").on("click", function (event) {
    totalAmount = object1 + totalAmount;
    $(".userTotal").text(totalAmount);
    console.log(totalAmount);

    if (totalAmount == randomMatch) {
        won();
    }    
    else if  (totalAmount > randomMatch){
        lost();
    };
});

$(".object2").on("click", function (event) {
    totalAmount = (totalAmount + object2);
    $(".userTotal").text(totalAmount);
    console.log(totalAmount);

    if (totalAmount == randomMatch){
        won();
    }    
    else if (totalAmount > randomMatch){
        lost();
    };
});

$(".object3").on("click", function (event) {
    totalAmount = (totalAmount + object3);
    $(".userTotal").text(totalAmount);
    console.log(totalAmount);

    if (totalAmount == randomMatch) {
        won();
    }    
    else if (totalAmount > randomMatch){
        lost();
    };
    });
    
    
    $(".object4").on("click", function (event) {
        totalAmount = (totalAmount + object4);
        $(".userTotal").text(totalAmount);
        console.log(totalAmount);
    
        if (totalAmount == randomMatch) {
            won();
        }    
        else if (totalAmount > randomMatch){
            lost();
        };
    });

    
    //Win or Lose functions to alert player and update scores.
   



//restart game and generate new variable to match and new variable assigned to each object



function newGame(){
    var randomMatch = Math.floor((Math.random()*101+19));
    console.log(randomMatch);
    $(".randomNumber").text(randomMatch);
    
    object1 = Math.floor(Math.random()*11+1);
    object2 = Math.floor(Math.random()*11+1);
    object3 = Math.floor(Math.random()*11+1);
    object4 = Math.floor(Math.random()*11+1);
    console.log(object1, object2, object3, object4);

    totalAmount= 0;

    $(".userTotal").text(totalAmount);
};

});
