function Shopper() {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = 425;
  this.sx = 425;
  this.img = new Image();
  this.img.src = './img/shopper.jpg';
  this.img.w = 60;
  this.img.h = 150;
  this.dx = 20;
  this.y = this.canvas.height - this.img.h;
}

Shopper.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.img.w, this.img.h);
  window.requestAnimationFrame(this.draw.bind(this));
};

Shopper.prototype.moveLeft = function() {
  if (this.x > this.sx) {
    this.x -= this.dx;
  }
};

Shopper.prototype.moveRight = function() {
  if (this.x < (this.canvas.width - this.img.w)) {
  this.x += this.dx;
  }
};
