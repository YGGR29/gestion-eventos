import React from 'react';
import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate


const AdminHeader = () => {

  const navigate = useNavigate(); 

  const handleNavigateToCrearEvento = () => {
    navigate('/creareventoad');
  };

  const handleNavigateToMensajeria = () => {
    navigate('/mensajeriaA');
  };

  const handleNavigateToVerUsuarios = () => {
    navigate('/veruser');
  };

  const handleNavigateToAdminDash = () => {
    navigate('/admindash');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <UserCircle className="h-10 w-10 text-gray-400" />
          <h1 className="text-xl font-medium">Administrador</h1>
        </div>
        <button onClick={handleNavigateToCrearEvento}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors"
        >
          Crear Evento
        </button>
        <button onClick={handleNavigateToVerUsuarios}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors"
        >
          Administrar Usuarios
        </button>
        <button onClick={handleNavigateToAdminDash}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors"
        >
         Administrar Eventos
        </button>
        <button onClick={handleNavigateToMensajeria}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors"
        >
          Mensajeria
        </button>
      </div>
    </header>
  );
};

export default AdminHeader;
