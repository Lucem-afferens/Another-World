$(document).ready(function(){
  $('.news__slick').slick({
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></img></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
  });
  $('.benefits__blocks_slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
  });
  $('.trending__cards_slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    arrows: false,
    adaptiveHeight: true,
  });
  $('.gallery__grid_visible').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev_gallery"><img src="icons/left.png"></img></button>',
    nextArrow: '<button type="button" class="slick-next_gallery"><img src="icons/right.png"></img></button>',
  });

  // pageup
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  }); 

  // Modal

  $('[data-modal=consultation]').on('click', function() {
    $('.modal, #consultation').fadeIn(600);
    $('body, html').toggleClass('fixed-page');
  });
  
  $('.modal__close').on('click', function () {
      $('.modal, #consultation, #thanks').fadeOut(600);
      $('body, html').removeClass('fixed-page');
  });


  function validateForms(form){
      $(form).validate({
          messages: {
              name: "Пожалуйста, введите свое имя",
              phone: "Пожалуйста, введите свой номер телефона",   
              email: {
                  required: "Пожалуйста, введите свой E-mail",
                  email: "Неправильно введен адрес почты"
              }
          }
      }); 
  }

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");



  // preloader

  $("body").addClass("loaded");


});
