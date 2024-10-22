// components/ProductItem.js
import React, { useState } from 'react';
import { useCart } from '../cartcontext';
import { PlanSelector } from './planselector';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();
  const [showPlanSelector, setShowPlanSelector] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelect = (planDetails) => {
    setSelectedPlan(planDetails);
  };

  const handleAddToCart = () => {
    if (selectedPlan) {
      const productWithPlan = {
        ...product,
        months: selectedPlan.months,
        totalPrice: selectedPlan.totalPrice,
        monthlyPrice: selectedPlan.monthlyPrice
      };
      addToCart(productWithPlan);
      setShowPlanSelector(false);
      setSelectedPlan(null);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mb-4">Precio: ${product.price}/mes</p>
      
      {!showPlanSelector ? (
        <button 
          onClick={() => setShowPlanSelector(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300 w-full"
        >
          Seleccionar Plan
        </button>
      ) : (
        <div className="space-y-4">
          <PlanSelector 
            basePrice={product.price} 
            onPlanSelect={handlePlanSelect}
          />
          
          <div className="flex gap-3">
            <button 
              onClick={handleAddToCart}
              disabled={!selectedPlan}
              className={`flex-1 py-2 px-4 rounded font-bold
                ${selectedPlan 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } transition-colors duration-300`}
            >
              Añadir al Carrito
            </button>
            
            <button 
              onClick={() => {
                setShowPlanSelector(false);
                setSelectedPlan(null);
              }}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded transition-colors duration-300"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;