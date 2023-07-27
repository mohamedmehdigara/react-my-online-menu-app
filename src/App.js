// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductPage from './components/Product/ProductPage';
import CartPage from './components/Cart/CartPage';
import PaymentPage from './components/Payment/PaymentPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product" element={<ProductPage/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
