// Togle Class Active

const navbarNav = document.querySelector('.navbar-nav');
// menu click
document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// menghilangkan navbar click diluar sidebar
const menu = document.querySelector('#menu');
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

