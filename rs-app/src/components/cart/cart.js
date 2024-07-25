import React, {useState} from "react";
import './cart.css';
import CartItems from "../cart-items/cart-items";
import Menu from "../menu/menu";
import AppHeader from "../appHeader/appHeader";


const Cart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [tip, setTip] = useState(0);
    const [isCartVisible, setCartVisible] = useState(false);

    const addToCart = (menuItem) => {
        setCart([...cart, menuItem]);
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    };

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    }

    const handleCloseCart = () => {
        toggleCart();
    };



    return (
        <div>
            <AppHeader toggleCart={toggleCart} />
            <Menu addToCart={addToCart} />
           {isCartVisible && ( 
            <div className="cart-contents">
                <button className="close-cart" onClick={handleCloseCart}>
                    X
                </button>
                <div className="cart-title">Your Cart</div>
                <div className="cart-credit-container">
                    <h3 className="credit-title">Your Credit</h3>
                    <div className="current-credit">Current Credit: </div>
                    <input type='number' className="credit-to-add" placeholder="Enter amount"/>
                    <button className="add-credit">Add Credit</button>
                </div>
                <div className="order-summary-container">
                    <div className="order-summary-title">Order Summary</div>
                    <CartItems cart={cart} removeFromCart={removeFromCart} />
                    <div className="order-total">Order Total (Subtotal): </div>
                    <div className="tip-title">Tip</div>
                    <input className="tip-to-add" type='number' placeholder="Enter tip amount"/>
                    <button className="add-tip">Add Tip</button>
                    <div className="tip-amount">Tip Amount: </div>
                    <div className="grand-total">Grand Total: </div>
                    <button className="pay-now">Pay Now</button>
                </div>
            </div>)}
            
        </div>


    );
};

export default Cart;