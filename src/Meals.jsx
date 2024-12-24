import React, { useEffect, useState } from 'react';
import './components/Meals.css'

const Meals = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res) => res.json())
            .then((data) => {
                if (data.meals) {
                    setItems(data.meals);
                }
            });
    }, []);

    return (
        <div className='items-container'>
            <ul className='card'>
                {items.map(({ strMeal, strMealThumb, idMeal }) => (
                    <li key={idMeal} className='card'>
                        <p>{strMeal}</p>
                        <img src={strMealThumb} alt={strMeal} />
                        <p>{idMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Meals;
