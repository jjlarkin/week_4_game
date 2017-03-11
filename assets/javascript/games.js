/****************************************************************
 James Larkin

 Crystal Game
 ***********************************************************************/
/*

 * There will be four crystals displayed as buttons on the page.

 * The player will be shown a random number at the start of the game.

 * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

 * Your game will hide this amount until the player clicks a crystal.
 * When they do click one, update the player's score counter.

 * The player wins if their total score matches the random number from the beginning of the game.

 * The player loses if their score goes above the random number.

 * The game restarts whenever the player wins or loses.

 * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

 * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


 */


var userGuess =0;
var randomNumber =Math.floor(Math.random()*101+19);
var wins = 0;
var losses = 0;
var redNum= Math.floor(Math.random()*11+1);
var blueNum= Math.floor(Math.random()*11+1);
var greenNum= Math.floor(Math.random()*11+1);
var yellowNum= Math.floor(Math.random()*11+1);

$('#userGuess').html(userGuess);

console.log(randomNumber)
$("#randomNumber").html(randomNumber);
$(document).ready(function() {
    function reset(){
        randomNumber=Math.floor(Math.random()*101+19);
        $('#randomNumber').html(randomNumber);
        redNum= Math.floor(Math.random()*11+1);
        blueNum= Math.floor(Math.random()*11+1);
        greenNum= Math.floor(Math.random()*11+1);
        yellowNum= Math.floor(Math.random()*11+1);
        userGuess= 0;
        $('#userGuess').html(userGuess);
    }

    function win(){
        alert("You won!");
        wins++;
        $('#wins').html(wins);
        reset();
    }

    function lose(){
        alert ("You lose!");
        losses++;
        $('#losses').html(losses);
        reset()
    }



    $('.gem').on ('click', function(){
        if ($(this).hasClass(".gem"))
            redNum= redNum
        userGuess = userGuess + redNum;
        console.log("userGuess= " + userGuess);
        $('#userGuess').html(userGuess);

        if (userGuess == randomNumber){
            win();
        }
        else if ( userGuess > randomNumber){
            lose();
        }
    })


    $('#yellow').on ('click', function(){
        userGuess = userGuess + yellowNum;
        $('#finalTotal').html(userGuess);
        if (userGuess == randomNumber){
            win();
        }
        else if ( userGuess > randomNumber){
            lose();
        }
    })


    $('#blue').on ('click', function(){
        userGuess = userGuess + blueNum;
        $('#finalTotal').html(userGuess);
        if (userGuess == randomNumber){
            win();
        }
        else if ( userGuess > randomNumber){
            lose();
        }
    })
    $('#green').on ('click', function(){
        userGuess = userGuess + greenNum;
        $('#finalTotal').html(userGuess);

        if (userGuess === randomNumber){
            win();
        }
        else if ( userGuess > randomNumber){
            lose();
        }
    });
});

