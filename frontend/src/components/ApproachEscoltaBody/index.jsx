import React, { useState } from "react";
import { CertificacionCard } from "../CertificacionCard/CertificacionCard";
import { CertificacionModal } from "../CertificacionModal/CertificacionModal";
import { ESQUEMA_ESCOLTA } from '../../data/EsquemaEscolta'; // Datos

const ApproachEscoltaBody = () => {
  // 1. Estado para manejar la visibilidad del modal y los datos a mostrar
  const [showModal, setShowModal] = useState(false);
  const [selectedEsquema, setSelectedEsquema] = useState(null);

  // 2. Función para abrir el modal
  const handleOpenModal = (esquemaData) => {
      setSelectedEsquema(esquemaData);
      setShowModal(true);
  };

  // 3. Función para cerrar el modal
  const handleCloseModal = () => {
      setShowModal(false);
      setSelectedEsquema(null);
  };

  return (
    <div className="container my-5">
        {/* <h2 className="h1 text-center mb-5">Nuestros Enfoques de Certificación</h2> */}

        <div className="row justify-content-center" >
            
            {/* Aquí iterarías sobre tus 7 enfoques, pero para el ejemplo usamos solo el de Vigilancia.
            Si tuvieras un array de 7 esquemas, harías: 
            {TODOS_LOS_ESQUEMAS.map((esquema) => (
                <CertificacionCard ... onOpenModal={() => handleOpenModal(esquema)} />
            ))}
            */}

            {/* Tarjeta de Vigilante de Seguridad */}
            <CertificacionCard
                titulo={ESQUEMA_ESCOLTA.titulo}
                infoClave={ESQUEMA_ESCOLTA.infoClave}
                documentos={ESQUEMA_ESCOLTA.documentos} 
                onOpenModal={() => handleOpenModal(ESQUEMA_ESCOLTA)}
            />
        </div>
        
        {/* El Modal: se renderiza condicionalmente */}
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

export { ApproachEscoltaBody };
