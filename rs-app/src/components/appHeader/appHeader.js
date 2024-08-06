import React from 'react';
import cartIcon from '../../images/cart_icon_orange.png';
import rsLogo from '../../images/logo_orange.png';
import cartFull from "../../images/cart_filled_2.png";
import './appHeader.css';


const AppHeader = ({toggleCart, cart}) => {


    return (
        <header className='header-page'>
            <div className='header-top'>
                <a href="#"><img className='rs-logo' src={rsLogo} alt='cloche with fork and knife on top'/></a>
                <button className='cart-button' onClick={toggleCart}>
                    {(cart.length) > 0 ?  <img className='cart-icon' src={cartFull} alt='cart with items'/> :
                    <img className='cart-icon' src={cartIcon} alt='shopping cart icon'/>}
                    
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