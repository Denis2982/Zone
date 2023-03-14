$(function () {

    $('.nav__burger').on('click', function() {
      $('.nav__list').toggleClass('nav__list--open');
      $('.nav__burger').toggleClass('nav__burger--open');
    });

    $('.footer__burger').on('click', function() {
      $('.footer__btn').toggleClass('footer__btn--active');
      $('.footer__menu').toggleClass('footer__menu--active');
    });

})

