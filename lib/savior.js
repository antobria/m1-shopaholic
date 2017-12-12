function Savior(ctx, defaultSaviorSpeed = 5) {
  this.ctx = ctx;
  this.x = this.getRandomSaviorXPosition();
  this.y = 0;
  this.img = new Image();
  this.img.src = './img/papa.png';
  this.price = 300;
  this.ow = 90;
  this.oh = 120;
  this.speed = defaultSaviorSpeed;
}


Savior.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.ow, this.oh);
  this.y += this.speed;
};

Savior.prototype.getRandomSaviorXPosition = function() {
  var shopperCanMove = 410;
  var streetW = 410;
  return Math.floor(Math.random() * (streetW - 80) + shopperCanMove);
};
