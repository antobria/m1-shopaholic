function Game() {
  this.canvas = canvas;
  this.ctx = ctx;
  this.canvas.width = 850;
  this.canvas.height = 750;
  this.repeatedObstacles = [];
  this.gameBoard = new GameBoard();
  this.shopper = new Shopper();
  this.obstacles = [];
  this.budget = 1000;

  this.buy = 20;
}

Game.prototype.startCreatingObstacles = function() {
  var that = this;
  setInterval(function() {
    var obstacle = new Obstacle();
    obstacle.draw();
    that.obstacles.push(obstacle);
    if (that.obstacles.length > 5) {
      that.obstacles.shift();
    }
  }, 2 * 1000);
};

Game.prototype.start = function() {
  this.draw();
  this.startCreatingObstacles();
};

Game.prototype.gameOver = function () {
  this.canvas.restore();
};


Game.prototype.draw = function() {
  this.gameBoard.draw();
  this.gameBoard.drawBudget(this.budget);
  this.shopper.draw();
  for (i = 0; i < this.obstacles.length; i++) {
    this.obstacles[i].draw();
    if (this.shopper.getCollition(this.shopper, this.obstacles[i])) {
      this.obstacles.splice(i, 1);
      newBudget = this.budget -= this.obstacles[i].img.price;
      this.budget = newBudget;
      if(this.budget < 0){
        this.gameOver();
        console.error("You run out of money, go home!");
      }
    }
  }
  window.requestAnimationFrame(this.draw.bind(this));
};
