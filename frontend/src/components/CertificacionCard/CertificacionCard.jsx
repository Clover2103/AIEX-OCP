import React from "react";

const CertificacionCard = ({ titulo, infoClave, onOpenModal, documentos = [] }) => {
    const puntosClave = infoClave.slice(0, 3);

    return (
        <div className="col-lg-5 col-md-6 mb-4">
            <div className="card h-100 p-4 shadow-lg border-0 hover-lift" style={{ borderRadius: '1rem' }}>
                <div className="card-body d-flex flex-column ">
                    <h3 className="card-title text-center text-primary fw-bold mb-4">{titulo}</h3>
                    
                    {/* Lista de Puntos Clave */}
                    <ul className="list-unstyled flex-grow-1">
                        {puntosClave.map((item, index) => (
                            <li key={index} className="d-flex align-items-start mb-3">
                                <span className="text-success me-2 fs-5">✅</span> 
                                <div>
                                    <strong className="d-block">{item.titulo}:</strong>
                                    <span className="text-muted small">{item.contenido}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <h5 className="mt-1 text-center">Consulte aquí las normas de referencia para este esquema:</h5>

                    {/* 🔹 Lista de documentos PDF */}
                    {documentos.length > 0 && (
                        <ul className="list-unstyled mt-2 mb-3" >
                            {documentos.map((doc, index) => (
                                <li key={index}>
                                    <a
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-none text-primary"
                                    >
                                        📘 {doc.nombre}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Botón para abrir el Modal */}
                    <button 
                        className="btn btn-primary mt-auto w-100"
                        onClick={onOpenModal}
                    >
                        Ver Detalles del Esquema
                    </button>
                </div>
            </div>
        </div>
    );
};

export { CertificacionCard };
