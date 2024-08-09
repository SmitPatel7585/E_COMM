import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setProducts(products);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            <h2>{product.productName}</h2>
                            <img src={product.image} alt={product.productName} style={{ width: '100px' }} />
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
