// components/ProductList.js
import React from 'react';
import ProductItem from './ProductItem';
// Import images
import collarImage from '../assets/Collar.png';
import molaImage from '../assets/mola.jpeg';
import naguaImage from '../assets/Nagua.png';

const products = [
  { 
    id: 1, 
    name: 'Collar', 
    price: 10,
    image: collarImage
  },
  { 
    id: 2, 
    name: 'Mola', 
    price: 15,
    image: molaImage
  },
  { 
    id: 3, 
    name: 'Nagua', 
    price: 20,
    image: naguaImage
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;