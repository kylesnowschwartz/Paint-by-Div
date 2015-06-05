$(document).ready(function(){


context = document.getElementById('canvas').getContext("2d");
context.canvas.width = window.innerWidth / 2;
context.canvas.height = window.innerHeight;

var colorPurple = "#cb3594";
var colorGreen = "#659b41";
var colorYellow = "#ffcf33";
var colorBrown = "#986928";
var colorRed = "#B20000";


var curColor = colorPurple;
var clickColor = new Array();

$(document).on("keydown", function(e) {


  if(e.keyCode == 76) {
   curColor = colorRed
  }
  else if(e.keyCode == 73) {
   curColor = colorYellow

 }
else if(e.keyCode == 75) {

     var flash = function () {
       if(flashStep == 1) {
        console.log('log1')
         $('#grid, #canvas').css('background-color', "#B20000");
         flashStep = 2;
       } else {
        console.log('log2')
         $('#grid, #canvas').css('background-color', "#FFFF66");
         flashStep = 1;
       }
     }
     var flashStep = 1;
     var task = window.setInterval(flash, 500);

     var stop = function () {
       window.clearInterval(task)
       $('#grid, #canvas').css('background-color', "#faebd7");
     }
     window.setTimeout(stop, 5000)
 }


});



$('#canvas').on("mousedown",function(e){
  var audio = $(".audiofile audio")[0];
  audio.play();
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;

  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
});

$('#canvas').mouseup(function(){
  console.log("fg")
  var audio = $(".audiofile audio")[0];
  audio.pause();
  paint = false;
});


$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

$('#canvas').mouseup(function(e){
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

  context.lineJoin = "round";
  context.lineWidth = 5;

  for(var i=0; i < clickX.length; i++) {
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.stroke();
  };
};


});


