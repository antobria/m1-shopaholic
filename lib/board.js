var x = 0;
var y = 0;

var clearX = 0;
var clearY= 0;
var streetW = 410;
var streetH = 0;
var oh ;
var ow;
var ox = (Math.random()* (streetW + oh))+410;
var oy = streetH;
var speed = (Math.random() + 0.5)*2;


function GameBoard() {
  this.canvas = document.getElementById("canvas");
  this.canvas.width = 850;
  this.canvas.height = 450;
  this.context = this.canvas.getContext("2d");
  this.img = new Image();
  this.img.src = "./img/newYork.png";
  this.imgW = this.canvas.width;
  this.imgH = this.canvas.height;
  this.img.onload = (function() {
    clearX = this.img.width;
    clearY = this.img.height;
  }).bind(this);
  this.shopper = new Shopper();
  this.obstacle = new Obstacle (ox, oy, 200, 30, speed);

}


GameBoard.prototype.start = function () {
  console.log('foo');
  window.requestAnimationFrame(this.draw.bind(this));
  // set interval y el update

};
//
GameBoard.prototype.draw = function () {
  this.context.clearRect(0, 0, clearX, clearY);

  if (y > this.canvas.height) y = 0;
  this.context.drawImage(this.img, x, y, this.imgW, this.imgH);
  this.context.drawImage(this.img, x, y-this.imgH, this.imgW, this.imgH);
  this.shopper.draw(this.context);
  this.obstacle.draw();


  y += 2;

  window.requestAnimationFrame(this.draw.bind(this));
};
