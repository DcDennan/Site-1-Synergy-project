// Плавная прокрутка
document.addEventListener("DOMContentLoaded", function() {
    // Обработчики для навигации
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            const yOffset = 5;

            if (targetElement) {
                const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        });
    });

    // Параллакс-эффект
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        if (parallax) {
            parallax.style.backgroundPositionY = window.pageYOffset * 0.7 + 'px';
        }
    });

    // Обработчики для карточек
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => expandCard(card));
    });
});

// Функция для расширения карточки
function expandCard(card) {
    const expandedCard = document.getElementById("expanded-card");
    const expandedImage = document.getElementById("expanded-image");
    const expandedText = document.getElementById("expanded-text");
    const cardImage = card.querySelector("img");
    const cardInfo = card.querySelector(".card-info");

    expandedImage.src = cardImage.src;
    expandedText.textContent = cardInfo.textContent;
    expandedCard.style.display = "block";
}

// Автоматическое открытие первой карточки
window.onload = function() {
    const firstCard = document.querySelector(".card");
    if (firstCard) expandCard(firstCard);
};