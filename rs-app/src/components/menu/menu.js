import React, { useState, useEffect } from "react";
import { getMenu } from "../../menu-api/menu-api";
import defaultImg from "../../images/placeholder.png";
import './menu.css';

const Menu = ({ addToCart }) => {
    const [menuData, setMenuData] = useState({});
    const [ categories, setCategories ] = useState([]);
    const [selectedCategory, setSelectedCategory ] = useState('Popular Dishes');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    // map of changed category names to original
    const changedCategories = {
        'best-foods': 'Popular Dishes',
        'our-foods': 'All Dishes',
        'fried-chicken': 'Fried Chicken',
        'ice-cream': 'Ice Cream'
    };

    useEffect(() => {
        const loadMenuData = async () => {
            try {
                const data = await getMenu();
                console.log('Menu Data: ', data);
                setMenuData(data);
                const category = Object.keys(data).filter(key => key !== 'pagination');
                const formattedCategories = category.map(selection => {
                    let formatted = selection.replace(/\b\w/g, char => char.toUpperCase());

                    if (formatted === 'Best-Foods') {
                        formatted = 'Popular Dishes';
                    }
                    if (formatted === 'Our-Foods') {
                        formatted = "All Dishes";
                    }
                    if (formatted === 'Fried-Chicken') {
                        formatted = 'Fried Chicken';
                    }
                    if (formatted === 'Ice-Cream') {
                        formatted = "Ice Cream";
                    }


                    return formatted;

                })
                setCategories(formattedCategories);
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        };

        loadMenuData();
    }, []);

    const getMenuItems = () => {
        // Find original key for selected category
        const originalCategory = Object.keys(changedCategories).find(key => changedCategories[key] === selectedCategory) || selectedCategory.toLowerCase().replace(/\s+/g, '-');
        if (originalCategory === 'our-foods') {
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
        return menuData[originalCategory] ? menuData[originalCategory].map(item => (
            { ...item, category: originalCategory})) : [];
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
            <div className="craving">
                <h2>What's your craving today?</h2>
            </div>
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