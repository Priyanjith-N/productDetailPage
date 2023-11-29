const hamburgerBtn = document.querySelector('.hamburger');
const mobilenavigationList = document.querySelector('.mobilenavigationList');
const mobilenavigation = document.querySelector('.mobilenavigation');
const logo = document.querySelector('.logo');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    mobilenavigationList.classList.toggle('active');
    mobilenavigation.classList.toggle('active');
    logo.classList.toggle('active');
});

function changeImg(url){
    document.querySelector('.mainFistImg').setAttribute('src', `${url}`);
}

const filterBtn = document.querySelector('.fliterIcon');
const fliterMoblie = document.querySelector('.fliter-moblie');

filterBtn.addEventListener('click', () => {
    fliterMoblie.classList.toggle('active');
});