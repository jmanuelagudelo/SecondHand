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

/*----------shopping-cart----------------*/
const myordercontent = document.querySelector('.my-order-content');
const countCart = document.querySelector('.navbar-shopping-cart div');
const TotalCar = document.querySelector('.total');

const modal = document.querySelector('.modal');
const closemodal = document.querySelector('.boton-modal');

const productsINcart = [];
const productsTOcart = [];

countCart.innerText = document.querySelectorAll('.shopping-cart').length;
TotalCar.innerText = '$0.00';


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

function CarButton(){
    AddCar(productsTOcart)
}

function VerifyProduct(ProductName){
    return productsINcart.some(function(article){
        return article === ProductName
    })
}
function noModal(){
    modal.style.display = 'none'
}
// --------- Lista de productos --------- //
const productList = [];
productList.push({
    name: 'Hoodie Weed-Green',
    price: 250.00,
    image: "./sources/Images/IMG_2914 Large.jpeg",
    detail: "Perfect hoodie to the cold weather and the most confortable"
});

productList.push({
    name: 'Hoodie classic blue',
    price: 200.00,
    image: "./sources/Images/IMG_2912 Large.jpeg",
    detail: "The classsic one is always the best choose for these cold days "
});

productList.push({
    name: "Hoodie Yellow stripes",
    price: 180.00,
    image: "./sources/Images/IMG_2916 Large.jpeg",
    detail: "Always confortable and elegant style for each time"
});

productList.push({
    name: "Bowling stripes shirt",
    price: 100.00,
    image: "./sources/Images/IMG_2918 Large.jpeg",
    detail: 'A classic design will make you look stylish wherever you go'
});

productList.push({ 
    name: "Japanisse Shirt design",
    price: 120.00,
    image: "./sources/Images/IMG_2921 Large.jpeg",
    detail: "A modern design, you gonna shine wherever you go"
}); 

productList.push({
    name: "Psychodelic Shirt design",
    price: 120.00,
    image: "./sources/Images/IMG_2923 Large.jpeg",
    detail: "For these days when you feel high"
});

productList.push({
    name: "Leaves shirt design",
    price: 120.00,
    image: "./sources/Images/IMG_2925 Large.jpeg",
    detail: 'Perfect dor fall, summer and anywhere you decide to'
});

productList.push({
    name:  "Peachish Diamonds Sweeter",
    price: 150.00,
    image: "./sources/Images/IMG_2929 Large.jpeg",
    detail: 'when you want to feel elegant without losing that highlight style'
});

productList.push({
    name: "Star wars Sweeter",
    price: 150.00,
    image: "./sources/Images/IMG_2927 Large.jpeg",
    detail: 'may the force be wherever you go'
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
    for(const product of arr){
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


        productImgCart.addEventListener('click', function(){
            let AddedProduct = []
            AddedProduct.push({
                name: product.name,
                price: product.price,
                image: product.image
            })
            AddCar(AddedProduct)
        })

    }
}
//------Carrito de compras dinamico--------//
function AddCar(products){
    if(VerifyProduct(products[0].name)){
        productsTOcart = []
        return modal.style.display = 'grid'
    }

    //----maquetacion

    const divshoppingCart = document.createElement('div');
    const figureShoppingCart = document.createElement('figure');
    const imgfigureShoppingCart = document.createElement('img');
    const pnameshoppingCart = document.createElement('p');
    const ppriceshoppingCart = document.createElement('p');
    const imgcloseshoppingCart = document.createElement('img');

    divshoppingCart.classList.add('shopping-cart');
    figureShoppingCart.setAttribute('src', products[0].image);
    pnameshoppingCart.innerText = products[0].name;
    ppriceshoppingCart.innerText = '$'  + products[0].price;
    imgcloseshoppingCart.setAttribute('src', './sources/icons/icon_close.png');
    imgcloseshoppingCart.classList.add('.navbar-shopping-cart');

    figureShoppingCart.appendChild(imgfigureShoppingCart);
    divshoppingCart.appendChild(figureShoppingCart);
    divshoppingCart.append(pnameshoppingCart,ppriceshoppingCart);
    divshoppingCart.appendChild(imgcloseshoppingCart);
    myordercontent.appendChild(divshoppingCart);

    countCart.innerText = document.querySelector('.shopping-cart').length;
    TotalCar.innerText = '$' + (Number(TotalCar.innerText.substring(1)) + Number(products[0].price));
    productsINcart.push(products[0].name);

    imgcloseshoppingCart.addEventListener('click', function(){
        divshoppingCart.remove()
        countCart.innerText = document.querySelectorAll('shopping-cart').length
        TotalCar.innerText = '$' + (Number(TotalCar.innerText.substring(1)) - Number(products[0].price))
        productsINcart.splice(productsINcart.indexOf(products[0].name),1)
    })
}

//-----informacion aside de los productos-----//
function Infoproductos(imagen, precio, nombre, detalle){
    productImgDetail.setAttribute('src', imagen)
    PriceInfo.innerText = '$' + precio
    NameInfo.innerText = nombre
    detailInfo.innerText = detalle
    productsTOcart = []
    productsTOcart.push({
        name: nombre,
        price: precio,
        image: imagen
    })
};

renderProducts(productList);



