var arr1=[["","",""],["","",""],["","",""]];////represent board by array 3*3 to store the user value
var XO="X";//store the letter x or o
var message="";
var countGame=0;
var countPlayer1=0;
var countPlayer2=0;
var countTIE=0;
 var CountComputerGame=0;
var flag=false;
    
///when user clicked change the box content to X value or O value
function clickOnBox(event){
 
   if ($(event.target).text() ==="" && gameOver===false) {
      $(event.target).text(XO);
      countGame++;//plus countGame
      //search about the box id by switch then fill the box
        switch(event.target.id){
        case "box1":
            arr1[0][0]=XO;
            if(flag===true){
               countGame++;
               computerTurn(); 
            }
         // code block
         break;
        case "box2":
        arr1[0][1]=XO;
        if(flag===true){
         countGame++;
         computerTurn();
      }
         // code block
         break;
        case "box3":
         arr1[0][2]=XO;
         if(flag===true){
            countGame++;
            computerTurn();  
          }
         // code block
         break;
        case "box4":
         arr1[1][0]=XO;
         if(flag===true){
            countGame++;
            computerTurn(); 
         }
         // code block
         break;
         case "box5":
         arr1[1][1]=XO;
         if(flag===true){
            countGame++;
            computerTurn();
         }
         // code block
         break;
         case "box6":
         arr1[1][2]=XO;
         if(flag===true){
            countGame++;
            computerTurn();
         }
         // code block
         break;
         case "box7":
         arr1[2][0]=XO;
         if(flag===true){
            countGame++;
            computerTurn();
         }
         // code block
         break;
         case "box8":
         arr1[2][1]=XO;
         if(flag===true){
            countGame++;
            computerTurn();
         }
         break;
         case "box9":
         arr1[2][2]=XO;
         if(flag===true){
            countGame++;
            computerTurn();  
         }
         
      }

      checkWon();
      //change "XO" to O or O to X
      if(flag===false){
         if(XO==="X"){
            XO="O";}
         else{
            XO="X";}
      }
      
   }
}//end function
 
$('.game-cell').on("click",clickOnBox);//select class game-cell the call function clickOnBox


// used when the computer choose the box randomly 
function storeArr(id){
   switch(id){
               case "box1":
               arr1[0][0]="O";
               $("#box1").text("O");
                // code block
                break;
               case "box2":
               arr1[0][1]="O";
               $("#box2").text("O");
                // code block
                break;
               case "box3":
                arr1[0][2]="O";
                $("#box3").text("O");
                // code block
                break;
               case "box4":
                arr1[1][0]="O";
                $("#box4").text("O");
                // code block
                break;
                case "box5":
                arr1[1][1]="O";
                $("#box5").text("O");
                // code block
                break;
                case "box6":
                arr1[1][2]="O";
                $("#box6").text("O");
                // code block
                break;
                case "box7":
                arr1[2][0]="O";
                $("#box7").text("O");
                // code block
                break;
                case "box8":
                arr1[2][1]="O";
                $("#box8").text("O");
                break;
                case "box9":
                arr1[2][2]="O";
                $("#box9").text("O");}
                }

