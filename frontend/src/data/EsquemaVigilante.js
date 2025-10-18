// data/EsquemaVigilante.js

export const ESQUEMA_VIGILANTE = {
    // Título principal
    titulo: "VIGILANTE DE SEGURIDAD",
    subtitulo: "ENFOQUE FUNCIONAL",
    
    // BLOQUE 1: Información Clave / Generalidades
    infoClave: [
        {
            titulo: "Esquema y Alcance",
            // NOTA: Contenido como TEXTO (string)
            contenido: "Certificación basada en el conocimiento y aplicación de las Normas Sectoriales de Competencia Laboral (NSCL) del SENA: Control de accesos, atención de crisis y prevención de incidentes de seguridad.",
            icono: "Shield" 
        },
        {
            titulo: "Vigencia de la Certificación",
            contenido: "Un (1) año a partir de la fecha de certificación.",
            icono: "CalendarCheck"
        },
        {
            titulo: "Costo del Proceso",
            contenido: "Tarifa del proceso de certificación a convenir.",
            icono: "CurrencyDollar"
        },
        {
            titulo: "Intentos de Examen",
            contenido: "Máximo Dos (2). Si no aprueba la primera, se programa una nueva fecha en un tiempo no mayor a 90 días calendario.",
            icono: "ArrowCounterClockwise"
        }
    ],

    // BLOQUE 2: Requisitos y Criterios Adicionales
    requisitos: [
        {
            titulo: "Prerrequisitos Básicos",
            // NOTA: Contenido como LISTA (array)
            contenido: [
                "Mayor de edad (18 años cumplidos).",
                "Saber leer y escribir."
            ],
            icono: "UserCheck"
        },
        {
            titulo: "Competencias a Evaluar",
            // NOTA: Contenido como LISTA (array)
            contenido: [
                "Autorizar ingreso.",
                "Custodiar bienes.",
                "Reportar actividades y novedades.",
                "Atender incidente (Caracterizar, asegurar área, aplicar medidas).",
                "Manipular equipos y recorrer instalaciones.",
                "Detectar patrones anormales de conducta."
            ],
            icono: "ListChecks"
        },
        {
            titulo: "Modalidad de Evaluación",
            // NOTA: Contenido como TEXTO (string)
            contenido: "Presencial en las instalaciones del organismo o a nivel nacional mediante el uso de ayudas tecnológicas (digital) bajo la Política de Seguridad.",
            icono: "Monitor"
        },
        {
            titulo: "Criterios de Suspensión/Retiro",
            // NOTA: Contenido como TEXTO (string)
            contenido: "Uso indebido de los certificados otorgados. Se aplica el Procedimiento interno definido para suspender o retirar la certificación.",
            icono: "Warning"
        }
    ],

    // BLOQUE 3: Proceso de Certificación (Pasos)
    proceso: [
        // ... (La estructura de "proceso" no causó error y se mantiene igual)
        {
            paso: 1,
            titulo: "SELECCIÓN",
            contenido: [
                "Información previa (Alcance, Tarifas, derechos, etc.).",
                "Diligenciamiento de solicitud y verificación de prerrequisitos.",
                "Firma del Contrato y registro en base de datos.",
                "Programación de la evaluación (Máximo tres días hábiles después del registro)."
            ]
        },
        {
            paso: 2,
            titulo: "DETERMINACIÓN",
            contenido: [
                "Explicación de metodología, tiempos y objetivos del examen.",
                "Aplicación de la evaluación en dos fases: Teórico (120 min) y Práctico (150 min).",
                "Resultado de aprobación: Mayor o igual a 70 puntos en la sumatoria de las fases.",
                "Programación de entrega de resultados (Máximo 8 días hábiles después de la evaluación)."
            ]
        },
        {
            paso: 3,
            titulo: "REVISIÓN Y ATESTACIÓN",
            contenido: [
                "Validación del Informe de Evaluación por el certificador.",
                "Toma de decisión de certificación.",
                "Impresión y firma del certificado (si aplica).",
                "Entrega del Certificado de conformidad.",
                "Cargue de la información del certificado al website (Nombres, vigencia, estado, etc.)."
            ]
        }
    ]
};