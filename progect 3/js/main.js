(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 20) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

const navBtn = document.querySelector('.header__btn');
const mobileNav = document.querySelector('.mobile__nav')
navBtn.addEventListener('click', function () {
    mobileNav.classList.toggle('mobile__nav-active');
    navBtn.classList.toggle('header__btn-close');
})