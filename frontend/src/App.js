import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
      <Router>
        <div className="App">
            <header className="App-header">
                <CategoryList />
                <ProductList />
                <Routes>
                        <Route path="/" element={<ProductList />} />
                        <Route path="/product/:id" element={<ProductDetails />} />
                    </Routes>
            </header>
        </div>
        </Router>
    );
}

export default App;
