// https://tp.1c-bitrix.ru/autumn2019/nizhnynovgorod/?utm_source=moi-sklad&utm_medium=email&utm_campaign=tp_nizhnynovgorod_9-oct

var windowWidth;
var numPic = 3;
var rs1X;
var rs1Y;

windowWidth = $(window).width();
if (windowWidth < 1250 && windowWidth > 981) {
  numPic = 2;
} else if (windowWidth < 981) {
  numPic = 1;
} else {
  numPic = 3;
}

function setLeftEdgePopupMenu() { // управление правым краем всплывающего меню
  windowWidth = $(window).width();
  if (windowWidth < 850) {
    var el = $('.header-line__nav');
    var varOffset = el.offset();
    $('.header-line__nav-popup').css({
      top: varOffset.top + 83,
      left: varOffset.left - 55
    });
    console.log(varOffset.left);
  } else {
    $('.header-line__nav-popup').css({
      'left': 0
    });
    //console.log(windowWidth);
  }

}
/*
function toggleNavClasses(windowWidth) { // функция переключения классов меню
  if (windowWidth > 850 && ($('ul').is('.header-line__nav-popup')) && (!$('ul').is('.header-line__nav-list'))) {
    $('ul.header-line__nav-popup').addClass('header-line__nav-list'); // оживляю основное меню на большом экране
    $('ul.header-line__nav-list').removeClass('header-line__nav-popup'); // убираю popup-меню на большом экране
    $('ul.header-line__nav-list').css({
      'display': 'flex'
    });
    console.log(windowWidth);
  } 
  if (windowWidth <= 850 && (!$('ul').is('.header-line__nav-popup')) && ($('ul').is('.header-line__nav-list'))) {
    $('ul.header-line__nav-list').addClass('header-line__nav-popup'); // оживляю popup-меню на большом экране
    $('ul.header-line__nav-popup').removeClass('header-line__nav-list'); // убираю основное меню на большом экране
  }

}
*/
/*
function manageSwiperPaginationAndButtons() { // управление окном pagination и кнопками в слайдере
  if (windowWidth > 1250) {
    if (!($('div.swiper-pagination').is('.hide-element'))) {
      $('div.swiper-pagination').addClass('hide-element'); // убираю pagination на большом экране
    }
    $('.swiper-button-next').removeClass('hide-element');
    $('.swiper-button-prev').removeClass('hide-element');
  } else { // windowWidth <= 1250
    $('div.swiper-pagination').removeClass('hide-element');
    if (!($('div.swiper-button-next').is('.hide-element'))) {
      $('.swiper-button-next').addClass('hide-element'); // убираю стрелку справа на большом экране
    }
    if (!($('div.swiper-button-prev').is('.hide-element'))) {
      $('.swiper-button-prev').addClass('hide-element'); // убираю стрелку слева на большом экране
    }
  }
}
*/

$(document).ready(function () {
  windowWidth = $(window).width();
  //console.log(windowWidth);
  if (windowWidth <= 370) {
    $('.unit-box img').css({ // задаю размеры картинки для слайдера для узкого экрана
      'width': '320px',
      'height': 'auto',
      'background-size': 'auto'
    });
  }
  
  if(windowWidth > 850) {
    $('.header-line__nav-popup').css({
      'display': 'none'
    }); 
  } 

  //toggleNavClasses(windowWidth);

  //setLeftEdgePopupMenu();

/*setLeftPaddingForNameLine();
  setCoordsForSigns();
  manageSwiperPaginationAndButtons();
  manageHeaderPhoneLine();
  managePersonalImg();*/
});

$(window).resize(function () {
  windowWidth = $(window).width();
  //toggleNavClasses(windowWidth);

  if (windowWidth <= 850) {
    //setLeftEdgePopupMenu();
  }
  if(windowWidth > 850) {
    $('.header-line__nav-popup').css({
      'display': 'none'
    }); 
  } 

  /*setLeftPaddingForNameLine();
  setCoordsForSigns();
  manageSwiperPaginationAndButtons();
  manageHeaderPhoneLine();
  managePersonalImg();*/
});

$(function () {
  $('.header-line__nav').click(function () {
    windowWidth = $(window).width();
    //setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth <= 850) {
      $('.header-line__nav-popup').toggle(); 
    }
  });
  
});
