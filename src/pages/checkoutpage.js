// pages/CheckoutPage.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCart } from '../cartcontext';
import CheckoutForm from '../components/checkoutform';

function CheckoutPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Checkout</h2>
      <CheckoutForm />
    </div>
  );
}

export default CheckoutPage;