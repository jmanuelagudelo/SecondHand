const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktoMenu);

function toggleDesktoMenu(){
    console.log('Click');
    DesktopMenu.classList.toggle('inactive');
}

console.log('Js works!')