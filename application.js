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
  else if(e.keyCode == 76) {
    changeClass = 'blue'
  };
  }
  else if(e.keyCode == 76) {
    changeClass = 'blue'
  };
  }
  else if(e.keyCode == 76) {
    changeClass = 'blue'
  };
  }
  else if(e.keyCode == 76) {
    changeClass = 'blue'
  };
});

  $(document).on('mouseover', '.blank', function (e) {
    var $link = $(this);
    $link.addClass(changeClass);
  });


// function bindListeners() {
//   document.body.onkeyup = function(e) {
//     if(e.keyCode == 13) {

//     }
//   }
// }

// as mouse goes over divs, classes are added