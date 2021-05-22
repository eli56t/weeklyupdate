$('.image_cover').each(function() {
  const imageWidth = $().find('img').width();
  const imageheight = $().find('img').height();
  if (imageWidth > imageheight) {
    $().addClass('landscape');
  } else {
    $().addClass('potrait');
  }
});