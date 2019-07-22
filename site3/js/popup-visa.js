var oneTime = true;
var picWidth = ($(window).width() - $('.work-section__pic').width()) / 2;
var moveIterL = -picWidth;

var target = $('.visa-block__conditions');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToVisaBlock1 = targetPos - winHeight / 2;
var scrollToVisaBlock2 = targetPos;

target = $('.work-section__movebars_left');
targetPos = target.offset().top;
var scrollToMoveBars1 = targetPos - winHeight / 2;
var scrollToMoveBars2 = targetPos;

var target = $('.work-section-list__text');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToWorkSection1 = targetPos - winHeight / 2;
var scrollToWorkSection2 = targetPos;

var target = $('.confidence');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToConfidence1 = targetPos - winHeight / 2;
var scrollToConfidence2 = targetPos;

var target = $('.visa-order__list');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToVisaOrder1 = targetPos - winHeight / 2;
var scrollToVisaOrder2 = targetPos;

function stepMove() {
  var timerId = setTimeout(function goM() {
    $('.work-section__movebars_left').css({
      'width': picWidth,
      'left': moveIterL
    });
    $('.work-section__movebars_right').css({
      'width': picWidth,
      'right': moveIterL
    });
    //console.log(moveIterL);
    if (moveIterL < -10) setTimeout(goM, 10);
    moveIterL = moveIterL + 10;
  }, 10);
}

$(window).scroll(function () {
  var winScrollTop = $(this).scrollTop();
  var intrvl;

  if (winScrollTop > scrollToVisaBlock1 && winScrollTop < scrollToVisaBlock2) {
    //console.log('доехали');
    $('.visa-block__conditions div:nth-of-type(1)').show(1000, function () {
      $('.visa-block__conditions div:nth-of-type(2)').show(1000, function () {
        $('.visa-block__conditions div:nth-of-type(3)').show(1000);
      });
    });
    scrollToWorkSection1
  }

  if (winScrollTop > scrollToMoveBars1 && winScrollTop < scrollToMoveBars2) {
    //console.log(moveIter);
    if (oneTime) {
      stepMove();
      oneTime = false;
    }
  }

  if (winScrollTop > scrollToWorkSection1 && winScrollTop < scrollToWorkSection2) {
    //console.log('доехали');
    $('.work-section-list__text li:nth-of-type(1)').fadeIn(1000, function () {
      $('.work-section-list__text li:nth-of-type(2)').fadeIn(1000, function () {
        $('.work-section-list__text li:nth-of-type(3)').fadeIn(1000, function () {
          $('.work-section-list__text li:nth-of-type(4)').fadeIn(1000);
        });
      });
    });
  }

  if (winScrollTop > scrollToConfidence1 && winScrollTop < scrollToConfidence2) {
    //console.log('доехали');
    $('.work-section-list__text li:nth-of-type(4)').fadeIn(1000, function () {
      $('.work-section-list__text li:nth-of-type(3)').fadeIn(1000, function () {
        $('.work-section-list__text li:nth-of-type(2)').fadeIn(1000, function () {
          $('.work-section-list__text li:nth-of-type(1)').fadeIn(1000);
        });
      });
    });
  }

  if (winScrollTop > scrollToVisaOrder1 && winScrollTop < scrollToVisaOrder2) {
    //console.log('доехали');
    $('.visa-order__list li:nth-of-type(1)').slideDown(1000, function () {
      $('.visa-order__list li:nth-of-type(2)').slideDown(1000, function () {
        $('.visa-order__list li:nth-of-type(3)').slideDown(1000, function () {
          $('.visa-order__list li:nth-of-type(4)').slideDown(1000, function() {
            $('.visa-order__pic').slideDown(1000);
          });
        });
      });
    });
  }

});

$('.country-list__show-more').click(function() {
  $('.country-list__images_box-add1').show(500, function() {
    $('.country-list__images_box-add2').show(500)
  });
  $('.country-list__show-more').hide(100);
});

$(document).ready(function () {
  /*$('.header-block__contactinfo').addClass('');*/
  $('.header-block__contactinfo').append(
    '<button class="btn btn-danger mx-auto pl-4 pr-4 header-nav__navbar_btn-button" type="submit"><i class="fa fa-phone fa-fw" aria-hidden="true"></i>&nbsp;Заказать звонок</button>'
  );
  $('.work-section__movebars_left').css({
    'width': picWidth,
    'left': moveIterL
  });
  $('.work-section__movebars_right').css({
    'width': picWidth,
    'right': moveIterL
  });

});