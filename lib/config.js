// GLOBAL CONFIG //
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// OBSTACLE CONFIG PANEL //
var obstaclesSpeed = 2;
var obstacleActualSpeed = (Math.random() + 0.5) * obstaclesSpeed;

// (410, 0, 200, 30, 2)
var x = 410;
var y = 100;
var oh = 35;
var ow = 20;
// var x = Math.random() * (streetW + oh);
// var y = streetH;<
var obstacleSourceImageArray = [
  "./img/obstacles/gap.png",
  "./img/obstacles/starbucks.png",
  "./img/obstacles/hm.png",
  "./img/obstacles/sephora.png",
  "./img/obstacles/statueofliberty.png",
  "./img/obstacles/uniqlo.png",
  "./img/obstacles/urban.png"
];


// BOARD CONFIG PANEL //
var backgroundSpeed = 2;
var backgroundActualSpeed = (Math.random() + 0.5) * backgroundSpeed;

var shopperCanMove = 410;
var streetW = 410;
var streetH = 0;
var oh;
var ow;
var oy = streetH;
