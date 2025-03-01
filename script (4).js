document.addEventListener('DOMContentLoaded', function () {
    const ratingInput = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');
    const feedbackForm = document.getElementById('feedbackForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    ratingInput.addEventListener('input', function () {
        ratingValue.textContent = ratingInput.value;
    });

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();
        thankYouMessage.classList.add('show');
        feedbackForm.reset();
        ratingValue.textContent = '3';
        setTimeout(() => {
            thankYouMessage.classList.remove('show');
        }, 5000);
    });

    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});