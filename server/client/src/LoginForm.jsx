import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    usuario: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // aqui autenticación
    console.log('Form submitted:', formData);
  };

  const handleNavigateToAdmin = () => {
    navigate('/admindash');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: 'url(/assets/ufps.jpg)',
        backgroundSize: 'cover', // cucbrir fondo
        backgroundPosition: 'center', // Centra la imagen
        backgroundAttachment: 'fixed' // imagen fija
      }}
    >

      {/* Logo */}
      <div className="w-20 h-20 mb-8">
        <div className="w-full h-full bg-red-500 flex items-center justify-center text-white font-bold text-xl"
          style={{
            backgroundImage: 'url(/assets/logo-ufps.jpg)',
            backgroundSize: 'cover', // cucbrir fondo
          }}
        >
        </div>
      </div>

      <div className="w-full max-w-md bg-red-500 shadow-lg rounded-lg">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-white text-center mb-6">
            Iniciar sesión
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                name="usuario"
                placeholder="Usuario"
                value={formData.usuario}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div className="space-y-2">
              <input
                type="password"
                name="contrasena"
                placeholder="Contraseña"
                value={formData.contrasena}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <button
              onClick={handleNavigateToAdmin}
              className="w-full bg-white text-gray-800 font-semibold py-2 px-4 rounded hover:bg-red-100 transition duration-200"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;