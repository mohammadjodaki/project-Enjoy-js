////////////////////////////////////     menu home       //////////////////////////////////////////////////
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const fullscreenMenu = document.getElementById('fullscreen-menu');

menuToggle.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    fullscreenMenu.classList.toggle('flex');
    fullscreenMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
    
    if (fullscreenMenu.classList.contains('flex')) {
        menuToggle.innerHTML = '×';
    } else {
        menuToggle.innerHTML = '☰';
    }
}

///////////////////////////////////////////        slider swiper           ////////////////////////////////////////////////////////
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop : true,
    centeredSlides: true,
    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
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