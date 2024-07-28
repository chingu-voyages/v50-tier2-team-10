import React from 'react';
import cartIcon from './cart_icon.png';
import rsLogo from './logo_black.png';
import './appHeader.css';


const AppHeader = ({toggleCart}) => {


    return (
        <header className='header-page'>
            <div className='header-top'>
                <img className='rs-logo' src={rsLogo} alt='cloche with RS written on top'/>
                <button className='cart-button' onClick={toggleCart}>
                <img className='cart-icon' src={cartIcon} alt='shopping cart icon'/>
                    </button>
            </div>
            <div className='header-container'>
                <div className='title'>YumEase</div>
                <div className='sub-title'>Easy Ordering, Yummy Meals</div>
            </div>
        </header>
    );
};

export default AppHeader;