$(document).ready(function() {
  
  var descMinHeight = 80;
  var descbox = $('.descbox');
  var desc = $('.desc');

  // show more button if desc too long
  if (descbox.height() > desc.height()) {
    $('.btn-more').show();
  }
  
  // When clicking more/less button
  $('.btn-more').click(function() {
    
    var fullHeight = $('.descbox').height();

    if ($(this).hasClass('expand')) {
      // contract
      $('.desc').animate({'height': descMinHeight}, 'slow');
    }
    else {
      // expand 
      $('.desc').css({'height': descMinHeight, 'max-height': 'none'}).animate({'height': fullHeight}, 'slow');
    }

    $(this).toggleClass('expand');
    return false;
  });

});