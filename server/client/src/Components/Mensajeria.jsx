import React, { useState } from "react";

const Mensajeria = () => {
  const contactos = [
    { id: 1, nombre: "Pepito" },
    { id: 2, nombre: "Maria" },
    { id: 3, nombre: "Juan" },
    { id: 4, nombre: "Sofia" },
  ];

  const [contactoSeleccionado, setContactoSeleccionado] = useState(contactos[0]);

  const [mensajes, setMensajes] = useState({
    1: [],
    2: [],
    3: [],
    4: [],
  });

  const [mensajeActual, setMensajeActual] = useState("");

  const enviarMensaje = () => {
    if (mensajeActual.trim() === "") return;

    setMensajes((prevMensajes) => ({
      ...prevMensajes,
      [contactoSeleccionado.id]: [
        ...prevMensajes[contactoSeleccionado.id],
        { texto: mensajeActual, propio: true },
      ],
    }));

    setMensajeActual("");
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <span>Participante</span>
        </div>

        <div className="bg-red-300 p-4">
          <h2 className="text-xl mb-4">Mensajería</h2>

          <div className="bg-white">
            <div className="flex">
              <div className="w-1/3 border-r border-gray-300">
                {contactos.map((contacto) => (
                  <div
                    key={contacto.id}
                    className={`border-b border-gray-300 p-3 flex items-center gap-2 cursor-pointer ${
                      contacto.id === contactoSeleccionado.id
                        ? "bg-gray-100"
                        : ""
                    }`}
                    onClick={() => setContactoSeleccionado(contacto)}
                  >
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <span>{contacto.nombre}</span>
                  </div>
                ))}
              </div>

              {/* Área de chat */}
              <div className="w-2/3 flex flex-col">
                <div className="border-b border-gray-300 p-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-lg">{contactoSeleccionado.nombre}</span>
                </div>

                {/* mensajes */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {mensajes[contactoSeleccionado.id]?.map((mensaje, index) => (
                    <div
                      key={index}
                      className={`${
                        mensaje.propio
                          ? "text-right bg-blue-100"
                          : "text-left bg-gray-100"
                      } p-2 rounded-lg`}
                    >
                      {mensaje.texto}
                    </div>
                  ))}
                </div>

                {/* Entrada para escribir un mensaje */}
                <div className="border-t border-gray-300 p-3 flex">
                  <input
                    type="text"
                    value={mensajeActual}
                    onChange={(e) => setMensajeActual(e.target.value)}
                    placeholder="Escribe un mensaje"
                    className="flex-1 p-2 border border-gray-300 rounded-l"
                  />
                  <button
                    onClick={enviarMensaje}
                    className="bg-blue-500 text-white px-4 rounded-r"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mensajeria;
