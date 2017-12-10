// GLOBAL CONFIG //
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// OBSTACLE CONFIG PANEL //
var obstaclesSpeed = 2;
var obstacleActualSpeed = (Math.random() + 0.5) * obstaclesSpeed;
var intialBudget = 1000;


var x = 410;
var y = 100;
var oh = 35;
var ow = 20;
// var x = Math.random() * (streetW + oh);
// var y = streetH;<
var obstacleSourceImageArray = [
  {source: "./img/obstacles/gap.png",
  price: 70},
  {source: "./img/obstacles/starbucks.png",
  price: 10},
  {source: "./img/obstacles/hm.png",
  price: 50},
  {source: "./img/obstacles/sephora.png",
  price: 30},
  {source: "./img/obstacles/statueofliberty.png",
  price: 20},
  {source: "./img/obstacles/uniqlo.png",
  price: 90},
  {source: "./img/obstacles/urban.png",
  price: 150}
];


// BOARD CONFIG PANEL //
var backgroundSpeed = 2;
var backgroundActualSpeed = (Math.random() + 0.5) * backgroundSpeed;

var shopperCanMove = 410;
var streetW = 410;
var streetH = 0;
var oy = streetH;
