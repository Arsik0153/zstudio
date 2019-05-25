var currentX = '';
var currentY = '';
$(document).mousemove(function(e) {
  if (currentX == '') currentX = e.pageX;
  var xdiff = e.pageX - currentX;
  currentX = e.pageX;
  if (currentY == '') currentY = e.pageY;
  var ydiff = e.pageY - currentY;
  currentY = e.pageY;
  $('.lights img').each(function(i, el) {
    var movementConstant = el.getAttribute("data-parallax");
    var movement = (i + 1) * (xdiff * movementConstant);
    var movementy = (i + 1) * (ydiff * movementConstant);
    var newX = $(el).position().left + movement;
    var newY = $(el).position().top + movementy;
    $(el).css('left', newX + 'px');
    $(el).css('top', newY + 'px');
  });
});