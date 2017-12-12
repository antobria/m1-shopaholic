window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    var game = new Game();
    game.start();
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
};
