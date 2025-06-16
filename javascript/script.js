function textActive(text, useHeight) {
    const textElement = document.getElementById(text);
    textElement.style.opacity = 1;
    if (useHeight) {
        textElement.style.height = '45px';
    }
}

function textDeactive(text, useHeight) {
    const textElement = document.getElementById(text);
    textElement.style.opacity = 0;
    if (useHeight) {
        textElement.style.height = 0;
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenLeftElements = document.querySelectorAll('.hidden-left');
const hiddenRightElements = document.querySelectorAll('.hidden-right');
const hiddenUpElements = document.querySelectorAll('.hidden-up');
hiddenElements.forEach((element) => observer.observe(element));
hiddenLeftElements.forEach((element) => observer.observe(element));
hiddenRightElements.forEach((element) => observer.observe(element));
hiddenUpElements.forEach((element) => observer.observe(element));

const header = document.querySelector('.header-container');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled'); 
    }
});

const logoContainer = document.querySelector('.logo-container');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        logoContainer.classList.add('scrolled'); 
    } else {
        logoContainer.classList.remove('scrolled'); 
    }
});

const navItems = document.querySelectorAll('.nav-container li');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navItems.forEach((item) => item.classList.add('scrolled')); 
    } else {
        navItems.forEach((item) => item.classList.remove('scrolled')); 
    }
});

const animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), 
    renderer: 'svg',
    loop: true, 
    autoplay: true, 
    path: './images/Animation - 1750014005543.json' 
});

document.getElementById('github-button').addEventListener('click', () => {
    window.location.href = 'https://github.com/EgorBusuioc/apartments_rent_app';
});