import React, { useState, useEffect } from 'react';
import ProductForm from "./ProductForm"
import ProductList from "./ProductList"
import TotalCalories from "./TotalCalories"
import logo from "./assets/logo.jpeg"
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Load products from localStorage on initial load
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  useEffect(() => {
    // Update localStorage when products change
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addOrUpdateProduct = (product) => {
    const existingIndex = products.findIndex(p => p.productId === product.productId);
    if (existingIndex > -1) {
      // Update existing product
      const updatedProducts = [...products];
      updatedProducts[existingIndex] = product;
      setProducts(updatedProducts);
    } else {
      // Add new product
      setProducts([...products, { ...product, productId: Date.now() }]);
    }
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.productId !== productId));
  };

  const shareSummary = () => {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    let summary = 'Product Calorie Summary:\n';
    products.forEach(product => {
      summary += `${product.productName}: ${product.productAmount} kg - ${product.totalCalories} calories (total)\n`;
    });
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(summary)}`;
    window.open(whatsappUrl, '_blank');
  }

  const clearAllProducts = () => {
    setProducts([]);
  }

  return (
    <div className="App">
      <div className="app-title">
        <img src={logo} alt="NutriCalc Logo" className="app-logo" />
        <h1>NutriCalc: Daily Calorie Tracker</h1>
      </div>

      <ProductForm onAdd={addOrUpdateProduct} />
      <ProductList products={products} onEdit={addOrUpdateProduct} onDelete={deleteProduct} />
      {products.length > 0 && <TotalCalories products={products} />}

      <button id="shareSummary" disabled={!products.length} onClick={shareSummary}>Share Summary via WhatsApp</button>
      <button id="clearAll" disabled={!products.length} onClick={clearAllProducts}>Clear All Products</button>
    </div>
  );
}

export default App;
