var message = document.getElementById('message');
var board = document.getElementById('board');
var resetBtn = document.getElementById('reset');
var allTds = document.querySelectorAll('td');
var gameOver = false;
var player = 'Player 1';
var curr_turn = 'O';
var moves = 0;

board.addEventListener("click", function(event) {
  if (event.target.matches("td") && !gameOver) {
    if (event.target.textContent === "") {
      if (curr_turn === 'X') {
        event.target.textContent = curr_turn;
        curr_turn = 'O';
        player = 'Player 2';
      } else {
        event.target.textContent = curr_turn;
        curr_turn = 'X';
        player = 'Player 1';
      }
      moves++;
      checkWinner();
    }
  }
});

resetBtn.addEventListener("click", function() {
  gameOver = false;
  allTds.forEach(function(td) {
    td.textContent = "";
  });
  message.textContent = "";
  curr_turn = 'O';
  player = 'Player 1';
  moves = 0;
});

function checkWinner() {
  var coord = [];
  allTds.forEach(function(td) {
    coord.push(td.textContent);
  });
  if (coord[4] !== "") {
    if ((coord[3] ===  coord[4] && coord[3] === coord[5]) ||
       (coord[0] ===  coord[4] && coord[0] === coord[8]) ||
       (coord[2] ===  coord[4] && coord[2] === coord[6]) ||
       (coord[1] ===  coord[4] && coord[1] === coord[7])) {
      message.textContent = player + " wins!!!";
      gameOver = true;
    }
  }
  if (coord[0] !== "") {
    if ((coord[0] ===  coord[1] && coord[0] === coord[2]) ||
       (coord[0] ===  coord[3] && coord[0] === coord[6])) {
      console.log(2);
      message.textContent = player + " wins!!!";
      gameOver = true;
    }
  }
  if (coord[8] !== "") {
    if ((coord[6] ===  coord[7] && coord[6] === coord[8]) ||
       (coord[2] ===  coord[5] && coord[2] === coord[8])) {
      console.log(3);
      message.textContent = player + " wins!!!";
      gameOver = true;
    }
  }
  if (moves === 9) {
    message.textContent = "It's a tie!";
    gameOver = true;
  }
}
