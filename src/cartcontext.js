// cartcontext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Buscar si existe el producto con el mismo plan
      const existingItem = prevCart.find(
        item => item.id === product.id && item.months === product.months
      );

      if (existingItem) {
        return prevCart.map(item =>
          (item.id === product.id && item.months === product.months)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Si no existe, añadir nuevo item con los detalles del plan
      return [...prevCart, {
        ...product,
        quantity: 1,
        months: product.months || 1,
        monthlyPrice: product.monthlyPrice || product.price,
        totalPrice: product.totalPrice || product.price
      }];
    });
  };

  // Función actualizada para remover items del carrito
  const removeFromCart = (productId, months) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.id === productId && item.months === months)
    ));
  };

  // Función actualizada para actualizar la cantidad de un producto
  const updateQuantity = (productId, months, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(prevCart =>
      prevCart.map(item =>
        (item.id === productId && item.months === months)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Función actualizada para calcular el total del carrito
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.totalPrice * item.quantity), 0);
  };

  // Nueva función para obtener el desglose mensual
  const getMonthlyTotal = () => {
    return cart.reduce((total, item) => total + (item.monthlyPrice * item.quantity), 0);
  };

  // Nueva función para obtener la duración máxima de suscripción
  const getMaxSubscriptionMonths = () => {
    return cart.reduce((max, item) => Math.max(max, item.months || 1), 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getMonthlyTotal,
      getMaxSubscriptionMonths,
      // Getters útiles
      itemCount: cart.length,
      totalAmount: getCartTotal(),
      monthlyAmount: getMonthlyTotal(),
      maxMonths: getMaxSubscriptionMonths(),
      isEmpty: cart.length === 0
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export default CartContext;