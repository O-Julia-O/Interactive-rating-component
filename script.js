const ratingButtons = document.querySelectorAll('.feedback-card__rating-btn');
const submitBtn = document.getElementById("submit-btn");
const ratingScreen = document.getElementById("rating-screen");
const thankYouScreen = document.getElementById("thank-you-screen");

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      ratingButtons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');
});
});

submitBtn.addEventListener('click', () => {
    ratingScreen.style.display = "none";
    thankYouScreen.style.display = "flex";
});