// to check after user fill the box if there is winner or not 
function checkWon(){
      if((arr1[0][0]===arr1[0][1])&& (arr1[0][1]===arr1[0][2])){
         if(arr1[0][0]==="X"){
            player1Won();  //call player1Won to show the message
         }

         else if(arr1[0][0]==="O"){
            player2Won();//call player2Won to show the message
         }
      }
      else if((arr1[1][0]===arr1[1][1])&& (arr1[1][1]===arr1[1][2])){
         if(arr1[1][0]==="X"){
            player1Won();// call player1Won to show the message
         }

         else if(arr1[1][0]==="O"){
            player2Won();//call player2Won to show the message
         }
      }
      else if((arr1[2][0]===arr1[2][1])&& (arr1[2][1] ===arr1[2][2])){
         if(arr1[2][0]==="X"){
            player1Won();// call player1 to show the message
         }
         else if(arr1[2][0]==="O"){
            player2Won();//call player2Won to show the message
         }
      }

      else if((arr1[0][2]===arr1[1][1])&&(arr1[1][1]===arr1[2][0])){
         if(arr1[0][2]==="X"){
            player1Won();// call player1Won to show the message
           
          }

         else if(arr1[0][2]==="O"){
            player2Won();//call player2Won to show the message
           }
      }
      else if((arr1[0][0]===arr1[1][1])&& (arr1[1][1]===arr1[2][2])){
         if(arr1[0][0]==="X"){
            player1Won();  // call player1Won to show the message
         }
         else if(arr1[0][0]==="O"){
            player2Won();//call player2Won to show the message
         }
      }
      else if((arr1[0][0]===arr1[1][0])&& (arr1[1][0]===arr1[2][0])){
         if(arr1[0][0]==="X"){
            player1Won();// call player1Won to show the message
         }
         else if(arr1[0][0]==="O"){
            player2Won();
         }
      }
      else if((arr1[0][1]===arr1[1][1]) && (arr1[1][1]===arr1[2][1])){
         if(arr1[0][1]==="X"){
            player1Won();//call player1Won to show the message
         }
         else if(arr1[0][1]==="O"){
            player2Won();
         }
      }
      else if((arr1[0][2]===arr1[1][1])&& (arr1[1][1]===arr1[2][0])){
         if(arr1[0][2]==="X"){
            player1Won();//call player1Won to show the message
         }

         else if(arr1[0][2]==="O"){
            player2Won();//call player2Won to show the message
         }
      }
      else if(countGame>=9){
         $('#message').text("Keep trying");
         gameOver=true;
         countTIE++;
            $("#TIE").text("Keep trying: "+" "+(countTIE));
         setTimeout(clearBox,3000);
      }
}//end function

// player1Won() show the message when player1 won 
function player1Won(){
   $('#message').text("player1 won");
   gameOver=true;
   countPlayer1++;
   $("#player1").text("player1: "+countPlayer1);
   setTimeout(clearBox,3000);
}
// player2Won() show the message when player2 won 
function player2Won(){
$('#message').text("player2 won");
gameOver=true;
countPlayer2++;
$("#player2").text("player2: "+countPlayer2);
setTimeout(clearBox,3000);
}

// clear all page when user choose another type(2 player, play with computer)
   function clearBox(){
      $("#message").text("");
      gameOver=false;
      $("#box1").text("");
      $("#box2").text("");
      $("#box3").text("");
      $("#box4").text("");
      $("#box5").text("");
      $("#box6").text("");
      $("#box7").text("");
      $("#box8").text("");
      $("#box9").text("");
      countGame=0;
      arr1=[["","",""],["","",""],["","",""]];
      }

      // clear all page when user choose another type(2 player, play with computer)
      function clearBox2(){
         $("#message").text("");
         gameOver=false;
         $("#box1").text("");
         $("#box2").text("");
         $("#box3").text("");
         $("#box4").text("");
         $("#box5").text("");
         $("#box6").text("");
         $("#box7").text("");
         $("#box8").text("");
         $("#box9").text("");
         countGame=0;
         arr1=[["","",""],["","",""],["","",""]];
         countPlayer1=0;
         countPlayer2=0;
         countTIE=0;
          XO="X";}

          // set the box value randomly when computer play
          function randomID(){
            for(var i=1;i<=9;i++){
               if($("#box"+i).text() ===""){ 
                  $("#box"+i).text("O");
                  storeArr("box"+i);
                  // checkWon();
                  return;
               }
            } 
         } 

