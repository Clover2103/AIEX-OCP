// data/EsquemaEscolta.js
import pdfNorma_260401048 from "../assets/alcances/pdf/escolta/NSCL 260401048 V1.pdf";
import pdfNorma_260401039 from "../assets/alcances/pdf/escolta/NSCL 260401039 V2.pdf";

export const ESQUEMA_ESCOLTA = {
    // Títulos principales
    titulo: "ESCOLTA DE SEGURIDAD",
    subtitulo: "ENFOQUE FUNCIONAL",
    
    // ===============================================================
    // BLOQUE 1: INFORMACIÓN CLAVE / GENERALIDADES
    // ===============================================================
    infoClave: [
        {
            titulo: "Esquema y Alcance",
            contenido: "Certificación como ESCOLTA DE SEGURIDAD. Basado en el conocimiento y aplicación de las Normas Sectoriales de Competencia Laboral (NSCL): Proteger personas y Evaluar riesgos del protegido.",
            icono: "Shield" 
        },
        {
            titulo: "Vigencia de la Certificación",
            contenido: "Un (1) año a partir de la fecha de certificación.",
            icono: "CalendarCheck"
        },
        {
            titulo: "Costo del Proceso",
            contenido: "25% del Salario Mínimo Mensual Legal Vigente (SMMLV) IVA incluido.",
            icono: "CurrencyDollar"
        },
        {
            titulo: "Intentos de Examen",
            contenido: "Máximo Dos (2). Si el candidato no aprueba la evaluación integral, se programará una nueva fecha en un tiempo no mayor a 90 días calendario.",
            icono: "ArrowCounterClockwise"
        }
    ],

    // ===============================================================
    // BLOQUE 2: REQUISITOS Y CRITERIOS ADICIONALES
    // ===============================================================
    requisitos: [
        {
            titulo: "Prerrequisitos Básicos",
            contenido: [
                "Mayor de edad (18 años cumplidos).",
                "Saber leer y escribir."
            ],
            icono: "UserCheck"
        },
        {
            titulo: "Competencias a Evaluar",
            contenido: [
                "Validar elementos.",
                "Evaluar trayectoria.",
                "Ejecutar plan de seguridad.",
                "Documentar informe.",
                "Verificar operativo.",
                "Vigilar activos.",
                "Tratar información.",
                "Estimar riesgos.",
                "Estructurar matriz.",
                "Proyectar propuesta de esquema de seguridad."
            ],
            icono: "ListChecks"
        },
        {
            titulo: "Modalidad de Evaluación",
            contenido: "Presencial en las instalaciones del organismo o a nivel nacional mediante el uso de ayudas tecnológicas (digital) bajo la Política de Seguridad.",
            icono: "Monitor"
        },
        {
            titulo: "Criterios de Suspensión/Retiro",
            contenido: "Cuando se identifican actividades que indiquen uso indebido de los certificados otorgados, se aplica el Procedimiento para suspender o retirar la certificación de acuerdo a la naturaleza de la situación.",
            icono: "Warning"
        },
        {
            titulo: "Cambios en el Esquema",
            contenido: "Únicamente si las NSCL de referencia sufren alguna modificación, actualización o ajuste y el comité del esquema determina que es necesario realizar cambios en el alcance y/o una evaluación adicional.",
            icono: "Update"
        },
        {
            titulo: "Logística del Examen",
            contenido: [
                "Idioma del examen: Castellano.",
                "Duración máxima del examen: 240 minutos (Teórico: 120 min / Práctico: 120 min).",
                "Renovación al año, no aplican actividades de vigilancia."
            ],
            icono: "Clock"
        }
    ],

    // ===============================================================
    // BLOQUE 3: PROCESO DE CERTIFICACIÓN (Pasos del 1 al 3)
    // ===============================================================
    proceso: [
        {
            paso: 1,
            titulo: "SELECCIÓN",
            contenido: [
                "Información previa al solicitante sobre el esquema de certificación (Alcance, Tarifas, derechos, etc.).",
                "Diligenciamiento de formulario de solicitud y verificación de prerrequisitos.",
                "Firma del Contrato, registro en base de datos y Facturación.",
                "Programación de la fecha y hora de evaluación (Máximo tres días hábiles después del registro)."
            ]
        },
        {
            paso: 2,
            titulo: "DETERMINACIÓN",
            contenido: [
                "Explicación de objetivos, metodología, tiempos y mecanismos de examen.",
                "Entrega de material del examen: Paso a paso de ingreso a la plataforma, Ordenador, Audífonos, etc.",
                "Aplicación de la evaluación en dos fases: Teórico (120 min) y Práctico (120 min).",
                "Resultado de aprobación: Mayor o igual a setenta (70) puntos en la sumatoria de las dos fases.",
                "Programación de fecha para entrega de resultados: Máximo ocho (8) días hábiles después de presentada la evaluación."
            ]
        },
        {
            paso: 3,
            titulo: "REVISIÓN Y ATESTACIÓN",
            contenido: [
                "El certificador revisa y valida el Informe de evaluación y el cumplimiento de los criterios.",
                "Toma de decisión de certificación y registro en formato definido.",
                "Si el candidato aprobó, se realiza la impresión y firma del certificado.",
                "Si no alcanzó el umbral, se elabora el Informe de No conformidad.",
                "Entrega del Certificado de conformidad.",
                "Cargue de la información del certificado al website (Nombres, vigencia, estado, etc.)."
            ]
        }
    ],

    // Información de detalle de módulos
    detalleExamen: {
        teorico: {
            duracion: "120 minutos",
            items: [
                "60 ítems de selección múltiple con única respuesta.",
                "10 ítems de Verdadero o Falso.",
                "10 ítems de Apareamiento."
            ]
        },
        practico: {
            duracion: "120 minutos",
            items: [
                "Ejercicio de selección/informe relacionado con la NSCL: Proteger personas según normativa.",
                "Ejercicio de selección/informe relacionado con la NSCL: Evaluar riesgos del protegido."
            ]
        }
    },

    documentos: [
        { nombre: "NSCL 260401048 V1", url: pdfNorma_260401048 },
        { nombre: "NSCL 260401039 V2", url: pdfNorma_260401039 },
    ]
};