
$(document).ready(function() {

  var btn = $('.header__btn');
  var mob = $('.header__mobile');

    $(btn).on('click', function() {
    $('.header__mobile').toggle();

    if(mob.is(':visible')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'scroll');
    }
  });
});

$(window).on('scroll', function() {
    if($(this).scrollTop() > $(this).height()) {
      $('.header__m-overlay').fadeIn();
    } else {
      $('.header__m-overlay').fadeOut();
    }
});

$(window).on('resize', function() {

  if ($(this).width() >= 768) {
    $('.header__btn').hide();
    $('.header__mobile').show();
    $('body').css('overflow', 'scroll');
  } else {
    $('.header__btn').show();
    $('.header__mobile').hide();
  }
});
