var gSize = 20;

$(document).ready(function(){
  createGrid(gSize);

  //change ePixel color on mouseenter
  $(document).on('mouseenter','.e-pixel',function(){
    $(this).css({'background-color': 'black'})
  })

  //Clear grid when cButton is clicked
  $('#cButton').click(clearGrid);

  //update gSize and call clearGrid when rGButton is clicked
  $('#rGButton').click(function(){
    gSize = $('#gSizeD').val();
    clearGrid();
  });
});

//Create a grid of size gSize
function createGrid(gSize){
  var pSize = 375/gSize + 'px';
  var $rDiv = $('<div class="e-column"></div>');
  var $ePixel = $('<div class="e-pixel"></div>');
  $rDiv.css({'height' : pSize});
  $ePixel.css({'height' : pSize,
               'width' : pSize,
               'display' : 'inline-block'});

  //Append individual ePixel clones to rDiv
  for(i=0; i < gSize; i++)
    $rDiv.append($ePixel.clone());

  //Append rDiv clones to screen div
  for(i=0; i < gSize; i++)
    $('#screen').append($rDiv.clone());
}

//Pretty self explanatory
function clearGrid(){
  $('.e-column').remove();
  createGrid(gSize);
}
