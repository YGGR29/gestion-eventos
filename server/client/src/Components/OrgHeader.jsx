import React from 'react';
import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate


const OrgHeader = () => {

  const navigate = useNavigate(); 

  const handleNavigateToMensajeria = () => {
    navigate('/mensajeriaO');
  };

  const handleNavigateToEventos = () => {
    navigate('/orgdash');
  };


  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <UserCircle className="h-10 w-10 text-gray-400" />
          <h1 className="text-xl font-medium">Organizador</h1>
        </div>
        <button onClick={handleNavigateToEventos}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors"
        >
          Mis Eventos
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

export default OrgHeader;
