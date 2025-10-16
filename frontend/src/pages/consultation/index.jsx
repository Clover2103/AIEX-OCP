import React, { useState } from "react";
import { FileText, Folder, BookOpen, Layers } from 'lucide-react';
import { ConsultationCertificate } from "../../components/ConsultationCertificate";
import { ConsultationDocuments } from "../../components/ConsultationDocuments";
import { ConsultationManuals } from "../../components/ConsultationManuals";
import "./consultation.css"

// ----------------------------------------------------
// --- CSS PURO ---
// ----------------------------------------------------
const styles = (
  <style>
    {`
    /* Variables y Estilos Generales */
    

    
    `}
  </style>
);

// ----------------------------------------------------
// --- NUEVO ConsultationSelect (Navegación Visual) ---
// ----------------------------------------------------

const NavItem = ({ icon: Icon, label, value, isSelected, onClick }) => {
  // Aplicamos la clase 'selected' si es true
  const className = `nav-item ${isSelected ? 'selected' : ''}`;
  
  return (
    <div
      className={className}
      onClick={() => onClick(value)}
      role="button"
      aria-pressed={isSelected}
      aria-label={`Seleccionar ${label}`}
    >
      <Icon className="icon" />
      <span>{label}</span>
    </div>
  );
};

const ConsultationSelect = ({ selectedValue, onSelectChange }) => {
  const navItems = [
    { value: 'certificado', label: 'Certificado', icon: FileText },
    { value: 'documentos', label: 'Documentos', icon: Folder },
    { value: 'manuales', label: 'Manuales', icon: BookOpen },
  ];

  return (
    <div className="consultation-nav-bar"> 
      {navItems.map((item) => (
        <NavItem
          key={item.value}
          {...item}
          isSelected={selectedValue === item.value}
          onClick={onSelectChange}
        />
      ))}
    </div>
  );
};

// ----------------------------------------------------
// --- NUEVO Consultation (Componente Principal) ---
// ----------------------------------------------------

const Consultation = () => {
  // Estado inicializado a 'certificado'
  const [selectedOption, setSelectedOption] = useState('certificado');

  const handleSelectChange = (value) => {
    console.log("Opción seleccionada:", value);
    setSelectedOption(value);
  };

  return ( 
    <div className="consultation-app">
      {styles} {/* Inyectamos el CSS puro aquí */}

      <div className="consultation-wrapper">
        
        {/* Encabezado */}
        <h1 className="app-header">
            <Layers className="icon" />
            Panel de Consulta
        </h1>
        
        {/* Componente de Navegación (ConsultationSelect) */}
        <ConsultationSelect 
            selectedValue={selectedOption} 
            onSelectChange={handleSelectChange} 
        />
        
        {/* Contenido Dinámico (Renderizado Condicional) */}
        <section className="content-container">
            {selectedOption === 'certificado' && <ConsultationCertificate />}
            {selectedOption === 'documentos' && <ConsultationDocuments />}
            {selectedOption === 'manuales' && <ConsultationManuals />}
        </section>
        
      </div>
    </div>
  );
};

export { Consultation };