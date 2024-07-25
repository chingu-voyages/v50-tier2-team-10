import React from "react";

const CartItems = ({cart, removeFromCart}) => {

    return (
        <>
        {/* code snippet from https://dev.to/papasanto/build-a-react-hooks-shopping-cart-with-usestate-and-useeffect-39hk on 2024-07-26 */}
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