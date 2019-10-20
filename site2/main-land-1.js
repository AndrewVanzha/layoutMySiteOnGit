// https://tp.1c-bitrix.ru/autumn2019/nizhnynovgorod/?utm_source=moi-sklad&utm_medium=email&utm_campaign=tp_nizhnynovgorod_9-oct

// https://www.youtube.com/watch?v=ZktBApUBYls
// http://sergeibelousov.ru/konsultacii-po-sajtu.html
// https://www.youtube.com/watch?v=rIb0OoNWDEs

// https://migo.com.ua/blog/jquery/klik-vne-oblasti-elementa.html

var windowWidth;


function showOK() {
  console.log('ok');
  //$('.form-container__formbox')
  $('.form-container__form_ok').css({
    'display': 'block'
  });
  setTimeout(function () {
    $('.form-container__form_ok').css({
      'display': 'none'
    });
  }, 50000);
}


$(document).ready(function ($) {

  $('.form-container__form_button').click(function () {
    $(".form-container__regform").submit(function (ev) {
      ev.preventDefault();
      var str = $(this).serialize();
      console.log(str);

      $.ajax({
        type: "POST",
        url: "contact.php",
        data: str,
        success: function (msg) {
          //console.log(msg);
          /*let jsonData = JSON.parse(msg);
          console.log(jsonData);*/
          showOK();
        }
      });

      /*$.post(
        "ask.php",
        { p1: 'p1', p2: 33 },
        function(data) {
          console.log(data);
        }
      );*/

      return false;
    });
  });
});

/*
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
  $('.header-line__nav').click(function () {
    windowWidth = $(window).width();
    //setLeftEdgePopupMenu();
    //console.log('burger');
    if (windowWidth <= 850) {
      $('.header-line__nav-popup').toggle();
    }
  });

});

/*
$(window).resize(function () {
  windowWidth = $(window).width();
  //toggleNavClasses(windowWidth);

  if (windowWidth <= 850) {
    //setLeftEdgePopupMenu();
  }
  if (windowWidth > 850) {
    $('.header-line__nav-popu').css({
      'display': 'none'
    });
  }

});
*/
/*
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
*/

$(document).ready(function () {
  var modal1 = document.getElementById('modalW1');
  var btn1 = document.getElementsByClassName("share-container__div_offer1")[0];
  var close1 = document.getElementsByClassName("close1")[0];

  btn1.onclick = function () {
    modal1.style.display = "block";
  }

  close1.onclick = function () {
    modal1.style.display = "none";
  }

  window.onclick = function (event) {
    //console.log(event.target);
    //console.log(modal1);
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }
});

$(document).ready(function () {
  $('.share-container__div_offer2').click(function (ev) {
    console.log(ev.target);
    $('#modalW2').slideDown(300);
    $('.bg_popup').fadeIn(300);
  });

  $('.close2').click(function () {
    $('#modalW2').slideUp(300);
  });

  $('.bg_popup').click(function (ev) {
    //console.log(ev.target);
    $('#modalW2').slideUp(300);
    $('.bg_popup').fadeOut(300);
  });

});

/*
$(document).ready(function () {
  //var modalW2 = document.getElementById('modalW2');
  $(window).click(function(ev) {
    console.log(ev.target);
    var modalW2 = $('.share-container__div_offer2');
    console.log(modalW2);
    if(ev.target == modalW2) { console.log('!!'); }
  });
});
*/

$('.question-container__div_button').click(function () {
  //$('.popup__modal').addClass('popup__modal_active');
  $('.popup__modal')
    .fadeIn(400)
    .css({
      'top': $(window).scrollTop() + 100,
      'left': 200
    });

  $('.bg_popup').fadeIn(400);
});

$('.bg_popup').click(function () {
  //$('.popup__modal').removeClass('popup__modal_active');
  $('.popup__modal').fadeOut(400);
  $('.bg_popup').fadeOut(400);
});

$('.popup__close').click(function () {
  //$('.popup__modal').removeClass('popup__modal_active');
  $('.popup__modal').fadeOut(400);
  $('.bg_popup').fadeOut(400);
});

$(window).scroll(function () { // удерживает меню в поле зрения
  $('.popup__modal').css({
    'top': $(window).scrollTop() + 100,
    'left': 200
  });
}).scroll();
