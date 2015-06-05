$(document).ready(function() {

function Cell () {
  this.div = $("<div class='blank'></div>");
}

$('#grid').mousemove(function(e){
  var mouseX = e.pageX
  var mouseY = e.pageY

  $div = $("<div class='blank'></div>");
  $div.addClass(changeClass);
  $div.addClass(appendClass);

  $($div).css({'top':mouseY,
            'left':mouseX,
            'position':'fixed'});

  $('#canvas-div').append($div);

});

var appendClass = ''
var changeClass = ''
$(document).on("keydown", function(e) {

  if(e.keyCode == 65) {
    changeClass = 'red'
  }
  else if(e.keyCode == 83) {
    changeClass = 'blue'
  }
  else if(e.keyCode == 68) {
    appendClass = 'circle'
  }
  else if(e.keyCode == 87) {
    changeClass = 'joshua'
  }
  else if(e.keyCode == 82) {
    changeClass = 'rainbow'
  };

});

//   $(document).on('mousemove', '.blank', function (e) {
//     var $div = $(this);
//     $div.removeClass();
//     $div.addClass('blank')
//     $div.addClass(changeClass);
//     $div.addClass(appendClass);
//     // $('rainbow').html(getColor(251));
//   });

//     function getColor(noOfColors){
//         htmlString ="";
//         frequency=5/noOfColors;
//         for (var i = 0; i < noOfColors; ++i){
//             r =   Math.sin(frequency*i + 0) * (127) + 128;
//             g =   Math.sin(frequency*i + 2) * (127) + 128;
//             b =   Math.sin(frequency*i + 4) * (127) + 128;
//             div='<div class="color" style="background-color:rgb({r},{g},{b});">  </div>';
//             div=div.replace("{r}",Math.floor(r));
//             div=div.replace("{g}",Math.floor(g));
//             div=div.replace("{b}",Math.floor(b));
//             htmlString  += div;
//         }
//         return htmlString ;
//     }
//     $('#rainbow').on('mouseover','.color',function(){
//         $( this ).fadeTo( "slow", 0.20 );
//      });

//     $('#rainbow').html(getColor(251));


//     setInterval(function() {
//       $('.color').fadeTo("slow", 1);
//     }, 10000);


// function Easel (width, height) {
//   this.width = width;
//   this.height = height;
//   this.grid = this.generateGrid();
// }

// Easel.prototype.generateGrid = function () {

//   var grid = [];
//   for (var r = 0; r < Math.floor(this.height / 8) ; r++) {
//     var row = [];
//     for (var c = 0; c < Math.floor(this.width / 8); c++) {
//       row.push(new Cell());
//     }
//     grid.push(row);
//   }
//   return grid;
// };

// Easel.prototype.renderGrid = function () {
//   for (var r = 0; r < Math.floor(this.height / 8); r++) {
//     var $row = $("<div class='row'></div>");
//     for (var c = 0; c < Math.floor(this.width / 8); c++) {
//       var $cell = this.grid[r][c].$element;
//       $row.append($cell);
//     }
//     $('#grid').append($row);
//   }
// };

});
