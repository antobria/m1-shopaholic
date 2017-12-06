function Obstacle() {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = this.getRandomObstacleXPosition();
  this.y = 0;
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
  window.requestAnimationFrame(this.draw.bind(this));
};

Obstacle.prototype.animate = function() {
  requestAnimationFrame(animate);
  ctx.obstacle(this.x, this.y, this.w, this.h);
  this.x = +1;
};

Obstacle.prototype.getRandomImage = function() {
  var random = Math.floor(Math.random() * this.imgArray.length);
  return this.imgArray[random];
};

Obstacle.prototype.getRandomObstacleXPosition = function() {
  var random = Math.floor(Math.random() * (streetW + oh) + shopperCanMove);
  return random;
};

// var obstacleArray = [];
//
// for(var i = 0; i < 50; i++){
//   var radius = 30;
//   var x = Math.random()* (innerWidth - radius*2);
//   var y = Math.random()* (innerHeight - radius*2);
//   var dx = (Math.random() - 0.5)*7;
//   var dy = (Math.random() - 0.5)*7;
//   circleArray.push(new Circle(x, y, dx, dy, radius));
// }
