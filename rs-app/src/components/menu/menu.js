import React, { useState, useEffect } from "react";
import { getMenu } from "../../menu-api/menu-api";
import './menu.css';

const Menu = () => {
    const [menuData, setMenuData] = useState({});
    const [ categories, setCategories ] = useState([]);
    const [selectedCategory, setSelectedCategory ] = useState('all');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMenuData = async () => {
            try {
                const data = await getMenu();
                setMenuData(data);
                const category = Object.keys(data).filter(key => key !== 'pagination');
                setCategories(['all', ...category]);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        loadMenuData();
    }, []);

    const getMenuItems = () => {
        if (selectedCategory === 'all') {
            return Object.values(menuData).filter(
                item => Array.isArray(item)
            ).flat();
        }
        return menuData[selectedCategory] || [];
    }

    if (isLoading) return <div>Loading... Please wait...</div>
    if (error) return <div>Error: {error} </div>

    const showItems = getMenuItems();

    return (
        <div>
            <div className="select-category">
                {/* code by Kolade Chris from https://www.freecodecamp.org/news/html-select-tag-how-to-make-a-dropdown-menu-or-combo-list/ tutorial */}
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category === 'all'? 'All Items' : category }
                        </option>
                    ))}
                </select>
            </div>
            <div className="menu-items">
                {showItems.map(item => (
                <div key={item.id} className="item-card">
                    <img className="item-image" src={item.img} alt={item.name}/>
                    <div className="item-details">
                        <h3 className="restaurant-name">{item.name}</h3> 
                        <div className="item-description">Description: {item.dsc}</div>
                        <div className="item-price">Price: {item.price}</div>
                        <div className="item-country">Location: {item.country}</div>
                    </div>
                    <div className="order-button">
                        <button>Add to Order</button>
                    </div>
                </div>
                ))}
            </div>
        </div>




    );
};

export default Menu;