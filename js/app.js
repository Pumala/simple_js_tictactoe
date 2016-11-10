$(document).ready(function() {
  var isPlayer1 = true;
  var $td = $("td");
  var gameOver = false;
  var moves = 0;

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
      // $("#message p").text("This spot is already taken!").fadeOut(2000);
    checkLogic(isPlayer1);
  });
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
      if (!isPlayer1) {
        $("#message p").text("Player 1 Wins!!");
      } else {
        $("#message p").text("Player 2 Wins!!");
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
    vsComp();
  });
  $("#human").click(function() {
    $("#versus").css("display", "none");
  });
  function vsComp() {

  }
});






  // function checkLogic(isPlayer1) {
  //   var coord = $("td").map(function() {
  //     return $(this).text()
  //   });
  //   if ((coord[0] === coord[1] && coord[0] === coord[2]) ||
  //      (coord[3] === coord[4] && coord[3] === coord[5]) ||
  //      (coord[6] === coord[7] && coord[6] === coord[8]) ||
  //      (coord[0] === coord[4] && coord[0] === coord[8]) ||
  //      (coord[2] === coord[4] && coord[2] === coord[6]) ||
  //      (coord[0] === coord[3] && coord[0] === coord[6]) ||
  //      (coord[1] === coord[4] && coord[1] === coord[7]) ||
  //      (coord[2] === coord[5] && coord[2] === coord[8])) {
  //     if (!isPlayer1) {
  //       $("#message p").text("Player 1 Wins!!");
  //     } else {
  //       $("#message p").text("Player 2 Wins!!");
  //     }
  //   }
  // }
  // function checkLogic() {
  //   for (var i = 0; i < 3; i++) {
  //     if ($("#row" + i + " td")[0] === $("#row" + i + " td")[1]) &&
  //        ($("#row" + i + " td")[1] === $("#row" + i + " td")[2]) &&
  //        ($("#row" + i + " td")[2].text() !== "") &&
  //     {
  //
  //     }
  //   }
  // }
  // function checkLogic() {
  //   if ($td[4].text() !== "") {
  //     if (($td[3] === $td[4] && $td[3] == $[5]) ||
  //        (($td[0] === $td[4] && $td[0] == $[8]) ||
  //        (($td[2] === $td[4] && $td[2] == $[6]) ||
  //        (($td[1] === $td[4] && $td[1] == $[7]) ||
  //       {
  //
  //     }
  //   }
  // }

// if ($("td")[0] === $("td")[1]) {
//   console.log('ok');
// } else {
//   console.log('nope');
// }
