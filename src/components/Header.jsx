import React, {useState} from "react";
import '@styles/Header.scss';
import DesktopMenu from '@components/Menu';
import Mobilemenu from '@components/mobilemenu';
import logo from '@logos/logo-second-hand.svg'
import IconMenu from '@icons/icon_menu.svg'
import ShoppingImg from '@icons/icon_shopping_cart.svg'



const Header = () => {
    const [toggle, setToggle] = useState(false);
    const handdleToggle = () => {
        setToggle(!toggle);
    }
    const [mobilemenu, setMenu] = useState(false);
    const handdleMenu = () => {
        setMenu(!mobilemenu);
    }
    return(
        <nav className="main-nav">
        <img src={IconMenu} alt="icon_menu" className="menu" onClick={handdleMenu}/>

        <div className="navbar-left">
            <img src={logo} alt="logo" className="logo-nav"/>

            <ul>
                <li>
                    <a href="/">All Products</a>
                </li>
                <li>
                    <a href="/">Hoodies</a>
                </li>
                <li>
                    <a href="/">Sweeter</a>
                </li>
                <li>    
                    <a href="/">Shirts</a>
                </li>
            </ul>
        </div>

        <div className="navbar-right">
        <ul>
            <li className="navbar-email" onClick={handdleToggle}>
                email@example.com
            </li>
            <li className="navbar-shopping-cart">
                <img src={ShoppingImg} alt="shopping-cart"/> 
                <div>0</div>
            </li>
        </ul>
        </div>
        {toggle ? <DesktopMenu/> : null}
        {mobilemenu ? <Mobilemenu/> : null}
    </nav>
    );
}

export default Header