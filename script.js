// server
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').textContent = data.message;
        })
        .catch(error => console.error('Error fetching data:', error));
});

// navbar
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
        Window.onscroll = function () {

            if (window.scrollY > fixedNav) {
                header.classList.add('navbar-fixed');
            } else {
                header.classList.remove('navbar-fixed');
            }
        };
});

// carousel
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('#skills-carousel');
    const carouselItems = carousel.querySelectorAll('[data-carousel-item]');
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');
    const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
    const loop = carousel.getAttribute('data-carousel-loop') === 'true';

    let currentIndex = 0;
    let transitioning = false;
    let autoSlideInterval;
    let inactivityTimeout;
    const autoSlideDelay = 3000; 
    const inactivityDelay = 5000; 

    const updateCarousel = (index) => {
        if (transitioning) return;
        transitioning = true;

        carouselItems.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
            item.classList.toggle('block', i === index);
            item.classList.toggle('active', i === index);
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('bg-black', i === index);
            indicator.classList.toggle('bg-gray-300', i !== index);
        });

        setTimeout(() => {
            transitioning = false;
        }, 700);
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel(currentIndex);
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
    };

    const stopAutoSlide = () => {
        clearInterval(autoSlideInterval);
    };

    const resetInactivityTimeout = () => {
        clearTimeout(inactivityTimeout);
        inactivityTimeout = setTimeout(() => {
            startAutoSlide();
        }, inactivityDelay);
    };

    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        resetInactivityTimeout();
    });

    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        resetInactivityTimeout();
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            updateCarousel(currentIndex);
            resetInactivityTimeout();
        });
    });

    if (loop) {
        startAutoSlide();
    }

    updateCarousel(currentIndex);
});




