const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
//----------mobile-----------
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//----------Shopping-cart-------//
const ShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktoMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
ShoppingCart.addEventListener('click', toggleShopping);

/*---------Reto, dar click en cualquier lugar cierra todos los menus */

const mainContainer = document.querySelector('.main-container');
mainContainer.addEventListener('click', CloseAllMain);


function CloseAllMain(){
    const asideClose = aside.classList.contains('inactive');
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    const DesktopMenuClose = DesktopMenu.classList.contains('inactive');

    if(!asideClose){
        aside.classList.toggle('inactive');
    }
    if(!mobileMenuClose){
        mobileMenu.classList.toggle('inactive');
    }
    if(!DesktopMenuClose){
        DesktopMenu.classList.toggle('inactive');
    }
}

//--funciones--menus-----//

function toggleDesktoMenu(){
    const asideClose = aside.classList.contains('inactive');

    if(!asideClose){
        aside.classList.add('inactive');
    }

    DesktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const asideClose = aside.classList.contains('inactive');

    if(!asideClose){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShopping(){
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    const DesktopMenuClose = DesktopMenu.classList.contains('inactive');

    if(!DesktopMenuClose){
        DesktopMenu.classList.add('inactive');
    }

    if(!mobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
