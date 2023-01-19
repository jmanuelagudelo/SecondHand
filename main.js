const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const productDetailCloseicon = document.querySelector('.product-detail-close');
//----------mobile-----------
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//----------Shopping-cart-------//
const ShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

menuEmail.addEventListener('click', toggleDesktoMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
ShoppingCart.addEventListener('click', toggleShopping);
productDetailCloseicon.addEventListener('click', Closeproductdetail);

/*---- dar click en cualquier lugar cierra todos los menus----- */

const mainContainer = document.querySelector('.main-container');
mainContainer.addEventListener('click', CloseAllMain);

/*--------------- Contenedor de productos --------*/

const cardsContainer = document.querySelector('.cards-container');
const ProductDetailContainer = document.querySelector('#productDetail');

let productImgDetail = document.querySelector('.product-det > img:nth-child(2)');
let PriceInfo = document.querySelector('.product-info p:nth-child(1)');
let NameInfo = document.querySelector('.product-info p:nth-child(2)');
let detailInfo = document.querySelector('.product-info p:nth-child(3)');
let bottoninfo = document.querySelector('.addto-cart-button');



function CloseAllMain(){
    const asideClose = shoppingCartContainer.classList.contains('inactive');
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    const DesktopMenuClose = DesktopMenu.classList.contains('inactive');

    if(!asideClose){
        shoppingCartContainer.classList.toggle('inactive');
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
    const asideClose = shoppingCartContainer.classList.contains('inactive');

    if(!asideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    DesktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const asideClose = shoppingCartContainer.classList.contains('inactive');
    const productDetailClose = ProductDetailContainer.classList.contains('inactive');


    if(!asideClose){
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

    if(!productDetailClose){
        ProductDetailContainer.classList.add('inactive');
    }
}

function toggleShopping(){
    const mobileMenuClose = mobileMenu.classList.contains('inactive');
    const DesktopMenuClose = DesktopMenu.classList.contains('inactive');
    const productDetailClose = ProductDetailContainer.classList.contains('inactive');

    if(!DesktopMenuClose){
        DesktopMenu.classList.add('inactive');
    }

    if(!mobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

    if(!productDetailClose){
        ProductDetailContainer.classList.add('inactive');
    }
}

const productList = [];
productList.push({
    name: 'Hoodie Weed-Green',
    price: 250.00,
    image: "./sources/Images/IMG_2914 Large.jpeg",
    detail: "Perfect hoodie to the cold weather and the most confortable weed-friendly clothe"
});

productList.push({
    name: 'Hoodie classic blue',
    price: 200.00,
    image: "./sources/Images/IMG_2912 Large.jpeg",
    detail: ""
});

productList.push({
    name: "Hoodie Yellow stripes",
    price: 180.00,
    image: "./sources/Images/IMG_2916 Large.jpeg",
    detail: ""
});

productList.push({
    name: "Bowling stripes shirt",
    price: 100.00,
    image: "./sources/Images/IMG_2918 Large.jpeg",
    detail: ''
});

productList.push({ 
    name: "Japanisse Shirt design",
    price: 120.00,
    image: "./sources/Images/IMG_2921 Large.jpeg",
    detail: ""
}); 

productList.push({
    name: "Psychodelic Shirt design",
    price: 120.00,
    image: "./sources/Images/IMG_2923 Large.jpeg",
    detail: ""
});

productList.push({
    name: "Leaves shirt design",
    price: 120.00,
    image: "./sources/Images/IMG_2925 Large.jpeg",
    detail: ''
});

productList.push({
    name:  "Peachish Diamonds Sweeter",
    price: 150.00,
    image: "./sources/Images/IMG_2929 Large.jpeg",
    detail: ''
});

productList.push({
    name: "Star wars Sweeter",
    price: 150.00,
    image: "./sources/Images/IMG_2927 Large.jpeg",
    detail: ''
});

productList.push({
    name: "Blue Diamonds Sweeter",
    price: 150.00,
    image: "./sources/Images/IMG_2931 Large.jpeg",
    detail: 'A confortable sweeter whit a beautiful Blue Diamonds pattern'
});

function openProductDetail(){
    productDetail.classList.remove('inactive');
}
function Closeproductdetail(){
    productDetail.classList.add('inactive');
}


function renderProducts(arr){
    for( const product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './sources/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);

        productImg.addEventListener('click', function(){
            Infoproductos(product.image, product.price, product.name, product.detail)
            openProductDetail()
        });
    }
}
function Infoproductos(imagen, precio, nombre, detalle){
    productImgDetail.setAttribute('src', imagen)
    PriceInfo.innerText = '$' + precio
    NameInfo.innerText = nombre
    detailInfo.innerText = detalle

};

renderProducts(productList);



