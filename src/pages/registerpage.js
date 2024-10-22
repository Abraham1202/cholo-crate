
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate that the passwords match
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Simulate a fake registration process through an API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Simulate a successful registration message from the API
        setSuccessMessage('Registro exitoso, redirigiendo a iniciar sesión...');
        setError('');
        setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
      } else {
        setError('Error en el registro');
        setSuccessMessage('');
      }
    } catch (err) {
      setError('Error en el registro. Por favor, intenta nuevamente.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Registrarse</h2>
      <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirmar Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirmar Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Registrarse
          </button>
        </div>
        {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>}
      </form>
    </div>
  );
};

export default RegisterPage;
