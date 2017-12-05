
var streetW = 410;
var streetH = 0;
var oh;
var ow;
var ox = (Math.random() * (streetW + oh)) + 410;
var oy = streetH;
var speed = (Math.random() + 0.5) * 2;


function GameBoard(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = "./img/newYork.png";
  this.imgW = this.canvas.width;
  this.imgH = this.canvas.height;
  this.img.onload = (function() {
  }).bind(this);

}

GameBoard.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.img.width, this.img.height);
  if (this.y > this.canvas.height) this.y = 0;
  this.ctx.drawImage(this.img, this.x, this.y, this.imgW, this.imgH);
  this.ctx.drawImage(this.img, this.x, this.y - this.imgH, this.imgW, this.imgH);

  this.y += 2;

  window.requestAnimationFrame(this.draw.bind(this));
};
