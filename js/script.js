'use strict';

const body = document.querySelector('body');
const menuBtn = document.querySelector('.navbar__btn');
const mobileMenu = document.querySelector('.navbar__menu');
const navBar = document.querySelector('.navbar');
const scrollTop = document.querySelector('.scroll-top');
const menuLinks = document.querySelectorAll('.navbar__menu li');
const contactBtn = document.querySelector('.navbar__menu .itemBtn');
const contactWrapper = document.querySelector('.contact-wrapper');
const closeFormBtn = document.querySelector('.contact-wrapper .close');

const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
}

const navScrollStyle = () => {
    if (window.scrollY > 100) {
        navBar.classList.add('navOnScroll');
        scrollTop.style.display = 'flex';
     } else {
        navBar.classList.remove('navOnScroll');
        scrollTop.style.display = 'none';
     }
}
const scrollToTop = () => {
    window.scrollTo(0, 0);
}

const closeMenu = () => {
    mobileMenu.classList.remove('active');
}

const showContactForm = (e) => {
    e.preventDefault();
    contactWrapper.style.display = 'flex';
    body.classList.add('blockScroll');
}

const closeContactForm = (e) => {
    e.preventDefault();
    contactWrapper.style.display = 'none';
    body.classList.remove('blockScroll');
}


window.addEventListener('scroll', navScrollStyle);
scrollTop.addEventListener('click', scrollToTop);
menuBtn.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
contactBtn.addEventListener('click', showContactForm);
closeFormBtn.addEventListener('click', closeContactForm);