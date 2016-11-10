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
      var board = createBoard();
      var player = checkWinner(board);
      displayResults(player);
    }
  }
});

function displayResults(player) {
  var results = "";
  if (player !== null) {
    if (!player) {
      results = "It's a tie!";
    } else {
      results = player + " wins!";
    }
    message.textContent = results;
    gameOver = true;
  }
}

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

function createBoard() {
  var board = {
    0: [],
    1: [],
    2: []
  }

  for(var i = 0; i < 3; i++) {
    var currRow = document.querySelectorAll('#row' + i + ' td');
    currRow.forEach(function(td) {
      board[i].push(td.textContent);
    });
  }
  return board;
}

function checkWinner(board) {
  for(var i = 0; i <= 2; i++) {
    // check rows
    if ((board[i][0] === board[i][1]) &&
      (board[i][1] === board[i][2]) &&
      (board[i][2] !== "")) {
        return board[i][0];
      // check columns
    } else if ((board[0][i] === board[1][i]) &&
      (board[1][i] === board[2][i]) &&
      (board[2][i] !== "")) {
      return board[1][i];
    }
  }
  // check diagonals
  if ((board[0][0] === board[1][1]) &&
    (board[0][0] === board[2][2]) &&
    (board[0][0] !== "")) {
      return board[0][0];
  } else if ((board[0][2] === board[1][1]) &&
    (board[0][2] === board[2][0]) &&
    (board[0][2] !== "")) {
      return board[0][2];
  }
  if (moves === 9) {
    return false;
  }
  return null;
}
