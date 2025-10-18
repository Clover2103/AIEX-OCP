// components/CertificacionModal.jsx

import React from "react";
import "./CertificacionModal.css"

// Subcomponente para renderizar módulos con listas (Requisitos y Proceso)
const ListaDetalle = ({ titulo, items }) => (
    <div className="mb-4">
        <h5 className="fw-bold text-secondary mb-2 border-bottom pb-1">{titulo}</h5>
        <ul className="list-group list-group-flush">
            {items.map((item, index) => (
                <li key={index} className="list-group-item d-flex align-items-start px-0 border-0">
                    <span className="text-primary me-2 fw-bold">»</span>
                    {Array.isArray(item.contenido) 
                        ? (
                            // Si es lista (como "Prerrequisitos")
                            <>
                                <strong>{item.titulo}:</strong> 
                                <span className="ms-2">{item.contenido.join(' | ')}</span>
                            </>
                        ) 
                        : (
                            // Si es texto plano (como "Modalidad de Evaluación")
                            <>
                                <strong>{item.titulo}:</strong> <span className="ms-2">{item.contenido}</span>
                            </>
                        )
                    }
                </li>
            ))}
        </ul>
    </div>
);

// Componente principal Modal
const CertificacionModal = ({ data, show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        // Añadida clase 'modal-dialog-centered' al div con la clase 'modal-dialog'
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header bg-primary text-white">
                        <h4 className="modal-title">{data.titulo} - Detalles</h4>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        
                        <p className="lead text-muted">{data.infoClave[0].contenido}</p>
                        <hr />

                        {/* BLOQUE DE REQUISITOS (Adaptado para mostrar listas o texto) */}
                        <h3 className="h5 fw-bold text-success mt-4">Requisitos y Criterios</h3>
                        <div className="row">
                            {data.requisitos.map((req, index) => (
                                <div key={index} className="col-12 mb-3">
                                    <strong className="d-block">{req.titulo}:</strong>
                                    {Array.isArray(req.contenido) ? (
                                        <ul className="list-group list-group-flush small">
                                            {req.contenido.map((item, idx) => <li key={idx} className="list-group-item py-1 ps-3 border-0">⚫ {item}</li>)}
                                        </ul>
                                    ) : (
                                        <p className="text-muted small">{req.contenido}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <hr />

                        {/* BLOQUE DE PROCESO PASO A PASO */}
                        <h3 className="h5 fw-bold text-success mt-4">Proceso de Certificación</h3>
                        <div className="accordion" id="procesoAccordion">
                            {data.proceso.map((paso, index) => (
                                <div key={index} className="accordion-item">
                                    <h2 className="accordion-header" id={`heading${paso.paso}`}>
                                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${paso.paso}`}>
                                            Paso {paso.paso}: {paso.titulo}
                                        </button>
                                    </h2>
                                    <div id={`collapse${paso.paso}`} className="accordion-collapse collapse" data-bs-parent="#procesoAccordion">
                                        <div className="accordion-body">
                                            <ul className="list-group list-group-flush small">
                                                {paso.contenido.map((item, idx) => (
                                                    <li key={idx} className="list-group-item py-1 border-0">
                                                        <span className="me-2 text-primary">→</span>{item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { CertificacionModal };