// computerTurn function to know where the first player play 
// make the first player unable to win 
function computerTurn(){
   if((((arr1[0][0]!=="" && arr1[0][1]!=="") && (arr1[0][0]===arr1[0][1]))||((arr1[2][0]!=="" &&arr1[1][1]!=="") && (arr1[2][0]===arr1[1][1]))||((arr1[1][2]!=="" && arr1[2][2]!=="") && (arr1[1][2]===arr1[2][2])))&& ($("#box3").text()==="")){
      $("#box3").text("O");
      arr1[0][2]="O";
      checkWon();
}
else if((((arr1[0][2]!=="" && arr1[2][2]!=="") && (arr1[0][2]===arr1[2][2]))||((arr1[1][0]!=="" && arr1[1][1]!=="")&&(arr1[1][0]===arr1[1][1])))&& ($("#box6").text()==="")){
      $("#box6").text("O");
      arr1[1][2]="O";
      checkWon();  
}
else if((((arr1[2][0]!=="" && arr1[2][1]!=="") && (arr1[2][0]===arr1[2][1])) || ((arr1[0][0]!=="" && arr1[1][1]!=="") && (arr1[0][0]===arr1[1][1]))||((arr1[0][2]!=="" && arr1[1][2]!=="")&& (arr1[0][2]===arr1[1][2])))&& ($("#box9").text()==="")){
      $("#box9").text("O");
      arr1[2][2]="O";
      checkWon();
}
else if((((arr1[0][0]!=="" && arr1[0][2] !=="") && (arr1[0][0]===arr1[0][2]))||((arr1[2][1]!=="" && arr1[1][1]!="")&& (arr1[2][1]===arr1[1][1])))&& ($("#box2").text()==="")){
      $("#box2").text("O");
      arr1[0][1]="O";
      checkWon();
}
else if(((arr1[1][2]!=="" && arr1[1][0]!=="") && (arr1[1][2]===arr1[1][0]))||((arr1[0][1]!=="" && arr1[2][1]!=="") && (arr1[0][1]===arr1[2][1]))||((arr1[0][2]!=="" && arr1[2][0] !=="") && (arr1[0][2]===arr1[2][0]))||((arr1[2][2]!=="" && arr1[0][0]!="") && (arr1[2][2]===arr1[0][0])) && ($("#box5").text()==="")){
      
      $("#box5").text("O");
      arr1[1][1]="O";
      checkWon();
}
else if((((arr1[2][0]!=="" && arr1[2][2]!=="") && (arr1[2][0]===arr1[2][2]))||((arr1[0][1]!=="" && arr1[1][1]!=="")&& (arr1[0][1]===arr1[1][1]))) && ($("#box8").text()==="")){
       $("#box8").text("O");
       arr1[2][1]="O";
       checkWon();
}
else if((((arr1[0][1]!=="" && arr1[0][2]!=="") && (arr1[0][1]===arr1[0][2]))||((arr1[1][0]!=="" && arr1[2][0]!=="") && (arr1[1][0]===arr1[2][0]))||((arr1[1][1]!=="" && arr1[2][2]!=="") && (arr1[1][1]===arr1[2][2]))) && ($("#box1").text()==="")){  
      $("#box1").text("O");
      arr1[0][0]="O";
      checkWon();
      }
else if((((arr1[2][0]!=="" && arr1[0][0]!=="") && (arr1[2][0]===arr1[0][0]))||((arr1[1][1]!=="" && arr1[1][2]!=="") && (arr1[1][1]===arr1[1][2])))&& ($("#box4").text()==="")){
      
      $("#box4").text("O");
      arr1[1][0]="O";
      checkWon();
}
else if((((arr1[0][2]!=="" && arr1[1][1]!=="") && ((arr1[0][2]===arr1[1][1])))||((arr1[2][2]!=="" && arr1[2][1]!=="") && (arr1[2][2]===arr1[2][1]))||((arr1[0][0]!=="" && arr1[1][0]!=="") && (arr1[0][0]===arr1[1][0]))) && ($("#box7").text()==="")){
      $("#box7").text("O");
      arr1[2][0]="O";
      checkWon();
   }
else{
   
   randomID();//fill any empty box 
}
}


function EndComputerGame(){
      flag=false;//set flag as a false value ** to be computer game **
   clearBox2();}

   function ComputerGame(){
      flag=true;
      clearBox2();}

   $("#newChallenge").on("click",EndComputerGame);//when click the button 2 player
   $("#computerGame").on("click",ComputerGame);//when click the button paly with compuer

