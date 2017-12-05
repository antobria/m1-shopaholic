// (410, 0, 200, 30, 2)
// var streetW = 410;
// var streetH = 0;
// var oh ;
// var ow;
// var ox = Math.random()* (streetW + oh);
// var oy = streetH;
// var speed = (Math.random() + 0.5)*2;


function Obstacle (ox, oy, oh, ow, speed){
  this.canvas = document.getElementById("canvas");
  this.context = this.canvas.getContext("2d");
  this.ox = ox;
  this.oy = oy;
  this.oh = oh;
  this.ow = ow;
  this.speed = speed;
}

Obstacle.prototype.draw = function (){
  this.context.fillStyle = "red";
  this.context.fillRect(this.ox, this.oy, this.oh, this.ow, this.speed);
  this.oy += this.speed;

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
