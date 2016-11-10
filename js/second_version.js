$(document).ready(function() {
  var isPlayer1 = true;
  var $td = $("td");
  var gameOver = false;
  var moves = 0;

  // function resetGame() {
  //   isPlayer1 = true;
  //   var $td = $("td");
  //   gameOver = false;
  //   moves = 0;
  //   makeAMove();
  // }

  function compHuman() {
    var compTurn = true;
    var counter = 0;
    while (compTurn && !gameOver) {
      var randomIndex = Math.floor(Math.random() * 9);
      if ($($("td")[randomIndex]).text() === "") {
        $("#message p").text("Computer is thinking...");
        setTimeout(function() {
          $($("td")[randomIndex]).text("O");
          checkLogic(true);
          if (!gameOver) {
            $("#message p").text("Human's turn...");
          }
        }, 2000);
        compTurn = false;
      }
    }
    if (!compTurn) {
      $("td").click(function() {
        if ($(this).text() === "" && !gameOver && counter === 0) {
          $(this).text("X");
          checkLogic(false);
          counter += 1;
          if (counter > 0) {
            compTurn = true;
            compHuman();
          }
        }
      });
    }
  }

  function makeAMove() {
    $("td").click(function() {
      var position = $(this).text();
      if (position === "" && !gameOver) {
        if (isPlayer1) {
          $(this).text('O');
          isPlayer1 = false;
        } else {
          $(this).text('X');
          isPlayer1 = true;
        }
        moves += 1;
      }
      checkLogic(isPlayer1);
    });
  }
  function checkLogic(isPlayer1) {
    var coord = $("td").map(function() {
      return $(this).text();
    });
    if (coord[4] === "X" || coord[4] === "O") {
      if ((coord[3] === coord[4] && coord[3] === coord[5]) ||
         (coord[0] === coord[4] && coord[0] === coord[8]) ||
         (coord[2] === coord[4] && coord[2] === coord[6]) ||
         (coord[1] === coord[4] && coord[1] === coord[7])) {
        console.log("One");
        gameOver = true;
      }
    }
    if (coord[8] === "X" || coord[8] === "O") {
      if ((coord[6] === coord[7] && coord[6] === coord[8]) ||
         (coord[2] === coord[5] && coord[2] === coord[8])) {
        console.log("Two");
        gameOver = true;
      }
    }
    if (coord[0] === "X" || coord[0] === "O") {
      if ((coord[0] === coord[3] && coord[0] === coord[6]) ||
         (coord[0] === coord[1] && coord[0] === coord[2])) {
        console.log("Three");
        gameOver = true;
      }
    }
    if (gameOver) {
      console.log("GAME IS OVER");
      if (!isPlayer1) {
        console.log("FALSIFIED!!!!");
        $("#message p").text("Player 1 Wins!!");
      } else {
        console.log("TRUTHY!!!!");
        $("#message p").text("Player 2 Wins!!");
        console.log("WHAT HOW!!!?");
      }
    } else {
      if (moves === 9) {
        $("#message p").text("It's a Tie!!");
      }
    }
  }
  $("#reset").click(function() {
    var coord = $("td").map(function() {
      return $(this).text("");
    });
    gameOver = false;
    moves = 0;
    $("#message p").text("");
  });
  $("#computer").click(function() {
    // resetGame();
    $("#versus").css("display", "none");
    compHuman();
  });
  $("#human").click(function() {
    $("#versus").css("display", "none");
    makeAMove();
  });
});
