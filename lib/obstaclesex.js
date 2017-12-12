var obstacleExSourceImageArray = [
  {
    source: "./img/obstacles/iphonex.png",
    price: 900
  },
  {
    source: "./img/obstacles/mac.png",
    price: 900
  },
];


function ObstacleEx(ctx,random ,defaultObstacleExSpeed = 4) {
  this.ctx = ctx;
  this.x = this.getRandomObstacleExXPosition();
  this.y = 0;
  this.img = new Image();
  this.imgArray = obstacleExSourceImageArray;
  this.img.src = this.imgArray[random].source;
  this.img.price = this.imgArray[random].price;
  this.ow = 80;
  this.oh = 80;
  this.speed = defaultObstacleExSpeed;
}


ObstacleEx.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.ow, this.oh);
  this.y += this.speed;
};

ObstacleEx.prototype.getRandomImage = function() {
  var random = Math.floor(Math.random() * this.imgArray.length);
  return random;
};

ObstacleEx.prototype.getRandomObstacleExXPosition = function() {
  var shopperCanMove = 410;
  var streetW = 410;
  return Math.floor(Math.random() * (streetW - 80) + shopperCanMove);
};
