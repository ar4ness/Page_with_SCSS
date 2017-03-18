$(document).foundation();

$(document).ready(function(){
  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
    breakpoint: 1024,
        settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
  {
    breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

  ]
  });

  $('.header-slider').slick({
    accessibility: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true
  });

});
