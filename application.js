function Cell () {
  this.$element = $("<div class='blank'></div>");
}

function Easel (width, height) {
  this.width = width;
  this.height = height;
  this.grid = this.generateGrid();
}

Easel.prototype.generateGrid = function () {
  // $windowHeight = $(window).height();
  // $windowWidth = $(window).width();
  var grid = [];
  for (var r = 0; r < (this.height / 9) ; r++) {
    var row = [];
    for (var c = 0; c < (this.width / 8); c++) {
      row.push(new Cell());
    }
    grid.push(row);
  }
  return grid;
};

Easel.prototype.renderGrid = function () {
  for (var r = 0; r < (this.height / 9); r++) {
    var $row = $("<div class='row'></div>");
    for (var c = 0; c < (this.width / 8); c++) {
      console.log (this.grid[r][c])
      // console.log(this.grid)
      var $cell = this.grid[r][c].$element;
      $row.append($cell);
    }
    $('#grid').append($row);
  }
};

  $(document).on('mouseover', '.blank', function (e) {
    console.log("log")
    var $link = $(this);
    $link.addClass('red');
  });

