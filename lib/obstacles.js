var obstacleSourceImageArray = [{
    source: "./img/obstacles/gap.png",
    price: 70
  },
  {
    source: "./img/obstacles/starbucks.png",
    price: 10
  },
  {
    source: "./img/obstacles/hm.png",
    price: 50
  },
  {
    source: "./img/obstacles/sephora.png",
    price: 30
  },
  {
    source: "./img/obstacles/statueofliberty.png",
    price: 20
  },
  {
    source: "./img/obstacles/uniqlo.png",
    price: 90
  },
  {
    source: "./img/obstacles/urban.png",
    price: 150
  }
];


function Obstacle(ctx,random ,defaultObstacleSpeed = 4) {
  this.ctx = ctx;
  this.x = this.getRandomObstacleXPosition();
  this.y = 0;
  this.img = new Image();
  this.imgArray = obstacleSourceImageArray;
  this.img.src = this.imgArray[random].source;
  this.img.price = this.imgArray[random].price;
  this.ow = 80;
  this.oh = 80;
  this.speed = defaultObstacleSpeed;
}


Obstacle.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, this.ow, this.oh);
  this.y += this.speed;
};

Obstacle.prototype.getRandomImage = function() {
  var random = Math.floor(Math.random() * this.imgArray.length);
  return random;
};

Obstacle.prototype.getRandomObstacleXPosition = function() {
  var shopperCanMove = 410;
  var streetW = 410;
  return Math.floor(Math.random() * (streetW - 80) + shopperCanMove);
};
