function Cell () {
  this.$element = $("<div class='blank'></div>");
}

function Easel (size) {
  this.size = size;
  this.grid = this.generateGrid();
}

Easel.prototype.generateGrid = function () {
  var grid = [];
  for (var r = 0; r < this.size; r++) {
    var row = [];
    for (var c = 0; c < this.size; c++) {
      row.push(new Cell());
    }
    grid.push(row);
  }
  return grid;
};

Easel.prototype.renderGrid = function () {
  for (var r = 0; r < this.size; r++) {
    var $row = $("<div class='row'></div>");
    for (var c = 0; c < this.size; c++) {
      var $cell = this.grid[r][c].$element;
      $row.append($cell);
    }
    $('#grid').append($row);
  }
};