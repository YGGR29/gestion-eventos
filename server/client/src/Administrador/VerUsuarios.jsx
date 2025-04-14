import React from 'react';
import AdminHeader from '../Components/AdminHeader';

const VerParticipantes = () => {
  const participantes = [
    { id: 1, nombre: 'Juan Pérez', correo: 'juan@example.com' },
    { id: 2, nombre: 'María López', correo: 'maria@example.com' },
    { id: 3, nombre: 'Carlos García', correo: 'carlos@example.com' },
    { id: 4, nombre: 'Ana Martínez', correo: 'ana@example.com' },
  ];

  return (
    <div className="min-h-screen bg-red-200">
      {/* Header */}
      <AdminHeader />

      <div className="py-8">
        <h1 className="text-3xl font-bold text-center text-red-600">Usuarios Registrados</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-red-400 shadow-md rounded-lg p-6">
        <table className="bg-white table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Nombre</th>
              <th className="border border-gray-200 px-4 py-2 text-left">Correo</th>
            </tr>
          </thead>
          <tbody>
            {participantes.map((participante) => (
              <tr key={participante.id} className="hover:bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">{participante.id}</td>
                <td className="border border-gray-200 px-4 py-2">{participante.nombre}</td>
                <td className="border border-gray-200 px-4 py-2">{participante.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerParticipantes;
