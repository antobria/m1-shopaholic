window.onload = function() {
  var gameBoard = new GameBoard();

  document.getElementById("start-button").onclick = function() {
      gameBoard.start();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: gameBoard.shopper.moveLeft(); break;
      case 39: gameBoard.shopper.moveRight(); break;
    }
  };
};
