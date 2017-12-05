function Game() {
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.canvas.width = 850;
  this.canvas.height = 450;
  this.gameBoard = new GameBoard(this.canvas, this.ctx);
  this.shopper = new Shopper(this.canvas, this.ctx);
  this.obstacle = new Obstacle();
}

Game.prototype.start = function() {
  console.log('foo');
  window.requestAnimationFrame(this.update.bind(this));
};

Game.prototype.update = function(){
 this.gameBoard.draw();
 this.shopper.draw();
};
