const ratingButtons = document.querySelectorAll('.feedback-card__rating-btn');
const submitBtn = document.getElementById("submit-btn");

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
      ratingButtons.forEach(btn => btn.classList.remove('selected'));

      button.classList.add('selected');
});
});

submitBtn.addEventListener('click', () => {
    
});