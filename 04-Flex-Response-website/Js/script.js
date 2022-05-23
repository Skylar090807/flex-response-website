$(document).ready(() => {
  // scroll down 시 active class 추가
  $(window).on('scroll', () => {
    $(window).scrollTop() > 50 ? $('header').addClass('active') : $('header').removeClass('active')
  })

  // slick slider
  $('.myslider').slick({
    centerMode: true,
    centerPadding: '60px',
    dots: true,
    prevArrow: $('.arrow_prev'),
    nextArrow: $('.arrow_next'),
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })
})
