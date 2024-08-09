import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import AddProduct from './components/AddProduct'; 

function App() {
    return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <Routes>
                            <Route path="/" element={<ProductList />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/add-product" element={<AddProduct />} /> 
                        </Routes>
                    </header>
                </div>
            </Router>
    );
}

export default App;
