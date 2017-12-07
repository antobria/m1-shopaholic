function Obstacle() {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = this.getRandomObstacleXPosition();
  this.y = 50;
  this.img = new Image();
  this.imgArray = obstacleSourceImageArray;
  this.img.src = this.getRandomImage();
  this.ow = this.img.width;
  this.oh = this.img.height;
  this.speed = obstacleActualSpeed;
}


Obstacle.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 80, 80);
  this.y += this.speed;
};

Obstacle.prototype.getRandomImage = function() {
  var random = Math.floor(Math.random() * this.imgArray.length);
  return this.imgArray[random];
};

Obstacle.prototype.getRandomObstacleXPosition = function() {
  var random = Math.floor(Math.random() * (streetW + oh) + shopperCanMove);
  return random;
};
