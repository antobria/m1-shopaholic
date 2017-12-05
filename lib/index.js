window.onload = function() {
  var game = new Game();

  document.getElementById("start-button").onclick = function() {
    game.start();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        game.shopper.moveLeft();
        break;
      case 39:
        game.shopper.moveRight();
        break;
    }
  };
};
