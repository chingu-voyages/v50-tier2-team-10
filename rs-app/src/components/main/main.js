import React, {useEffect, useState} from "react";
import './main.css';
import CartItems from "../cart-items/cart-items";
import Menu from "../menu/menu";
import AppHeader from "../appHeader/appHeader";


const Main = () => {
    const [credit, setCredit] = useState(0);
    const [creditToAdd, setCreditToAdd] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [tip, setTip] = useState(0);
    const [tipToAdd, setTipToAdd] = useState(0);
    const [isCartVisible, setCartVisible] = useState(false);

    const addToCart = (menuItem) => {
        setCart([...cart, menuItem]);
    };

    const removeFromCart = (item) => {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    };

    useEffect(() => {
        setCartSubTotal(cart.reduce((sum, item) => sum + item.price, 0));
    }, [cart]);

    useEffect(() => {
        setCartTotal(cartSubTotal + tip);
    }, [cartSubTotal, tip]);

    const payNow = () => {
        if (credit >= cartTotal) {
        setCredit(credit - cartTotal);
        setTip(0);
        setCart([]);
        alert("Payment successful! Thank you for your order!")
        } else {
            alert("Insufficient credit. Please add more credit to your account.")
        }
    };

    const handlePayNow = () => {
        payNow();
    }

    const toggleCart = () => {
        setCartVisible(!isCartVisible);
    }

    const handleCloseCart = () => {
        toggleCart();
    };

    const handleCreditChange = (e) => {
        setCreditToAdd(Number(e.target.value));
    };

    const handleTipChange = (e) => {
        setTipToAdd(Number(e.target.value));
    };

    const addCredit = () => {
        setCredit(credit + creditToAdd);
        setCreditToAdd(0);
    };

    const addTip = () => {
        if ((tip + tipToAdd) < 0) {
            alert("Tip cannot be negative. Please try again.")
            setTip(0);
            setTipToAdd(0);
        } else {
        setTip(tip + tipToAdd);
        setTipToAdd(0);}
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
                    <div className="current-credit">{`Current Credit: $${credit}`}</div>
                    <input type='number' className="credit-to-add" min="0" step="1" value={creditToAdd} onChange={handleCreditChange} placeholder="Enter amount"/>
                    <button className="add-credit" onClick={addCredit}>Add Credit</button>
                </div>
                <div className="order-summary-container">
                    <h3 className="order-summary-title">Order Summary</h3>
                    <CartItems cart={cart} removeFromCart={removeFromCart} />
                    <div className="order-total">Order Total (Subtotal): ${cartSubTotal}</div>
                    <h4 className="tip-title">Tip</h4>
                    <input className="tip-to-add" type='number' value={tipToAdd} onChange={handleTipChange} placeholder="Enter tip amount"/>
                    <button className="add-tip" onClick={addTip}>Add Tip</button>
                    <div className="tip-amount">{`Tip Amount: $${tip}`}</div>
                    <h4 className="grand-total">{`Grand Total: $${cartTotal}`}</h4>
                    <button className="pay-now" onClick={handlePayNow}>Pay Now</button>
                </div>
            </div>)}
            
        </div>


    );
};

export default Main;