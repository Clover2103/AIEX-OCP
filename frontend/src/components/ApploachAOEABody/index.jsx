import React, { useState } from "react";
import { CertificacionCard } from "../CertificacionCard/CertificacionCard";
import { CertificacionModal } from "../CertificacionModal/CertificacionModal";
import { ESQUEMA_AOEA } from "../../data/EsquemaAOEA"; // Datos

const ApploachAOEABody = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEsquema, setSelectedEsquema] = useState(null);

    const handleOpenModal = (esquemaData) => {
        setSelectedEsquema(esquemaData);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEsquema(null);
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <CertificacionCard
                    titulo={ESQUEMA_AOEA.titulo}
                    infoClave={ESQUEMA_AOEA.infoClave}
                    documentos={ESQUEMA_AOEA.documentos} 
                    onOpenModal={() => handleOpenModal(ESQUEMA_AOEA)}
                />
            </div>

            {selectedEsquema && (
                <CertificacionModal
                    data={selectedEsquema}
                    show={showModal}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
};

export { ApploachAOEABody };
