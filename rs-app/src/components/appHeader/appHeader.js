import React, { useState } from 'react';
import cartIcon from './cart_icon.png';
import rsLogo from './logo_black.png';
import './appHeader.css';


const AppHeader = () => {






    return (
        <header className='header'>
            <img className='rs-logo' src={rsLogo} alt='cloche with RS written on top'/>
            <img className='cart-icon' src={cartIcon} alt='shopping cart icon'/>
            <h1>Restaurant Simulator</h1>
            <h2>Easy Ordering, Yummy Meals</h2>

        </header>
    );
};

export default AppHeader;