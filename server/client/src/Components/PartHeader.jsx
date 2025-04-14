import React from 'react';
import { UserCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';  // Importar useNavigate


const PartHeader = () => {

    const navigate = useNavigate();

    const handleNavigateToMensajeria = () => {
        navigate('/mensajeriaP');
    };

    const handleNavigateInscripcion = () => {
        navigate('/inscripcion');
    };

    const handleNavigateDashboard = () => {
        navigate('/pardash');
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <UserCircle className="h-10 w-10 text-gray-400" />
                    <h1 className="text-xl font-medium">Participante</h1>
                </div>
                <button onClick={handleNavigateInscripcion}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-500 transition-colors"
                >
                    Inscripciones
                </button>
                <button onClick={handleNavigateDashboard}
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

export default PartHeader;
