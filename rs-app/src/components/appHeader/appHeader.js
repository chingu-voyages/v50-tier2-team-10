import React, { useState } from 'react';
import cartIcon from './cart_icon.png';
import rsLogo from './logo_black.png';
import './appHeader.css';


const AppHeader = () => {






    return (
        <header className='header-page'>
            <div className='header-top'>
                <img className='rs-logo' src={rsLogo} alt='cloche with RS written on top'/>
                <img className='cart-icon' src={cartIcon} alt='shopping cart icon'/>
            </div>
            <div className='header-container'>
                <h1 className='title'>Restaurant Simulator</h1>
                <h2 className='sub-title'>Easy Ordering, Yummy Meals</h2>
            </div>
        </header>
    );
};

export default AppHeader;