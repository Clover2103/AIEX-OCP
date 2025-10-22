// data/EsquemaGISC.js
import pdfNorma_210601020 from "../assets/alcances/pdf/gisc/NSCL 210601020 V2.pdf";

export const ESQUEMA_GISC = {
    // Títulos principales
    titulo: "GESTOR DE INFORMACIÓN Y SERVICIO AL CLIENTE",
    subtitulo: "ENFOQUE FUNCIONAL",
    
    // ===============================================================
    // BLOQUE 1: INFORMACIÓN CLAVE / GENERALIDADES
    // ===============================================================
    infoClave: [
        {
            titulo: "Esquema y Alcance",
            contenido: "Certificación basada en la NSCL: Atender clientes de acuerdo con procedimiento de servicio y normativa.",
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
            contenido: "Máximo Dos (2). Si el candidato no aprueba la evaluación integral en las tres etapas, se programa una nueva fecha en un tiempo no mayor a 90 días calendario.",
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
                "Interactuar con personas.",
                "Tratar información.",
                "Emitir respuesta."
            ],
            icono: "ListChecks"
        },
        {
            titulo: "Modalidad de Evaluación",
            contenido: "Presencial en las instalaciones designadas (A nivel nacional) o mediante el uso de ayudas tecnológicas (digital) bajo la Política de Seguridad.",
            icono: "Monitor"
        },
        {
            titulo: "Criterios de Suspensión/Retiro",
            contenido: "Cuando se identifican actividades que indiquen uso indebido de los certificados otorgados, se aplica el Procedimiento para suspender o retirar la certificación de acuerdo a la naturaleza de la situación.",
            icono: "Warning"
        },
        {
            titulo: "Cambios en el Esquema",
            contenido: "Únicamente si la NSCL de referencia sufre alguna modificación, actualización o ajuste y el comité del esquema determina que es necesario realizar cambios en el alcance y/o una evaluación adicional.",
            icono: "Update"
        },
        {
            titulo: "Logística del Examen",
            contenido: [
                "Idioma del examen: Castellano.",
                "Duración total del examen: 240 minutos.",
                "Vigilancia a los 18 meses. Renovación al año, no aplican actividades de vigilancia."
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
                "Aplicación de la evaluación en dos fases: Teórico (120 min) y Práctico (90 min).",
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
                "80 preguntas en total.",
                "Incluye opción múltiple con única respuesta, Verdadero o Falso, y Apareamiento."
            ]
        },
        practico: {
            duracion: "90 minutos",
            items: [
                "Caso 1: Agencia de reservas.",
                "Caso 2: Consulado.",
                "Caso 3: Entrevista - preguntas.",
                "Caso 4: Reporte de servicio."
            ]
        }
    },
    
    documentos: [
        { nombre: "NSCL 210601020 V2", url: pdfNorma_210601020 },
    ]
};