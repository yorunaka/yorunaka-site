document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    const indicators = document.querySelectorAll('[data-carousel-slide-to]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');
    let currentItem = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            if (i === index) {
                item.classList.remove('hidden');
                item.classList.add('block');
                indicators[i].classList.add('bg-blue-500');
                indicators[i].classList.remove('bg-gray-300');
            } else {
                item.classList.remove('block');
                item.classList.add('hidden');
                indicators[i].classList.add('bg-gray-300');
                indicators[i].classList.remove('bg-blue-500');
            }
        });
    }

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentItem = i;
            showItem(currentItem);
        });
    });

    prevButton.addEventListener('click', () => {
        currentItem = (currentItem > 0) ? currentItem - 1 : carouselItems.length - 1;
        showItem(currentItem);
    });

    nextButton.addEventListener('click', () => {
        currentItem = (currentItem < carouselItems.length - 1) ? currentItem + 1 : 0;
        showItem(currentItem);
    });

    showItem(currentItem);
});