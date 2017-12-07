function Game() {
  this.canvas = canvas;
  this.canvas.width = 850;
  this.canvas.height = 750;
  this.repeatedObstacles = [];
  this.gameBoard = new GameBoard();
  this.shopper = new Shopper();
  this.obstacles = [];
}

Game.prototype.startCreatingObstacles = function() {
  var that = this;
  setInterval(function() {
    var obstacle = new Obstacle();
    obstacle.draw();
    that.obstacles.push(obstacle);
    }, 2 * 1000);
  if (this.obstacles.length > 5) {
    this.obstacles.shift();
  }
};

Game.prototype.start = function() {
  this.draw();
  this.startCreatingObstacles();
};


Game.prototype.draw = function() {
this.gameBoard.draw();
this.shopper.draw();
for(i=0; i<this.obstacles.length; i++) {
  this.obstacles[i].draw();
  this.shopper.getCollition(this.shopper, this.obstacles[i]);
}

window.requestAnimationFrame(this.draw.bind(this));

};
