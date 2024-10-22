import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Bienvenido a Cholo Crate</h1>
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">por The Prime</h2>
      
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <p className="text-xl text-gray-700 mb-6 text-center">
          Celebrando y preservando la cultura panameña a través de productos auténticos y de calidad.
        </p>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-800">Nuestro Impacto Social</h3>
        <ul className="list-disc pl-6 mb-6 text-gray-700">
          <li className="mb-2">Empoderamos a artesanos locales proporcionándoles una plataforma para mostrar y vender sus creaciones.</li>
          <li className="mb-2">Preservamos tradiciones culturales al promover productos que reflejan la rica herencia panameña.</li>
          <li className="mb-2">Educamos a nuestra comunidad sobre la historia y significado detrás de cada producto.</li>
          <li className="mb-2">Donamos el 5% de nuestras ganancias a organizaciones que apoyan a la juventud en comunidades marginadas.</li>
        </ul>
        
        <div className="text-center">
          <Link 
            to="/products" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 text-lg"
          >
            Explora Nuestros Productos
          </Link>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center mb-4">
          <Users className="w-8 h-8 text-blue-500 mr-3" />
          <h3 className="text-2xl font-bold text-gray-800">Sobre The Prime</h3>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <p className="text-gray-700 leading-relaxed">
            The Prime es un grupo dedicado a la preservación y celebración de la cultura panameña. 
            Fundado por entusiastas culturales y emprendedores sociales, nuestro objetivo es 
            crear un puente entre la tradición y la modernidad, ofreciendo productos que no solo 
            son estéticamente atractivos, sino que también cuentan una historia y contribuyen 
            positivamente a nuestra comunidad.
          </p>
        </div>
        <div className="mt-6 text-right">
          <Link 
            to="/about" 
            className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-300"
          >
            Conoce más sobre nosotros →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
