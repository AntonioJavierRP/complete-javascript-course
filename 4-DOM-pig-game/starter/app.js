/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

//dice = Math.floor(Math.random() * 6) + 1;

<<<<<<< HEAD
//document.querySelector('#current-' + activePlayer).textContent = dice;
=======
document.querySelector('#current-' + activePlayer).textContent = dice;
>>>>>>> be2469f4c387f4f566db39d746cc974439708f66
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+dice+'<\em>';


//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Anonimous function when is declared inside, bc it doesnt have a name 
// and we are not going to reuse it
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    // 1. Random number.

    var dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display result.
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';

    diceDOM.src = 'dice-' + dice + '.png';



    // 3. Update the round score IF the rolled number was NOT a 1.
    if(dice !== 1){
        // Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).innerHTML = '<em>'+ roundScore +'<\em>';


    }else{
        // Next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // Add CURRENT score to GLOBAL score of the current player
    scores[activePlayer] += roundScore;

    // Update de UI
    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
    
    

    // Check if player won the game
    if(scores[activePlayer] >= 15){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        //alert('player ' + (activePlayer+1) + ' won!');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');


    }
    else{
        nextPlayer();
    }


});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //activePlayer = Math.abs(activePlayer-1)
    roundScore = 0;

    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    /*
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
    */

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}