function GameBoard() {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = "./img/newYork.png";
  this.imgW = this.canvas.width;
  this.imgH = this.canvas.height;
  this.score = 1000;
  this.buy = 20;
  this.backgroundSpeed = backgroundActualSpeed;
  this.img.onload = (function() {
  }).bind(this);
}

GameBoard.prototype.draw = function() {
  this.ctx.save();
  if (this.y > this.canvas.height) this.y = 0;
  this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
  this.ctx.drawImage(this.img, this.x, this.y - this.imgH, this.imgW, this.imgH);
  this.y += 2;
  this.ctx.restore();
};

GameBoard.prototype.drawBudget = function(budget) {
  this.ctx.save();
  this.ctx.font = '48px calibri';
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Budget: $" + budget, 10, 50, 200);
  this.ctx.restore();
};
