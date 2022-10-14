// import Swiper from 'swiper';  
import Swiper from 'swiper/bundle';  

//  Slider
new Swiper('.options-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    speed: 500,
});

// Tabs

document.addEventListener('click', function (event) {
    if (event.target.closest('.instruction__line')) {
        removeLine();
        const currentElement = event.target.closest('.instruction__line');
        const bulletElement = document.getElementById(currentElement.dataset.id);
        currentElement.classList.add('active');
        bulletElement.classList.add('active');
    }
})
function removeLine() {
    if (document.querySelector('.instruction__line.active'))
        document.querySelector('.instruction__line.active').classList.remove('active');
    
    if (document.querySelector('.instruction__bullet.active'))
        document.querySelector('.instruction__bullet.active').classList.remove('active');
}

// phone, text-slide

let phoneSlider =  new Swiper('.phone-slider', {
    loop:true,
    slidesPerView: 1.5,
    navigation: {
        nextEl: '.swiper-button-next-all',
        prevEl: '.swiper-button-prev-all',
    },
    speed: 500,
})
let textSlider = new Swiper('.text-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next-all',
        prevEl: '.swiper-button-prev-all',
    },
    speed:500,
})