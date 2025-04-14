import React, { useState, useEffect } from 'react';
import { UserCircle, Calendar } from 'lucide-react';
import OrgHeader from '../Components/OrgHeader';


const EditarEvento= () => {
  const existingEvent = {
    name: 'Nombre del evento',
    description: 'Descripción del evento',
    category: 'Categoría',
    date: '2024-09-15',
    location: 'Lugar',
    capacity: '100'
  };

  const [eventData, setEventData] = useState(existingEvent);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated event data:', eventData);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      
      <OrgHeader />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-red-400 p-6 rounded-lg">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-medium text-center mb-6">Editar Evento</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Event name input */}
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              {/* Description input */}
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              {/* Category input */}
              <input
                type="text"
                name="category"
                value={eventData.category}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              {/* Date input with calendar icon */}
              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-red-300 rounded-md bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              {/* Location input */}
              <input
                type="text"
                name="location"
                value={eventData.location}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              {/* Capacity input */}
              <input
                type="number"
                name="capacity"
                value={eventData.capacity}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              {/* Action buttons */}
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 bg-red-400 text-white py-2 rounded-md hover:bg-red-500 transition-colors"
                >
                  Guardar Cambios
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EditarEvento;