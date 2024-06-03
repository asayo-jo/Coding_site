$(function(){
  $('.s_01 .accordion_one .accordion_header').click(function(){
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });
});



$(window).scroll(function() {
  $('.fade-in').each(function() {
    var pos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var wHeight = $(window).height();
    if (scroll > pos - wHeight + wHeight/100){
      $(this).addClass('inview');
    }
  });
});



$(function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });
});