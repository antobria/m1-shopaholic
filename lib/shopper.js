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

Shopper.prototype.draw = function(a,b) {
  this.ctx.drawImage(this.img, this.x, this.y, this.img.w, this.img.h);
  window.requestAnimationFrame(this.draw.bind(this), this.getCollition(a,b));
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

Shopper.prototype.getCollition = function(shopper, obstacles){
  console.log("entra");
  console.log(obstacles);
  if (obstacles !== undefined && obstacles.length !== 0) {
    var obstacle = obstacles[0].y;
    if (
      ((this.shopper.y + this.shopper.height) < (obstacle.y)) ||
      (this.shopper.y > (obstacle.y + obstacle.oh)) ||
      ((this.shopper.x + this.shopper.width) < obstacle.x) ||
      (this.shopper.x > (obstacle.x + obstacles.ow))
    ) {
      console.log(true);
      return true;
    } else {
      return false;
    }
  }
};
