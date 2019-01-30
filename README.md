

#main.js
//represent board by array 3*3 to store the user value

//declare countGame to calculate how many user click on box

// declare three count for player1, player2, TEI for calculate how many user won 

//declare boolean value name is flag --> true the user will play with computer 
                                   --> false the user will play with another player

// used function clickOnBox to change the box content to X value or O value

#inside function clickOnBox search about the box id by switch then fill the box when the box is empty 
   //when user enter his value plus countGame by one (countGame++; ) to know if the game is end without winner

  // call checkWon to check after user fill the box if there is winner or not 

      //if there is winner show the message (player.. won) the call the function clear to clear all box in board and plus countPlayer ().
      //if there is no winner show message (Keep trying) and plus countTEi

-----------------------------------------------------------------------------------------