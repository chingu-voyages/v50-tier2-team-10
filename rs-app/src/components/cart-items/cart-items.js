import React from "react";

const CartItems = ({cart, removeFromCart}) => {

    return (
        <>
        <div className="cart-items-container">
            {cart.map((item) => (
                <div key={item.id}>
                    {`${item.dsc}: $${item.price}`}
                    <input type="submit" value="remove" onClick={() => removeFromCart(item)} />
                </div>
            ))}
        </div>
        
        </>
    )
}

export default CartItems;