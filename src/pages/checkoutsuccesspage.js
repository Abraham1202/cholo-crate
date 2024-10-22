import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, Home } from 'lucide-react';

function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          ¡Gracias por tu compra!
        </h2>
        
        <p className="text-gray-600 mb-8">
          Tu pedido ha sido procesado exitosamente. Recibirás un correo electrónico 
          con los detalles de tu compra.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/products"
            className="inline-flex items-center justify-center bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full sm:w-auto"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Seguir Comprando
          </Link>
          
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-gray-100 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-200 transition-colors duration-300 mt-4 w-full sm:w-auto"
          >
            <Home className="w-5 h-5 mr-2" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;