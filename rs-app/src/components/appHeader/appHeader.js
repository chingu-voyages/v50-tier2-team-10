import React, { useState } from 'react';
import cartIcon from './cart_icon.png';
import rsLogo from './logo_black.png';
import Cart from '../cart/cart';
import './appHeader.css';


const AppHeader = () => {

    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    };




    return (
        <header className='header-page'>
            <div className='header-top'>
                <img className='rs-logo' src={rsLogo} alt='cloche with RS written on top'/>
                <button className='cart-button' onClick={toggleCart}>
                <img className='cart-icon' src={cartIcon} alt='shopping cart icon'/>
                    </button>
            </div>
            <div className='header-container'>
                <div className='title'>Restaurant Simulator</div>
                <div className='sub-title'>Easy Ordering, Yummy Meals</div>
            </div>
            {isCartVisible && <Cart />}
        </header>
    );
};

export default AppHeader;