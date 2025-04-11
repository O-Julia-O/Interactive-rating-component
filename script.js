const ratingButtons = document.querySelectorAll('.feedback-card__rating-btn');
const submitBtn = document.getElementById("submit-btn");
const ratingScreen = document.getElementById("rating-screen");
const thankYouScreen = document.getElementById("thank-you-screen");
const selectedRatingSpan = document.getElementById("selected-rating");

let selectedRating = null;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      ratingButtons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');
      selectedRating = button.textContent;
});
});

submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        selectedRatingSpan.textContent = selectedRating;
        ratingScreen.style.display = "none";
        thankYouScreen.style.display = "flex";
    } else {
        alert('Please select a rating before submitting.');
    }
});