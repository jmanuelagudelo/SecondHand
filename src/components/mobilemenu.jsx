import React from "react";
import '../styles/MobileMenu.scss';

const Mobilemenu = () => {
    return(
        <div className="mobile-menu">
        <ul>
            <li>
                <a href="/">CATEGORIES</a>
            </li>
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

        <ul>
            <li>
                <a href="/">My orders</a>
            </li>
            <li>
             <a href="/">My account</a>
            </li>
        </ul>
        <ul>
            <li>
                <a href="/" className="email">email@example.com</a>
            </li>
            <li>
                <a href="/" className="sign-out">Sign out</a>
            </li>
        </ul>
        </div>
    );
}

export default Mobilemenu