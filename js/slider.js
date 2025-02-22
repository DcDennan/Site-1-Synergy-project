document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img');
    const dots = document.querySelectorAll('.slider .dot');
    let currentIndex = 0;

    // Функции слайдера
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('hidden', i !== index);
        });
    }

    function activateDot(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
        activateDot(currentIndex);
    }

    // Обработчики для точек
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            showImage(currentIndex);
            activateDot(currentIndex);
        });
    });

    // Автопрокрутка
    if (images.length > 0) {
        setInterval(nextImage, 5000);
        showImage(currentIndex);
        activateDot(currentIndex);
    }
});