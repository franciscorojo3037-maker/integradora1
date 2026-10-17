import React from 'react';

export const ModalLectura = ({ lectura, onClose }) => {
  if (!lectura) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[85vh] overflow-hidden">
        {/* Encabezado */}
        <div className="flex justify-between items-center p-4 bg-gray-900 text-white">
          <h3 className="text-xl font-bold">{lectura.titulo}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white font-bold text-xl px-2 focus:outline-none"
            aria-label="Cerrar modal"
          >
            ✕
          </button>
        </div>

        {/* Cuerpo del Modal con Scroll Interno (Ajuste Sprint 2) */}
        <div className="p-6 overflow-y-auto max-h-[70vh] text-gray-800 space-y-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {lectura.categoria}
          </span>
          <hr className="border-gray-200" />
          <div className="text-sm leading-relaxed whitespace-pre-line">
            {lectura.contenidoCompleto}
          </div>
        </div>

        {/* Pie */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors"
          >
            Cerrar Guía
          </button>
        </div>
      </div>
    </div>
  );
};