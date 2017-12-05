// boundaries
var sx = 425;

function Shopper(canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 425;
  this.y = 250;
  this.img = new Image();
  this.img.src = './img/shopper.jpg';
  this.img.w = 80;
  this.img.h = 200;
  this.dx = 20;
}

Shopper.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.img.w, this.img.h);
  window.requestAnimationFrame(this.draw.bind(this));
};

Shopper.prototype.moveLeft = function() {
  this.x -= this.dx;
};

Shopper.prototype.moveRight = function() {
  this.x += this.dx;
};

Shopper.prototype.animate = function() {
  requestAnimationFrame(animate);
  c.clearReact();
  c.shopper(this.x, this.y, this.w, this.h);
  this.x = +1;
};
