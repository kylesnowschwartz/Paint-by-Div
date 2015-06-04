function Cell () {
  this.$element = $("<div class='blank'></div>");
}

function Easel (width, height) {
  this.width = width;
  this.height = height;
  this.grid = this.generateGrid();
}

Easel.prototype.generateGrid = function () {

  var grid = [];
  for (var r = 0; r < Math.floor(this.height / 8) ; r++) {
    var row = [];
    for (var c = 0; c < Math.floor(this.width / 8); c++) {
      row.push(new Cell());
    }
    grid.push(row);
  }
  return grid;
};

Easel.prototype.renderGrid = function () {
  for (var r = 0; r < Math.floor(this.height / 8); r++) {
    var $row = $("<div class='row'></div>");
    for (var c = 0; c < Math.floor(this.width / 8); c++) {
      var $cell = this.grid[r][c].$element;
      $row.append($cell);
    }
    $('#grid').append($row);
  }
};



var changeClass = ''
$(document).on("keydown", function(e) {

  if(e.keyCode == 65) {
    changeClass = 'red'
  }
  else if(e.keyCode == 83) {
    changeClass = 'blue'
  }
  else if(e.keyCode == 68) {
    changeClass = 'circle'
  }
  else if(e.keyCode == 87) {
    changeClass = 'joshua'
  }
  else if(e.keyCode == 82) {
    changeClass = 'rainbow'
  };
});

  $(document).on('mouseover', '.blank', function (e) {
    var $link = $(this);
    $link.addClass(changeClass);
  });

  function rainbow(noOfColors){
    frequency=5/noOfColors;
    for (var i = 0; i < noOfColors; ++i){
      r =   Math.sin(frequency*i + 0) * (127) + 128;
      g =   Math.sin(frequency*i + 2) * (127) + 128;
      b =   Math.sin(frequency*i + 4) * (127) + 128;
      div = $("<div class='rainbow'></div>");
      div.replace("{r}",Math.floor(r));
      div.replace("{g}",Math.floor(g));
      div.replace("{b}",Math.floor(b));
    }
  }


  $(document).on('keydown',function(e){
    if (e.keyCode == 82){
      var $link = $(this);
      $link.removeClass('red');
      $link.addClass('rainbow')
      $(document).on('mouseover','.ranbow',function(){
        $( this ).fadeTo( "slow", 0.20 );
      });
    }
  });

