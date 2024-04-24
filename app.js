const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#logo');

// display mobile menu
    function mobileMenu() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }

    menu.addEventListener('click', mobileMenu); 

// show active menu when scrolling
    const highlightMenu = () => {
        const elem = document.querySelector('.highlight');
        const homeMenu = document.querySelector('#home-page');
        const aboutMenu = document.querySelector('#about-page');
        const servicesMenu = document.querySelector('#services-page');
        let scrollPos = window.scrollY;
        console.log(scrollPos);

//adds "highlight" class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600) { //hodnota 600 (alebo ďalej 1430/2345 sú podľa "console.log(scrollPos)" pre prepínanie highlight classu
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1430) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if (elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);