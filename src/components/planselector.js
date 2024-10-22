// components/PlanSelector.js
import React, { useState } from 'react';

export const PlanSelector = ({ basePrice, onPlanSelect }) => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  
  const plans = [
    { months: 1, label: '1 MES', discount: 0 },
    { months: 3, label: '3 MESES', discount: 5 },
    { months: 6, label: '6 MESES', discount: 10 },
    { months: 12, label: '12 MESES', discount: 15 },
  ];

  const calculatePrice = (months, discount) => {
    const monthlyPrice = basePrice * (1 - discount / 100);
    return (monthlyPrice * months).toFixed(2);
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
            1
          </div>
          <h3 className="text-lg font-bold">SELECCIONA TU PLAN</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          {plans.map((plan) => (
            <button
              key={plan.months}
              onClick={() => {
                setSelectedPlan(plan.months);
                onPlanSelect({
                  months: plan.months,
                  totalPrice: calculatePrice(plan.months, plan.discount),
                  monthlyPrice: (basePrice * (1 - plan.discount / 100)).toFixed(2)
                });
              }}
              className={`p-3 rounded-lg border-2 transition-all
                ${selectedPlan === plan.months 
                  ? 'border-blue-500 bg-blue-50 text-blue-500' 
                  : 'border-gray-200 hover:border-gray-300'
                }`}
            >
              <div className="text-sm font-bold">{plan.label}</div>
              {plan.discount > 0 && (
                <div className="text-xs text-green-600 font-medium">
                  {plan.discount}% OFF
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Precio mensual:</span>
          <span className="font-bold">
            ${(basePrice * (1 - (plans.find(p => p.months === selectedPlan)?.discount || 0) / 100)).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center font-bold">
          <span>Total a pagar:</span>
          <span className="text-xl text-blue-600">
            ${calculatePrice(selectedPlan, plans.find(p => p.months === selectedPlan)?.discount || 0)}
          </span>
        </div>
      </div>
    </div>
  );
};