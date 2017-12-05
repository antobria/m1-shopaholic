// boundaries
var sx = 425;

function Shopper() {
  this.x = 425;
  this.y = 250;
  this.img = new Image();
  this.img.src = './img/shopper.jpg';
  this.img.w = 80;
  this.img.h = 200;
  this.dx = 20;
  this.canvas = document.getElementById("canvas");
}

Shopper.prototype.draw = function (context){
  context.drawImage (this.img, this.x, this.y,this.img.w, this.img.h );
};

Shopper.prototype.moveLeft = function(){
  this.x -= this.dx;
};

Shopper.prototype.moveRight = function(){
  this.x += this.dx;
};

Shopper.prototype.animate = function () {
  requestAnimationFrame(animate);
  c.clearReact();
  c.shopper(this.x, this.y, this.w, this.h);
  x =+ 1;
};
