const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.remove('nav-active');
});
