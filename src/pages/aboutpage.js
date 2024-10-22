import React from 'react';

function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sobre Cholo Crate</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          Cholo Crate es tu destino número uno para productos auténticos de la cultura panameña. 
          Fundada en 2024, nuestra misión es proporcionar productos de alta calidad que celebran 
          y honran la rica herencia de la cultura panameña.
        </p>
        <p className="text-gray-700">
          Nos enorgullecemos de ofrecer una amplia gama de productos, desde ropa y accesorios 
          hasta arte y decoración para el hogar. Cada artículo en Cholo Crate es cuidadosamente 
          seleccionado para garantizar autenticidad y calidad.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
