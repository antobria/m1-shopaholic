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
  this.ctx.save();
  this.ctx.drawImage(this.img, this.x, this.y, this.img.w, this.img.h);
  this.ctx.restore();
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

Shopper.prototype.getCollition = function(shop, b){
  // if (b !== undefined && b.length !== 0) {
    if (
      ((shop.y + shop.height) <= (b.y)) ||
      (shop.y >= (b.y + b.oh)) ||
      ((shop.x + shop.width) <= b.x) ||
      (shop.x >= (b.x + b.ow))
    ) {
      collide = true;
      console.log("true");
    } else {
      console.log("false");
      return false;
    }
  // }
};
