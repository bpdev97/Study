var gSize = 20;

$(document).ready(function(){
  createGrid(gSize);
  $(document).on('mouseenter','.e-pixel',function(event){
    $(this).css({'background-color': 'black'})
  })
});

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
