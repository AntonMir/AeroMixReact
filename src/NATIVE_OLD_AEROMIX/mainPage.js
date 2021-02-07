'use strict';

// Вызов JS после загрузки HTML
$(document).ready(function() {  // полная загрузка страницы

  // Перевод картинку на передний план в header
  function standartHeaderImgStyle() {
    $(`.header__img__wrapper:nth-of-type(1)`).css({'width': '30%', 'z-index': '0', 'left': '12%', 'box-shadow': 'rgb(0, 0, 0) 0 0 15px 0'})
    $(`.header__img__wrapper:nth-of-type(2)`).css({'width': '30%', 'z-index': '1', 'left': '34%', 'box-shadow': 'rgb(0, 0, 0) 0 0 15px 0'})
    $(`.header__img__wrapper:nth-of-type(3)`).css({'width': '30%', 'z-index': '0', 'left': '55%', 'box-shadow': 'rgb(0, 0, 0) 0 0 15px 0'})
  };

  $('.header__img__wrapper').hover( function() { 
    let selectHeaderImg = $(this).index() + 1;
    let leftStyleValue = (selectHeaderImg == 1) ?  12 : ( (selectHeaderImg == 2) ? 34 : 55 );
    standartHeaderImgStyle();
    $(`.header__img__wrapper:nth-of-type(${selectHeaderImg})`).css({'width': '35%', 'z-index': '2', 'left': `${leftStyleValue - 2.5}%`, 'box-shadow': 'rgb(0, 0, 0) 0 0 10px 5px'})
  }, function() {
    standartHeaderImgStyle();
  })

  // Услуги > Дети
  $('.services__navbar a:nth-of-type(1)').click( function() {
    $('.services__navbar a:nth-of-type(1)').css('background-color', '#FFC328');
    $('.services__navbar a:nth-of-type(2)').css('background-color', '#FFFFFF');
    $('.services__item').css('display', 'none');
    $('.services__item1, .services__item2, .services__item3, .services__item4, .services__item5').css('display', 'block');
  })

  // Услуги > Взрослые
  $('.services__navbar a:nth-of-type(2)').click( function() {
    $('.services__navbar a:nth-of-type(2)').css('background-color', '#FFC328');
    $('.services__navbar a:nth-of-type(1)').css('background-color', '#FFFFFF');
    $('.services__item').css('display', 'block');
    $('.services__item1, .services__item2, .services__item3, .services__item4, .services__item5').css('display', 'none');
  })

  // Раскрывает подробную информацию каждого элемента в меню "Услуги"
  $('.services__item').hover( function() {
    let selectServiceItem = $(this).index() + 1;    
    if (selectServiceItem == 2) {
      $(`.services__item div`).css({'height': '10%', 'top': '40%'})
      $(`.services__item${selectServiceItem} div`).css({'height': 'auto', 'top': '7%'})
      $(`.services__item3 div`).css({'height': '20%', 'top': '35%'})

    } else if (selectServiceItem == 3) {
      $(`.services__item div`).css({'height': '10%', 'top': '40%'})
      $(`.services__item${selectServiceItem} div`).css({'height': 'auto', 'top': '15%'})
      $(`.services__item2 div`).css({'height': '20%', 'top': '35%'})

    } else {
      $(`.services__item div`).css({'height': '10%', 'top': '40%'})
      $(`.services__item2 div`).css({'height': '20%', 'top': '35%'})
      $(`.services__item3 div`).css({'height': '20%', 'top': '35%'})
      $(`.services__item${selectServiceItem} div`).css({'height': 'auto', 'top': '15%'})
    }  

  }, function() {
    $(`.services__item div`).css({'height': '10%', 'top': '40%'})
    $(`.services__item2 div`).css({'height': '20%', 'top': '35%'})
    $(`.services__item3 div`).css({'height': '20%', 'top': '35%'})
  })


  // ТРЕНЕРА: слайдер
  let slideMax = $('#wrapper__slider1').children().length - 2; // т.к. слайда 3 берем значение (-2)  
  let slideNow = 1;
  let changePostionPX = 0; // записываем число пикселей для сдвига
  let slideInterval = 1000; // длительность анимации
  let slideMove = setInterval(nextSlide, slideInterval); // вызываем анимацию слайда
  let navBtnId = 0; // индекс кнопок под слайдером

  function nextSlide() {
    // переключение слайда на 1 в правую сторону
    if ( slideNow < 1 || slideNow >= slideMax) {
      $('#wrapper__slider1').css('transform', `translateX(0)`);
      slideNow = 1;

    } else {
      changePostionPX = -($('#viewport__slider1').width() / 3) * slideNow;
      $('#wrapper__slider1').css('transform', `translateX(${changePostionPX}px)`);
      slideNow++;
    }

    changeColorNavBtns()
  }

  function prevSlide() {
    // переключение слайда на 1 в левую сторону
    if ( slideNow <= 1 || slideNow > slideMax) {
      changePostionPX = -($('#viewport__slider1').width() / 3) * (slideMax - 1);
      $('#wrapper__slider1').css('transform', `translateX(${changePostionPX}px)`);
      slideNow = slideMax;

    } else {
      changePostionPX = -($('#viewport__slider1').width() / 3) * (slideNow - 2);
      $('#wrapper__slider1').css('transform', `translateX(${changePostionPX}px)`);
      slideNow -= 1;

    }
    changeColorNavBtns()
  }

  function changeColorNavBtns() { 
    // меняет цвет кнопки, которая соответствует индексу текущего слайда. Остальные красит в белый.
    $(`.slide__nav__btn1`).css('background-color', '#C5C5C5');
    $(`.slide__nav__btn1:nth-of-type(${slideNow})`).css('background-color', '#000');
  }

  $(`.slide__nav__btn1:nth-of-type(1)`).css('background-color', '#000'); // цвет первой кнопки в нижнем навбаре по слайдам при загрузке страницы будет изменен

  $('#next__btn1').click( function() {
    // сдаиг к следующему слайду.
    nextSlide();
  });

  $('#prev__btn1').click( function() {
    // сдаиг к предидущему слайду.
    prevSlide();
  });

  $('#block__slider1').hover( function() {
    // останавливаем слайдер при наведении мышкой
    clearInterval(slideMove);
  }, function() {
    // запускаем, если убрали мышку
    slideMove = setInterval(nextSlide, slideInterval);
  });

  $('.slide__nav__btn1').click( function() {
    // переходит на слайд, который равен позиции книпки под слайдером (сопоставление идет по индексу)
    navBtnId = $(this).index();

    if ( navBtnId + 1 != slideNow){
      changePostionPX = -($('#viewport__slider1').width() / 3) * (navBtnId);
      $('#wrapper__slider1').css('transform', `translateX(${changePostionPX}px)`);
      slideNow = navBtnId + 1;

    } else {
      $('#wrapper__slider1').css('transform', `translateX(0px)`);
    }
    
    changeColorNavBtns() 
  });



















  // $("#container").on('mouseleave', '.selector', function() {
  //     //do something
  // });

  // $("#foo").on("hover", function() {
  //   // disco
  // });

  // $(document).on('mouseover', '.selector', function() {
  //    //do something
  // });
  // $(document).on('mouseout', '.selector', function() {
  //    //do something
  // });


  // $("#foo").on("hover", function(e) {
  //   if (e.type === "mouseenter") { console.log("enter"); }
  //   else if (e.type === "mouseleave") { console.log("leave"); }
  // });


  // $("#foo").on("mouseenter mouseleave", function() {
  //   // do some stuff
  // });

  












})