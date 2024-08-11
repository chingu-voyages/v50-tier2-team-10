import React from "react";
import "./cart-items.css";

const CartItems = ({cart, removeFromCart}) => {

    return (
        <>
        {/* code snippet from https://dev.to/papasanto/build-a-react-hooks-shopping-cart-with-usestate-and-useeffect-39hk on 2024-07-26 */}
        <div className="cart-items-container">
            {cart.map((item) => (
                <div className="ordered-item" key={item.id}>
                    <div className="restaurant">{item.name}</div>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                    <div className="item-description">{item.dsc}</div>
                    <div className="item-price">Price: ${item.price}</div>
                </div>
            ))}
        </div>
        
        </>
    )
}

export default CartItems;