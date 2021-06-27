var ballCoords = {
  'startX': 10,
  'startY': 0,
  'finishX': 0,
  'finishY': 0
};
var ballSize = 50; // диаметр мяча для наибольшей ширины поля
var stepY = 25; // шаг по Y
var goalWidth = 25 / 150; // ширина ворот
var moveTime = 2000; // время движения в мс
var fieldWidth = 1280; // ширина поля (начальная)
var fieldHeight = 720; // высота поля (начальная)
var numIter = 0; // число итераций
var toggleIter = 1; // направление движения по Y


$('.ball').click(function () {
  function moveBall() {
    var yy;

    var currentXY = {
      'pX': 0,
      'pY0': 0,
      'pY1': 0
    };

    if (numIter == 0) { // сбрасываю currentXY
      currentXY.pX0 = 0;
      currentXY.pY0 = 0;
    }
    numIter += 1;
    //console.log(numIter);
    //console.log(currentXY.pY0);

    currentXY.pY0 = ballCoords.startY;
    if (ballCoords.startY >= (fieldHeight - stepY)) { // достиг низа, переключаю наверх
      toggleIter = -1;
    }
    if (ballCoords.startY <= (stepY)) { // достиг верха, переключаю вниз
      toggleIter = 1;
    }
    currentXY.pY1 = currentXY.pY0 + stepY * toggleIter; // расчет цели движения - шаг вниз/вверх по Y
    ballCoords.startY += stepY * toggleIter; // для следующей итерации

    $('.ball').animate({
        //'transform': 'translate(' + currentXY.pX + ', ' + currentXY.pY + ')',
        'left': ballCoords.startX,
        'top': currentXY.pY0
      }, moveTime, function () {
        yy = this.style.top; // левое касание
        yy = yy.slice(0, -2); // убираю 'px' в хвосте
        //console.log(yy);
        if (yy > ((fieldHeight - goalWidth * fieldHeight) / 2) && yy < ((fieldHeight + goalWidth * fieldHeight) / 2)) {
          //console.log(yy + ' left goal!');
          $('.leftscore').show(400, function () {
            $(this).hide(400);
          });
          console.log('left goal!');
        }
      })
      .animate({
        'left': ballCoords.finishX,
        'top': currentXY.pY1
      }, moveTime, moveBall);

    currentXY.pY0 = ballCoords.startY; // подготовка к следующей итерации
    if (ballCoords.startY >= (fieldHeight - stepY)) {
      toggleIter = -1;
    }
    if (ballCoords.startY <= (stepY)) {
      toggleIter = 1;
    }
    currentXY.pY1 = currentXY.pY0 + stepY * toggleIter;
    ballCoords.startY += stepY * toggleIter;

    yy = $('.ball').position().top // правое касание
    //console.log(yy);
    if (yy > ((fieldHeight - goalWidth * fieldHeight) / 2) && yy < ((fieldHeight + goalWidth * fieldHeight) / 2)) {
      //console.log(yy + ' right goal!');
      $('.rightscore').show(400, function () {
        $(this).hide(400);
      });
      console.log('right goal!');
    }

  }

  moveBall();

});

$('.stop-move').on('click', function () {
  $('.ball').stop();
  $('.stop-move').prop('disabled', false);
  $('.go-init').prop('disabled', false); // даю разрешение
  //console.log('stop move');
});

$('.go-init').click(function () {
  $('.stop-move').prop('disabled', false);
  $('.go-init').prop('disabled', true); // даю запрещение

  $('.ball').animate({ // двигаю мяч на стартовую позицию
    'left': ballCoords.startX,
    'top': 0
  });
  numIter = 0;
  ballCoords.startY = 0;

  //console.log('go init');
});

$(document).ready(function () {
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();

  if (windowWidth >= 1200) {
    fieldWidth = 1130; // задаю размеры картинки для широкого экрана (с учетом диаметра мяча)
    fieldHeight = 624;
  } else if (windowWidth < 1200 && windowWidth >= 992) {
    ballSize = 40;
    fieldWidth = 950;
    fieldHeight = 523;
  } else if (windowWidth < 992 && windowWidth >= 768) {
    ballSize = 30;
    fieldWidth = 705;
    fieldHeight = 388;
  } else if (windowWidth < 768 && windowWidth >= 576) {
    ballSize = 25;
    fieldWidth = 690;
    fieldHeight = 388;
  } else {
    ballSize = 20;
    fieldWidth = 690; // задаю размеры картинки для узкого экрана
    fieldHeight = 388;
  }
  fieldWidth -= ballSize; // учитываю диаметр мяча
  fieldHeight -= ballSize; // учитываю диаметр мяча
  ballCoords.finishX = fieldWidth; // правая граница движения

  var sz = ballSize + 'px';
  $('.ball').css({
    width: sz,
    /* размер мяча */
    height: sz
  });

  $(function () {
    $('.go-init').prop('disabled', true);
  });

  //console.log(windowWidth + ' / ' + fieldWidth);
  //console.log(windowHeight + ' / ' + fieldHeight);
});