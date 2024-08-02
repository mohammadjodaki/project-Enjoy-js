////////////////////////////////////     menu home       //////////////////////////////////////////////////

///////////////////////////////////////////        slider            ////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop : true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 150,
        },
    },
    on: {
        slideChange: function () {
            this.slides.forEach((slide, index) => {
                if (index === this.activeIndex) {
                    slide.style.transform = 'scale(1.5)';
                    slide.style.zIndex = '10';
                } else {
                    slide.style.transform = 'scale(1)';
                    slide.style.zIndex = '1';
                }
            });
        }
    }
});