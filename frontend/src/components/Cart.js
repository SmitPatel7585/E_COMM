import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart } = useShoppingCart();

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cart.map(product => (
                    <li key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            {product.name} - ${product.price}
                        </Link>
                        <button onClick={() => removeFromCart(product._id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
