import React from "react";
import './menu.css';

const Menu = () => {





    return (
        <div>
            <div className="menu-items">
                <div className="item-card">
                    <img className="item-image" src=""/>
                    <div className="item-details">
                        <h3 className="restaurant-name">Restaurant name</h3> {/* insert props  */}
                        <div className="item-description">Description:</div>
                        <div className="item-price">Price:</div>
                        <div className="item-country">Country: </div>
                    </div>
                    <div className="order-button">
                        <button>Add to Order</button>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default Menu;