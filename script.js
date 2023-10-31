const navMenu = document.querySelector('.nav__menu');
const nav = document.querySelector('.nav');

navMenu.addEventListener('click', ()=>{ nav.classList.toggle('visible'); })