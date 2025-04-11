# Frontend Mentor - Interactive rating component solution
## Table of contents
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![image](https://github.com/user-attachments/assets/1cd963f1-4e6a-41f0-a819-1a0179ae93be)
![image](https://github.com/user-attachments/assets/2841cc8a-5119-4437-825e-ec92e9510779)

### Links

- Solution URL: [Solution URL](https://github.com/O-Julia-O/Interactive-rating-component)
- Live Site URL: [Live site URL here](https://o-julia-o.github.io/Interactive-rating-component)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This small project helped me practice key front-end skills by creating a feedback component where the user selects a rating and submits it.

## ✅ DOM Manipulation

- Select multiple elements with `querySelectorAll`
- Add event listeners to buttons
- Dynamically update classes using `classList`

```js
ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selectedRating = button.textContent;
  });
});
```

### Continued development

- Improve my understanding of how to structure components and state transitions in larger applications
- Practice working with accessibility (a11y), e.g., adding proper roles and ARIA labels for buttons
- Explore how to implement the same component using a modern JavaScript framework like React or Vue
- Add form validation and user feedback when no rating is selected
- Learn how to store selected ratings in localStorage or send them to a server using fetch
- Get more confident using BEM methodology or utility-first CSS (e.g., Tailwind) for styling
- Refactor JavaScript into smaller reusable functions and possibly split files
