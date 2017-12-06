function Game() {
  this.canvas = canvas;
  this.canvas.width = 850;
  this.canvas.height = 750;
  this.repeatedObstacles = [];
  this.gameBoard = new GameBoard();
  this.shopper = new Shopper();
  this.obstacles = [];
}

Game.prototype.start = function() {
  console.log('foo');
  window.requestAnimationFrame(this.update.bind(this));
};

Game.prototype.update = function(){
 this.gameBoard.draw();
 this.shopper.draw();
};

Game.prototype.startCreatingObstacles = function() {
  var that = this;
  setInterval(function () {
    var obstacle = new Obstacle();
    obstacle.draw();
    that.obstacles.push(obstacle);
  }, 2 * 1000);
};
