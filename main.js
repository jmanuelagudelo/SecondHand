const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
//----------mobile-----------
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktoMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktoMenu(){
    console.log('Click');
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}