// wait for the DOM to finish loading
window.addEventListener('DOMContentLoaded', function(event) {
console.log("DOM fully loaded and parsed");



//reset();


var player1Moves = [[0,0,0],[0,0,0],[0,0,0]];
var player2Moves = [[0,0,0],[0,0,0],[0,0,0]];
var currentTurn = "playerX"
var moves = 0;



var checkifPlayerWon = function(playermoves) {

// check rows 
  var i = 0;
  var j = 0;
  var answer = false;

  

    sum1 = playermoves[0][0] + playermoves[0][1] + playermoves[0][2];
    sum2 = playermoves[1][0] + playermoves[1][1] + playermoves[1][2];
    sum3 = playermoves[2][0] + playermoves[2][1] + playermoves[2][2];
    sum4 = playermoves[0][0] + playermoves[1][0] + playermoves[2][0];
    sum5 = playermoves[0][1] + playermoves[1][1] + playermoves[2][1];
    sum6 = playermoves[0][2] + playermoves[1][2] + playermoves[2][2];
    sum7 = playermoves[0][0] + playermoves[1][1] + playermoves[2][2];
    sum8 = playermoves[0][2] + playermoves[1][1] + playermoves[2][0];
    
   
    console.log("PlayerX Moves: "+player1Moves);
    console.log("Player0 Moves: "+player2Moves);

  if(sum1 === 3 || sum2 === 3 || sum3 === 3 || sum4 === 3 || sum5 === 3 || sum6 === 3 || sum7 === 3 || sum8 === 3){
      answer = true;
  }
  else {
      answer = false;
  }

    return answer;
}

var whoseTurn = function(moves) {
    if (moves%2 === 0) {
        currentTurn = "PlayerX";

    }
    else {
        currentTurn =  "PlayerO";
    }
return currentTurn;
}

//box1
var box1status = 0;
var box1 = document.querySelector("#box1");
var turn = document.querySelector("#turn");



 box1.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box1status === 0) && (currentTurn === "PlayerX")) {
         box1.innerText = "X";
         box1status = 1; 
         player1Moves[0][0] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";

          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box1status === 0) && (currentTurn === "PlayerO")){
       box1.innerText = "O"; 
       box1status = 1;   
       player2Moves[0][0] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  });   


//box2
var box2status = 0;
var box2 = document.querySelector("#box2");
var turn = document.querySelector("#turn");



 box2.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box2status === 0) && (currentTurn === "PlayerX")) {
         box2.innerText = "X";
         box2status = 1; 
         player1Moves[0][1] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box2status === 0) && (currentTurn === "PlayerO")){
       box2.innerText = "O"; 
       box2status = 1;   
       player2Moves[0][1] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  }); 


//box3
var box3status = 0;
var box3 = document.querySelector("#box3");
var turn = document.querySelector("#turn");



 box3.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box3status === 0) && (currentTurn === "PlayerX")) {
         box3.innerText = "X";
         box3status = 1; 
         player1Moves[0][2] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box3status === 0) && (currentTurn === "PlayerO")){
       box3.innerText = "O"; 
       box3status = 1;   
       player2Moves[0][2] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  }); 


//box4
var box4status = 0;
var box4 = document.querySelector("#box4");
var turn = document.querySelector("#turn");



 box4.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box4status === 0) && (currentTurn === "PlayerX")) {
         box4.innerText = "X";
         box4status = 1; 
         player1Moves[1][0] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box4status === 0) && (currentTurn === "PlayerO")){
       box4.innerText = "O"; 
       box4status = 1;   
       player2Moves[1][0] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  }); 


  //box5
var box5status = 0;
var box5 = document.querySelector("#box5");
var turn = document.querySelector("#turn");



box5.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box5status === 0) && (currentTurn === "PlayerX")) {
         box5.innerText = "X";
         box5status = 1; 
         player1Moves[1][1] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box5status === 0) && (currentTurn === "PlayerO")){
       box5.innerText = "O"; 
       box5status = 1;   
       player2Moves[1][1] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  }); 


  //box6
var box6status = 0;
var box6 = document.querySelector("#box6");
var turn = document.querySelector("#turn");



box6.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box6status === 0) && (currentTurn === "PlayerX")) {
         box6.innerText = "X";
         box6status = 1; 
         player1Moves[1][2] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box6status === 0) && (currentTurn === "PlayerO")){
       box6.innerText = "O"; 
       box6status = 1;   
       player2Moves[1][2] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
  //          console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  });   


  //box7
var box7status = 0;
var box7 = document.querySelector("#box7");
var turn = document.querySelector("#turn");



box7.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box7status === 0) && (currentTurn === "PlayerX")) {
         box7.innerText = "X";
         box7status = 1; 
         player1Moves[2][0] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box7status === 0) && (currentTurn === "PlayerO")){
       box7.innerText = "O"; 
       box7status = 1;   
       player2Moves[2][0] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
  //          console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  });   

    //box8
var box8status = 0;
var box8 = document.querySelector("#box8");
var turn = document.querySelector("#turn");
box8.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box8status === 0) && (currentTurn === "PlayerX")) {
         box8.innerText = "X";
         box8status = 1; 
         player1Moves[2][1] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
 //           console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box8status === 0) && (currentTurn === "PlayerO")){
       box8.innerText = "O"; 
       box8status = 1;   
       player2Moves[2][1] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  });   


      //box9
var box9status = 0;
var box9 = document.querySelector("#box9");
var turn = document.querySelector("#turn");



box9.addEventListener("click", function(event) {    
     var currentTurn = whoseTurn(moves);
//     console.log(currentTurn)
     event.preventDefault();
//     console.log(moves);
     if ((box9status === 0) && (currentTurn === "PlayerX")) {
         box9.innerText = "X";
         box9status = 1; 
         player1Moves[2][2] = 1;  
         var winnerCheck = checkifPlayerWon(player1Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          // else if ((winnerCheck === false) && (moves === 8)) {
          //   turn.innerText = "It is a tie! No more moves";
          // }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else if ((box9status === 0) && (currentTurn === "PlayerO")){
       box9.innerText = "O"; 
       box9status = 1;   
       player2Moves[2][2] = 1; 
       var winnerCheck = checkifPlayerWon(player2Moves)
//        console.log(player1Moves);
//        console.log(winnerCheck);
         if(winnerCheck===true) {
//            console.log('works');
            turn.innerText = currentTurn + " wins";
          }
          // else if ((winnerCheck === false) && (moves === 8)) {
          //   turn.innerText = "It is a tie! No more moves";
          // }
          else {
            moves = moves + 1;
            currentTurn = whoseTurn(moves);
            turn.innerText = "It is now the turn of " + currentTurn;
          }
     }
     else {
         alert("This box has already been taken. Please select a different box")
     }

  });   




    


  //add reset button
//     var reset = function() {
//          var player1Moves = [[0,0,0],[0,0,0],[0,0,0]];
//          var player2Moves = [[0,0,0],[0,0,0],[0,0,0]];
//          var currentTurn = "playerX"
//          var moves = 0;

//        }
    
    var reset = document.querySelector("#reset");
  

    reset.addEventListener("click", function(event) {   
         event.preventDefault();
         window.location.reload()
    });

  



 });