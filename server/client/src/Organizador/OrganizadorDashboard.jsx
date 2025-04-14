import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OrgHeader from '../Components/OrgHeader';

const OrganizadorDashboard = () => {
  const [eventos, setEventos] = useState([]); // Almacena los eventos
  const navigate = useNavigate();
  const location = useLocation(); // Permite recibir datos desde la navegación

  // Verifica si hay un nuevo evento en el estado de navegación y lo agrega a la lista
  useEffect(() => {
    if (location.state?.nuevoEvento) {
      setEventos((prevEventos) => [...prevEventos, location.state.nuevoEvento]);

      // Limpia el estado después de procesarlo para evitar duplicados
      navigate('/orgdash', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleNavigateToCrearEvento = () => {
    navigate('/crearevento');
  };

  const handleNavigateToVerPart = () => {
    navigate('/verpart');
  };

  return (
    <div className="bg-red-100 min-h-screen">
      {/* Header */}
      <OrgHeader />

      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-6">
          <div className="bg-red-400 p-6 flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Eventos</h2>
            <button
              onClick={handleNavigateToCrearEvento}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Crear Evento
            </button>
          </div>

          {/* Tarjetas de eventos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {eventos.map((evento) => (
              <div key={evento.id} className="bg-red-400 shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold">{evento.name}</h3>
                <p>Descripción: {evento.description}</p>
                <p>Fecha: {evento.date}</p>
                <p>Lugar: {evento.location}</p>
                <p>Capacidad: {evento.capacity}</p>
                <div className="space-y-3 mt-4">
                  <button
                    onClick={handleNavigateToVerPart}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                    Participantes
                  </button>
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
                      Editar
                    </button>
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors">
                      Estadísticas
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Si no hay eventos, muestra un mensaje */}
          {eventos.length === 0 && (
            <p className="text-center text-gray-500">No hay eventos creados. ¡Empieza creando uno!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrganizadorDashboard;
