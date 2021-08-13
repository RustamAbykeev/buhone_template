      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target =
            this.getAttribute("href").length > 1
              ? document.querySelector(this.getAttribute("href"))
              : document.body.firstElementChild;
          target.scrollIntoView({
            behavior: "smooth",
          });
        });
      });

const offerSlider = new Swiper('.offer-slider', {
    slidesPerView: 1,
    loop: true,
    // speed: 400,
    navigation: {
        nextEl: '.slider-arrow-next',
        prevEl: '.slider-arrow-prev',
    },
pagination: {
    el: '.slider-pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
}
}) 
    
const clientsSlider = new Swiper('.clients-slider', {
    slidesPerView: 1,
    loop: true,
    // speed: 400,
    navigation: {
        nextEl: '.slider-clients-arrow-next',
        prevEl: '.slider-clients-arrow-prev',
    },
pagination: {
    el: '.slider-pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
}
}) 

const reviewsSlider = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    loop: true,
    // speed: 400,
    navigation: {
        nextEl: '.slider-reviews-arrow-next',
        prevEl: '.slider-reviews-arrow-prev',
    },
pagination: {
    el: '.slider-pagination',
    type: 'bullets',
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'swiper-pagination-bullet-active',
    clickable: true,
}
}) 