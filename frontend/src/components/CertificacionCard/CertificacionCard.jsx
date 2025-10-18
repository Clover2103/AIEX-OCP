// components/CertificacionCard.jsx

import React from "react";

// Este componente representa la tarjeta pequeña que se verá en la página principal.
const CertificacionCard = ({ titulo, infoClave, onOpenModal }) => {
    // Tomamos solo la información más relevante para la tarjeta (ej. 3 primeros puntos)
    const puntosClave = infoClave.slice(0, 3); 

    return (
        <div className="col-lg-5 col-md-6 mb-4">
            <div className="card h-100 p-4 shadow-lg border-0 hover-lift" style={{ borderRadius: '1rem' }}>
                <div className="card-body d-flex flex-column">
                    <h3 className="card-title text-center text-primary fw-bold mb-4">{titulo}</h3>
                    
                    {/* Lista de Puntos Clave */}
                    <ul className="list-unstyled flex-grow-1">
                        {puntosClave.map((item, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                                {/* Asumiendo un ícono de lista o verificación */}
                                <span className="text-success me-2 fs-5">✅</span> 
                                <div>
                                    <strong className="d-block">{item.titulo}:</strong>
                                    <span className="text-muted small">{item.contenido}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Botón para abrir el Modal */}
                    <button 
                        className="btn btn-primary mt-3 w-100"
                        onClick={onOpenModal}
                    >
                        Ver Detalles del Esquema
                    </button>
                </div>
            </div>
        </div>
    );
};

export {CertificacionCard};