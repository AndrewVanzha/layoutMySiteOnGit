setTimeout('askExchangeRate();', 10);

function askExchangeRate() {
  $.get(
    'http://data.fixer.io/api/latest', {
      'access_key': '7556a4a9e24d262b95e2bdc7193a5b65'
    },
    function (response) {
      console.log(response);
      var exch = response.rates.RUB / response.rates.USD;
      $('.exchange-usd').text(exch.toPrecision(4));
      exch = response.rates.RUB;
      $('.exchange-eur').text(exch.toPrecision(4));
    });
};

var windowWidth;
$(window).resize(function () {
  windowWidth = $(window).width();
  if ($('div').is('.popup-menu') && windowWidth > 865) {
    $('.popup-menu').css('display', 'none'); // убрать всплывающее меню
    //$('.popup-menu').hide();
    $('.burger').css('background-image', 'url("img/burger-sign.png")'); // .burger в исходное состояние
  }
  if (windowWidth > 865) {
    $('.additional-input').hide(); // убрать дополнительный input
  }
  /*  if ($('div').is('.popup-menu') && windowWidth<865) {
    var shiftString = String(Math.round(windowWidth*.25)) + "px";
    $('.popup-menu').css('left', shiftString);
    console.log(shiftString);
  }*/
  /*  if ($('div').is('.popup-menu') && windowWidth<515) {
      var shiftString = '90px';
      $('.popup-menu').css('left', shiftString);
    }
    else {
      $('.popup-menu').css('left', '200px');
    }*/
});

$(function () {
  $('.burger').click(function () {
    if ($('.popup-menu').is(':visible')) {
      $('.burger').css('background-image', 'url("img/burger-sign.png")');
    } else {
      $('.burger').css('background-image', 'url("img/cruz-sign.png")');
      $('.additional-input').hide(); // убираю доп.input
    }
    $('.popup-menu').toggle(400);
  });
});

$(function () {
  $('a.header-logo-small').click(function () { // клик на псевдоэлемент
    if (!$('.popup-menu').is(':visible')) {
      $('.additional-input').toggle(300);
    }
    //console.log('press');
    if ($('.additional-input').is(':visible')) {
      $('.additional-input').css('display', 'block');
    }
  });
});