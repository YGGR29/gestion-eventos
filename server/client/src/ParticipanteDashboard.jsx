import React, { useState } from 'react';
import { UserCircle } from 'lucide-react';

const ParticipanteDashboard = () => {
  const [events] = useState([
    {
      id: 1,
      name: 'Nombre evento',
      participants: 'Numero de participantes',
      organizer: 'Organizador evento'
    },
    {
      id: 2,
      name: 'Nombre evento',
      participants: 'Numero de participantes',
      organizer: 'Organizador evento'
    },
    {
      id: 3,
      name: 'Nombre evento',
      participants: 'Numero de participantes',
      organizer: 'Organizador evento'
    }
  ]);

  // Handle registration for an event
  const handleRegister = (eventId) => {
    console.log(`Registering for event ${eventId}`);
    // Here you would typically handle the registration process
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <UserCircle className="h-10 w-10 text-gray-400" />
            <h1 className="text-xl font-medium">Participante</h1>
          </div>
          <button className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition-colors">
            Mensajeria
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Events section */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Events header */}
          <div className="bg-red-400 p-4">
            <h2 className="text-xl text-white">Eventos</h2>
          </div>

          {/* Events grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="bg-red-400 p-4 rounded-lg text-white space-y-2"
                >
                  {/* Event details */}
                  <h3 className="font-medium">{event.name}</h3>
                  <p className="text-sm">{event.participants}</p>
                  <p className="text-sm">{event.organizer}</p>
                  
                  {/* Register button */}
                  <button
                    onClick={() => handleRegister(event.id)}
                    className="mt-4 w-full bg-white text-red-500 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Inscribirse
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ParticipanteDashboard;