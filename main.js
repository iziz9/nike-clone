
new Swiper ('.swiper', {
  slidesPerView : 3,
  spaceBetween : 12,
  allowTouchMove : false, //false: 마우스 드래그로 스와이프 불가
  navigation : {
    el: '.contents-third',
    nextEl: '.navigation-btn-next',
    prevEl: '.navigation-btn-prev',
  },
  scrollbar : {
		el : '.swiper-scrollbar',
		draggable: true,
    // hide: true,
  },
});