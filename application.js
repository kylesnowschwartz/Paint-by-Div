$(document).ready(function() {
    var appendClass = ''
    var changeClass = ''

  $('#grid').on('mousemove', function(e){

    var mouseX = e.pageX
    var mouseY = e.pageY

    $div = $("<div class='blank'></div>")

    $div.addClass(changeClass);
    $div.addClass(appendClass);

    $($div).css({'top':mouseY,
                 'left':mouseX,
                 'position':'fixed'});

    $('#canvas-div').append($div);

  });

    $(document).on('mouseover','.blank',function(){
        $( this ).fadeTo( "slow", 0.20 );
     });


  $(document).on("keydown", function(e) {
    $lastDiv = $('#canvas-div').children().last()

    if(e.keyCode == 65) {
      changeClass = 'red'
    }
    else if(e.keyCode == 83) {
      changeClass = 'blue'
    }
    else if(e.keyCode == 68) {
      if ($lastDiv.hasClass(appendClass)) {
        appendClass = ''
    } else {
        appendClass = 'circle';
    }

    }
    else if(e.keyCode == 87) {
      changeClass = 'joshua'
    }
  });

});






  //   $(document).on('mousemove', '.blank', function (e) {
  //     var $div = $(this);
  //     $div.removeClass();
  //     $div.addClass('blank')
  //     $div.addClass(changeClass);
  //     $div.addClass(appendClass);
  //     // $('rainbow').html(getColor(251));
  //   });



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
