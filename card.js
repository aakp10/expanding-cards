var $cell = $('.card');

//open and close card when clicked on card
$cell.find('.cardInner').click(function() {

  var $thisCell = $(this).closest('.card');

  if ($thisCell.hasClass('isColl')) {
    $cell.not($thisCell).addClass('isInactive');
    $thisCell.removeClass('isColl').addClass('isExp');
    
    /*if ($cell.not($thisCell).hasClass('isInactive')) {
      //do nothing
    } else {
      $cell.not($thisCell).addClass('isInactive');
    }*/

  } else {
    $thisCell.removeClass('isExp').addClass('isColl');
    $cell.not($thisCell).removeClass('isInactive');
  }
});

//close card when click on cross
$cell.find('.js-collapser').click(function() {

  var $thisCell = $(this).closest('.card');

  $thisCell.removeClass('isExp').addClass('isColl');
  $cell.not($thisCell).removeClass('isInactive');

});