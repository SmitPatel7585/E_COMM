import React, { useState, useEffect } from 'react';
import { getCategories } from '../services/categoryService';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            setCategories(categories);
        };
        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Category List</h1>
            <ul>
                {categories.map(category => (
                    <li key={category._id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
