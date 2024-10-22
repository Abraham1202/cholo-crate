import React from 'react';
import ProductList from '../components/ProductList';

function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Nuestros Productos</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <ProductList />
      </div>
    </div>
  );
}

export default ProductsPage;