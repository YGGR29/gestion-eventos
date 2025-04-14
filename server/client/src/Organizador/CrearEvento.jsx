import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import OrgHeader from '../Components/OrgHeader';
import { useNavigate } from 'react-router-dom';

const CrearEvento = () => {
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    name: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: '',
    capacity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoEvento = {
      id: Date.now(),
      name: eventData.name,
      description: eventData.description,
      category: eventData.category,
      date: eventData.date,
      time: eventData.time,
      location: eventData.location,
      capacity: eventData.capacity
    };

    navigate('/orgdash', { state: { nuevoEvento } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <OrgHeader />
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-red-400 p-6 rounded-lg">
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-medium text-center mb-6">Crear Evento</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre del evento"
                value={eventData.name}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <textarea
                name="description"
                placeholder="Descripción"
                value={eventData.description}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="text"
                name="category"
                placeholder="Categoría"
                value={eventData.category}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <div className="relative">
                <input
                  type="date"
                  name="date"
                  value={eventData.date}
                  onChange={handleChange}
                  className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="time"
                  name="time"
                  value={eventData.time}
                  onChange={handleChange}
                  className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                />
                <Calendar className="absolute right-2 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <input
                type="text"
                name="location"
                placeholder="Lugar"
                value={eventData.location}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <input
                type="number"
                name="capacity"
                placeholder="Capacidad máxima"
                value={eventData.capacity}
                onChange={handleChange}
                className="w-full p-2 border border-red-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
              />

              <button
                type="submit"
                className="w-full bg-red-400 text-white py-2 rounded-md hover:bg-red-500 transition-colors"
              >
                Crear Evento
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CrearEvento;
