function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = canvas.getContext("2d");
  this.canvas.width = 850;
  this.canvas.height = 750;
  this.repeatedObstacles = [];
  this.gameBoard = new GameBoard(this.ctx, this.canvas.width, this.canvas.height);
  this.shopper = new Shopper(this.ctx, this.canvas.width, this.canvas.height);
  this.obstacles = [];
  this.obstaclesEx = [];
  this.saviors = [];
  this.budget = 1000;

  this.buy = 20;
}

Game.prototype.startCreatingObstacles = function() {
  var that = this;
  setInterval(function() {
    var random  = Math.floor(Math.random() * 9);
    var obstacle = new Obstacle(that.ctx, random);
    obstacle.draw();
    that.obstacles.push(obstacle);
    if (that.obstacles.length > 5) {
      that.obstacles.shift();
    }
  }, 2 * 1000);
};

Game.prototype.startCreatingObstaclesEx = function() {
  var that = this;
  setInterval(function() {
    var random  = Math.floor(Math.random() * 2);
    var obstacleEx = new ObstacleEx(that.ctx, random);
    obstacleEx.draw();
    that.obstaclesEx.push(obstacleEx);
    if (that.obstaclesEx.length > 5) {
      that.obstaclesEx.shift();
    }
  }, 8 * 1000);
};

Game.prototype.startCreatingSaviors = function() {
  var that = this;
  setInterval(function() {
    var savior = new Savior(that.ctx);
    savior.draw();
    that.saviors.push(savior);
    if (that.saviors.length > 5) {
      that.saviors.shift();
    }
  }, 6 * 1000);
  };

Game.prototype.start = function() {
  this.draw();
  this.startCreatingObstacles();
  this.startCreatingObstaclesEx();
  this.startCreatingSaviors();
};

Game.prototype.gameOver = function () {
  this.canvas.restore();
};

Game.prototype.draw = function() {
  this.gameBoard.draw();
  this.gameBoard.drawBudget(this.budget);
  this.shopper.draw();
  for (i = 0; i < this.saviors.length; i++) {
    this.saviors[i].draw();
    if (this.shopper.getCollition(this.shopper, this.saviors[i])) {
      this.saviors.splice(i, 1);
      newBudget = this.budget += 300;
      this.budget = newBudget;
    }
  }
  for (i = 0; i < this.obstacles.length; i++) {
    this.obstacles[i].draw();
    if (this.shopper.getCollition(this.shopper, this.obstacles[i])) {
      this.obstacles.splice(i, 1);
      newBudget = this.budget -= this.obstacles[i].img.price;
      this.budget = newBudget;
      if(this.budget < 0){
        alert("You run out of money, go home!");
        document.location.reload();
      }
    }
  }
  for (i = 0; i < this.obstaclesEx.length; i++) {
    this.obstaclesEx[i].draw();
    if (this.shopper.getCollition(this.shopper, this.obstaclesEx[i])) {
      this.obstaclesEx.splice(i, 1);
      newBudget = this.budget -= this.obstaclesEx[i].img.price;
      this.budget = newBudget;
      if(this.budget < 0){
        alert("You run out of money, go home!");
        document.location.reload();
      }
    }
  }
  window.requestAnimationFrame(this.draw.bind(this));
};
