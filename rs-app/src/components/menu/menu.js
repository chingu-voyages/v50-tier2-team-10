import React, { useState, useEffect } from "react";
import { getMenu } from "../../menu-api/menu-api";
// import Img from "../brokenImage/brokenImage";
import defaultImg from "../../images/placeholder.png";
import './menu.css';

const Menu = ({ addToCart }) => {
    const [menuData, setMenuData] = useState({});
    const [ categories, setCategories ] = useState([]);
    const [selectedCategory, setSelectedCategory ] = useState('best-foods');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMenuData = async () => {
            try {
                const data = await getMenu();
                console.log('Menu Data: ', data);
                setMenuData(data);
                const category = Object.keys(data).filter(key => key !== 'pagination');
                setCategories([...category]);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        loadMenuData();
    }, []);

    const getMenuItems = () => {
        if (selectedCategory === 'our-foods') {
            const uniqueMenuItems = new Set();
            return menuData['our-foods']
                ? menuData['our-foods'].filter(item => {
                    if (!uniqueMenuItems.has(item.id)) {
                        uniqueMenuItems.add(item.id);
                        return true;
                    }
                    return false;
                }).map(item => ({ ...item, category: 'our-foods' }))
                : [];
            }
        return menuData[selectedCategory] ? menuData[selectedCategory].map(item => (
            { ...item, category: selectedCategory})) : [];
    }

    if (isLoading) return <div>Loading... Please wait...</div>
    if (error) return <div>Error: {error} </div>

    // from https://www.positronx.io/how-to-handle-images-onload-and-onerror-events-in-react-js/
    const handleImageError = (e) => {
        e.currentTarget.src = defaultImg;
    }

    const showItems = getMenuItems();
    console.log('Filtered items: ', showItems);

    return (
        <div>
            <div className="select-category">
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
                <div key={`${item.category}-${item.id}`} className="item-card">
                    <img className="item-image" src={item.img} alt={item.dsc} onError={handleImageError}/>
                    <div className="item-details">
                        <h3 className="restaurant-name">{item.name}</h3> 
                        <div className="item-description">Description: {item.dsc}</div>
                        <div className="item-price">Price: ${item.price}</div>
                        <div className="item-country">Location: {item.country}</div>
                        <button onClick={() => addToCart(item)}>Add to Order</button> 
                    </div>
                    
                </div>
                ))}
            </div>
        </div>




    );
};

export default Menu;