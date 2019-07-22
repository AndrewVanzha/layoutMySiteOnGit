// https://bootstrapcreative.com/resources/bootstrap-4-css-classes-index/

$('.carousel').carousel({
  interval: 3000
})

var windowWidth;
var numPic = 3;
windowWidth = $(window).width();
if (windowWidth < 1250 && windowWidth > 981) {
  numPic = 2;
} else if (windowWidth < 981) {
  numPic = 1;
} else {
  numPic = 3;
}

function setLeftEdgePopupMenu() { // управление левым краем всплывающего меню
  windowWidth = $(window).width();
  if (windowWidth <= 1250) {
    var el = $('.left-header-block');
    var varOffset = el.offset();
    $('.popup-box').css({
      top: varOffset.top + 70,
      left: varOffset.left + 5
    });
    //console.log(varOffset.left);
  } else {
    $('.popup-box').css({
      'left': 0
    });
    //console.log(windowWidth);
  }

}

function manageHeaderPhoneLine() { // управление телефонным блоком в заголовке
  if (windowWidth <= 790) {
    $('.header-phone-line').css({
      'display': 'inline-block'
    });
    //console.log(varOffset.left);
  } else {
    $('.header-phone-line').css({
      'display': 'none',
    });
    //console.log(windowWidth);
  }

}

function managePersonalImg() { //  управление картинкой с автором
  if (windowWidth <= 980) {
    $('.author-pic div img').attr('src', 'img/man-320.png');
  } else {
    $('.author-pic div img').attr('src', 'img/man.png');
  }

}