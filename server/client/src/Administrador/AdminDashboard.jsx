import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AdminHeader from '../Components/AdminHeader';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Información base para eventos predeterminados
  const eventosBase = [
    { id: 1, name: 'Evento 1', description: 'Descripción 1', date: '2024-12-01', location: 'Lugar 1', capacity: 50 },
    { id: 2, name: 'Evento 2', description: 'Descripción 2', date: '2024-12-02', location: 'Lugar 2', capacity: 30 },
    { id: 3, name: 'Evento 3', description: 'Descripción 3', date: '2024-12-03', location: 'Lugar 3', capacity: 100 },
    { id: 4, name: 'Evento 4', description: 'Descripción 4', date: '2024-12-04', location: 'Lugar 4', capacity: 70 },
    { id: 5, name: 'Evento 5', description: 'Descripción 5', date: '2024-12-05', location: 'Lugar 5', capacity: 60 },
  ];

  const [eventos, setEventos] = useState([...eventosBase]);

  useEffect(() => {
    if (location.state?.nuevoEvento) {
      setEventos((prevEventos) => [...prevEventos, location.state.nuevoEvento]);

      navigate('/orgdash', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    if (eventos.length < 9) {
      const eventosExtra = Array.from({ length: 9 - eventos.length }, (_, index) => ({
        id: eventos.length + index + 1,
        name: `Evento ${eventos.length + index + 1}`,
        description: 'Descripción predeterminada',
        date: '2024-12-10',
        location: 'Lugar predeterminado',
        capacity: 50,
      }));
      setEventos((prevEventos) => [...prevEventos, ...eventosExtra]);
    }
  }, [eventos]);

  const handleNavigateToCrearEvento = () => {
    navigate('/crearevento');
  };

  return (
    <div className="bg-red-100 min-h-screen">
      {/* Header */}
      <AdminHeader />

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {eventos.map((evento) => (
              <div key={evento.id} className="bg-red-300 shadow-lg rounded-lg p-6">
                <h3 className="text-lg font-semibold">{evento.name}</h3>
                <p>Descripción: {evento.description}</p>
                <p>Fecha: {evento.date}</p>
                <p>Lugar: {evento.location}</p>
                <p>Capacidad: {evento.capacity}</p>
                <div className="space-y-3 mt-4">
                 
                  <div className="flex space-x-2">
                    <button className="ml-14 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-green-600 transition-colors">
                      Ver Evento
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

export default AdminDashboard;
