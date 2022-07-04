$(document).ready(function () {
  var scroll_pos = 0;
  $(window).scroll(function () {
    scroll_pos = $(this).scrollTop();
    // sticky navbar on scroll script
    if (scroll_pos > 20) {
      $('.navbar').addClass('sticky');
      $('.navbar img.hitam').show();
      $('.navbar img.putih').hide();
    } else {
      $('.navbar').removeClass('sticky');
      $('.navbar img.hitam').hide();
      $('.navbar img.putih').show();
    }
  });
  // menu navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverpause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
