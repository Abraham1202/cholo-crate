// components/Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartcontext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(itemId, newQuantity);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">No hay productos en el carrito.</p>
          <Link 
            to="/products" 
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Ir a Productos
          </Link>
        </div>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="py-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">Precio: ${item.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="bg-gray-200 px-2 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold">
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            
            <div className="flex justify-end space-x-4">
              <Link 
                to="/products" 
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300"
              >
                Seguir Comprando
              </Link>
              <Link 
                to="/checkout" 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Proceder al Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;