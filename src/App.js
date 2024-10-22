// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import ProductsPage from './pages/productspage';
import AboutPage from './pages/aboutpage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/checkoutpage';
import CheckoutSuccessPage from './pages/checkoutsuccesspage';
import Header from './components/header';
import { CartProvider } from './cartcontext';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Header />
          <main className="py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
