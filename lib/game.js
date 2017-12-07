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
    
    console.log(that.obstacles);
  }, 2 * 1000);
};

//Game.prototype.getCollition = function(shopper, obstacles){
Game.prototype.getCollition = function(){
  console.log("ENTRO");
  console.log("OBSTACLES", this.obstacles);
  console.log(this.shopper);
  if (
    ((this.shopper.y + this.shopper.height) < (this.obstacles.y)) ||
    (this.shopper.y > (this.obstacles.y + this.obstacles.oh)) ||
    ((this.shopper.x + this.shopper.width) < this.obstacles.x) ||
    (this.shopper.x > (this.obstacles.x + this.obstacles.ow))
    ) {
  console.log("true");
  return true;
  } else {
    console.log("FALSE");
  return false;
  }
};
Game.prototype.update = function() {
  console.log("UPD");
  var a = this.obstacles;
  this.gameBoard.draw();
  this.shopper.draw(this.shopper, a);
  //this.getCollition();
};

Game.prototype.start = function() {
  this.update();
};
