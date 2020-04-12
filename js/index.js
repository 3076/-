var mySwiper = new Swiper('#s_c1', {
    
    slidesPerView: 1,
    spaceBetween: 40,
   
    breakpoints: { 
      //当宽度小于等于320
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
     //当宽度小于等于480
      480: { 
        slidesPerView: 2,
        spaceBetween: 20
      },
      //当宽度小于等于640
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },

    autoplay: {
        stopOnLastSlide: false,
      },

    autoplay: {
        delay: 2000
    },
    hashNavigation: true,

    pagination: {
        el: '#s_c1 .swiper-pagination',
        dynamicBullets: true,
        dynamicMainBullets: 2,
        clickable: true,
        
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '#s_c1 .swiper-button-next',
        prevEl: '#s_c1 .swiper-button-prev',
    },

   
    breakpoints: {
        100: {
            slidesPerView: 0,
        }
    }
})


var mySwiper_2 = new Swiper('.s_c', {
  pagination :{
    el: '.swiper-pagination',
    clickable :true,
    dynamicBullets: true,
    dynamicMainBullets: 3
  }
})





