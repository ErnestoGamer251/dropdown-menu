document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const dots = carousel.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    document.querySelector('.carousel-control.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-slide'));
            updateCarousel();
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }, 5000);
});
