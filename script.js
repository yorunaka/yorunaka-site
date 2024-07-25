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

    const updateCarousel = (index) => {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('hidden', i !== index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('bg-black', i === index);
            indicator.classList.toggle('bg-gray-300', i !== index);
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel(currentIndex);
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel(currentIndex);
    };

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel(currentIndex);
        });
    });

    if (loop) {
        setInterval(nextSlide, 4000);
    }

    updateCarousel(currentIndex);
});