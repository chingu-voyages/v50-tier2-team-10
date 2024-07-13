import React from "react";
import './cart.css';

const Cart = () => {




    return (
        <div>
            <div className="cart-contents">
                <div className="cart-title">Your Cart</div>
                <div className="cart-credit-container">
                    <h3 className="credit-title">Your Credit</h3>
                    <div className="current-credit">Current Credit: </div>
                    <input type='number' className="credit-to-add" placeholder="Enter amount"/>
                    <button className="add-credit">Add Credit</button>
                </div>
                <div className="order-summary-container">
                    <div className="order-summary-title">Order Summary</div>
                    <div>menu items</div>
                    <div className="order-total">Order Total (Subtotal): </div>
                    <div className="tip-title">Tip</div>
                    <input className="tip-to-add" type='number' placeholder="Enter tip amount"/>
                    <button className="add-tip">Add Tip</button>
                    <div className="tip-amount">Tip Amount: </div>
                    <div className="grand-total">Grand Total: </div>
                    <button className="pay-now">Pay Now</button>
                </div>
            </div>
        </div>


    );
};

export default Cart;